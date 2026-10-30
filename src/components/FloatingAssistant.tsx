import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  ArrowRight, 
  ArrowUp,
  Scale,
  Gavel,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { trackClick } from '../lib/analytics';
import { useLanguage } from '../context/LanguageContext';
import { VirtualJudgeIcon } from './VirtualJudgeIcon';

interface FloatingAssistantProps {
  onNavigateSection?: (sectionId: string) => void;
  onOpenCRM?: () => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  action?: {
    label: string;
    type: 'whatsapp' | 'section' | 'crm' | 'external';
    target?: string;
  };
}

export const FloatingAssistant: React.FC<FloatingAssistantProps> = ({ 
  onNavigateSection,
  onOpenCRM 
}) => {
  const { language } = useLanguage();
  const isEs = language === 'es';

  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'bot',
      text: isEs 
        ? '¡Saludos! Soy Astro ⚖️, tu juez y asesor legal virtual desarrollado por Cokito\'s Lab International. Te doy mi veredicto: esta plataforma es un demo vivo de cómo convertimos una visión legal en software de alto impacto con CRM en tiempo real. ¿En qué puedo orientarte hoy?'
        : 'Greetings! I am Astro ⚖️, your virtual judge and legal tech advisor developed by Cokito\'s Lab International. My verdict: this platform is a live demonstration of how we turn ideas into custom software with an integrated real-time CRM. How may I assist you today?',
      timestamp: 'Ahora'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Listen for scroll to toggle the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for external trigger from top mobile header
  useEffect(() => {
    const handleOpenAstro = () => setIsOpen(true);
    const handleToggleAstro = () => setIsOpen(prev => !prev);
    
    window.addEventListener('open-astro-ai', handleOpenAstro);
    window.addEventListener('toggle-astro-ai', handleToggleAstro);
    
    return () => {
      window.removeEventListener('open-astro-ai', handleOpenAstro);
      window.removeEventListener('toggle-astro-ai', handleToggleAstro);
    };
  }, []);

  const scrollToTop = () => {
    trackClick('global', 'scroll_to_top');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const presetFaqs = [
    {
      question: isEs ? '¿Cuál es el veredicto sobre esta demo de Cokito\'s Lab?' : 'What is your verdict on this Cokito\'s Lab demo?',
      answer: isEs 
        ? 'El veredicto es concluyente: Cokito\'s Lab International transformó una idea tradicional de asesoría legal en una plataforma integral con captación digital, 6 idiomas europeos y un CRM interno en tiempo real para gestionar expedientes y clientes.'
        : 'The verdict is conclusive: Cokito\'s Lab International transformed a traditional legal concept into a high-converting platform with 6 European languages and an internal real-time CRM to manage clients and legal matters.',
      actionLabel: isEs ? 'Conocer Cokito\'s Lab' : 'Discover Cokito\'s Lab',
      actionSection: 'cokitos-lab'
    },
    {
      question: isEs ? '¿Cómo funciona el Panel CRM y la gestión de expedientes?' : 'How does the internal CRM and case management work?',
      answer: isEs 
        ? 'El CRM recibe automáticamente todos los contactos y solicitudes de la web. Permite filtrar por estado, asignar abogados responsables, registrar notas internas y formalizar expedientes jurídicos.'
        : 'The internal CRM automatically ingests all leads and form submissions. It allows your team to track stages, assign handling attorneys, add confidential internal notes, and advance cases live.',
      actionLabel: isEs ? 'Entrar al Panel CRM' : 'Open CRM Panel',
      actionType: 'crm' as const
    },
    {
      question: isEs ? '¿Dónde están las sedes y aliados de Cokito\'s Lab?' : 'Where are Cokito\'s Lab headquarters & global partners?',
      answer: isEs 
        ? 'Cokito\'s Lab International tiene sede en USA y una red activa de aliados y representantes en Francia, Alemania, Faro (Portugal), Madrid y Valencia (España). ¡Podemos atender tu proyecto en toda Europa y América!'
        : 'Cokito\'s Lab International is headquartered in the USA, supported by international partners and representatives in France, Germany, Faro (Portugal), Madrid, and Valencia (Spain).',
      actionLabel: isEs ? 'Conversar por WhatsApp' : 'Chat via WhatsApp',
      actionType: 'whatsapp' as const
    },
    {
      question: isEs ? '¿Cómo convertir la idea de mi empresa en software?' : 'How can I turn my company\'s idea into bespoke software?',
      answer: isEs 
        ? '¡Tú nos traes tu idea y nosotros la convertimos en realidad! En Cokito\'s Lab diseñamos y desarrollamos plataformas a la medida para bufetes, consultoras y startups.'
        : 'You bring us your vision, and we engineer the solution! At Cokito\'s Lab, we design and build custom web and mobile platforms with turnkey administrative dashboards.',
      actionLabel: isEs ? 'Ir a Contacto' : 'Go to Contact',
      actionSection: 'contacto'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSelectFaq = (faq: typeof presetFaqs[0]) => {
    const userMsg: Message = {
      id: `msg-${Date.now()}-user`,
      sender: 'user',
      text: faq.question,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const botMsg: Message = {
      id: `msg-${Date.now()}-bot`,
      sender: 'bot',
      text: faq.answer,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      action: faq.actionType === 'whatsapp' 
        ? { label: faq.actionLabel, type: 'whatsapp' }
        : faq.actionType === 'crm'
        ? { label: faq.actionLabel, type: 'crm' }
        : { label: faq.actionLabel, type: 'section', target: faq.actionSection }
    };

    setMessages(prev => [...prev, userMsg, botMsg]);
  };

  const handleSendCustomMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputQuery.trim();
    if (!query) return;

    const userMsg: Message = {
      id: `msg-${Date.now()}-user`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    let reply = isEs 
      ? 'Como juez y consejero virtual de Cokito\'s Lab International, he registrado tu consulta. Te sugiero explorar el Panel CRM interno o agendar una llamada con Ana Teresa y nuestro equipo de desarrollo.'
      : 'As the virtual judge and advisor for Cokito\'s Lab International, I have received your message. I recommend exploring the internal CRM panel or booking a discussion with our engineering team.';

    let action: Message['action'] = { label: isEs ? 'Contactar por WhatsApp' : 'Chat via WhatsApp', type: 'whatsapp' };

    const lower = query.toLowerCase();
    if (lower.includes('crm') || lower.includes('panel') || lower.includes('admin') || lower.includes('expediente')) {
      reply = isEs 
        ? 'El Panel CRM está activo en la barra de navegación. Podrás ver prospectos, expedientes procesales y notas internas en tiempo real.'
        : 'The internal CRM is accessible from the navigation bar. You can inspect leads, legal files, and notes in real time.';
      action = { label: isEs ? 'Ver Panel CRM' : 'View CRM Panel', type: 'crm' };
    } else if (lower.includes('cokito') || lower.includes('lab') || lower.includes('software') || lower.includes('precio') || lower.includes('costo') || lower.includes('desarrollo')) {
      reply = isEs 
        ? 'En Cokito\'s Lab somos un laboratorio creativo de software. Creamos soluciones tecnológicas adaptadas a la medida de tu sector con acabados de primera línea.'
        : 'At Cokito\'s Lab, we are a digital product laboratory. We engineer bespoke platforms with turnkey CRM capabilities tailored to your specific industry.';
      action = { label: isEs ? 'Sección Cokito\'s Lab' : 'Cokito\'s Lab Section', type: 'section', target: 'cokitos-lab' };
    }

    const botMsg: Message = {
      id: `msg-${Date.now()}-bot`,
      sender: 'bot',
      text: reply,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      action
    };

    setMessages(prev => [...prev, userMsg, botMsg]);
    setInputQuery('');
  };

  const handleActionClick = (action: Message['action']) => {
    if (!action) return;
    if (action.type === 'whatsapp') {
      window.open('https://wa.me/34612000890?text=Hola%20Astro,%20deseo%20conversar%20con%20Cokito\'s%20Lab%20sobre%20una%20solución%20tecnológica.', '_blank');
    } else if (action.type === 'crm') {
      if (onOpenCRM) onOpenCRM();
      setIsOpen(false);
    } else if (action.type === 'section' && action.target) {
      if (onNavigateSection) {
        onNavigateSection(action.target);
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* 
        Side-by-Side Floating Action Cluster:
        Both the ScrollToTop arrow and the Astro Juecesito Virtual launcher button
        sit in the exact same flex container side-by-side with zero possibility of overlapping!
      */}
      <div 
        className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-40 flex items-center gap-2.5 transition-all duration-300"
      >
        {/* Scroll-To-Top Arrow Button (Appears side-by-side to the left of Astro when scrolled) */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            data-track-section="global"
            data-track-name="btn_scroll_to_top"
            aria-label="Volver arriba"
            title="Volver al inicio de la página"
            className="p-2.5 sm:p-3 bg-white/95 hover:bg-[#0071ce] text-[#0B192C] hover:text-white rounded-full shadow-lg hover:shadow-xl border-2 border-slate-200 hover:border-[#0071ce] transition-all duration-200 cursor-pointer active:scale-90 flex items-center justify-center group backdrop-blur-md animate-in fade-in zoom-in-90"
          >
            <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-200 group-hover:-translate-y-0.5 text-current" />
            <span className="sr-only">Volver arriba</span>
          </button>
        )}

        {/* Astro AI Floating Trigger Button (With Juecesito Avatar) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative group p-2 sm:p-2.5 bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0071ce] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer border-2 ${
            isOpen ? 'border-sky-300 ring-2 ring-sky-400/50' : 'border-sky-400/40'
          }`}
          title="Astro · Juez Virtual de Cokito's Lab"
          aria-label="Abrir juez virtual Astro"
        >
          <VirtualJudgeIcon size={30} showBadge={!isOpen} />
          <div className="hidden sm:flex flex-col text-left pr-1.5 leading-tight">
            <span className="text-xs font-bold font-display tracking-wide text-white flex items-center gap-1">
              Astro AI
              <Sparkles className="w-3 h-3 text-sky-300" />
            </span>
            <span className="text-[10px] text-sky-200 font-mono">
              {isEs ? 'Juez Virtual' : 'Virtual Judge'}
            </span>
          </div>
        </button>
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div 
          className="fixed bottom-20 right-3 left-3 sm:left-auto sm:right-6 sm:bottom-20 z-50 sm:w-[390px] max-w-full h-[540px] max-h-[calc(100vh-140px)] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Header with Judge Persona */}
          <div className="bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0071ce] text-white p-3.5 sm:p-4 flex items-center justify-between shrink-0 border-b border-sky-400/20">
            <div className="flex items-center gap-2.5">
              <div className="p-1 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                <VirtualJudgeIcon size={34} showBadge />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold font-display text-white">Astro</h4>
                  <span className="text-[10px] bg-amber-400/20 text-amber-200 border border-amber-300/30 px-1.5 py-0.2 rounded font-mono font-bold flex items-center gap-1">
                    <Gavel className="w-2.5 h-2.5" />
                    {isEs ? 'Juez Virtual' : 'Virtual Judge'}
                  </span>
                </div>
                <p className="text-[11px] text-sky-100 flex items-center gap-1">
                  <span>Cokito&apos;s Lab International</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Conversation history */}
          <div className="flex-1 p-3.5 space-y-3 overflow-y-auto bg-slate-50 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-end gap-1.5 max-w-[88%]">
                  {m.sender === 'bot' && (
                    <div className="shrink-0 mb-1">
                      <VirtualJudgeIcon size={20} />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-2xl leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-[#0071ce] text-white rounded-br-xs'
                        : 'bg-white text-slate-800 border border-slate-200 shadow-2xs rounded-bl-xs'
                    }`}
                  >
                    <p>{m.text}</p>
                  </div>
                </div>
                <span className="text-[9px] text-slate-400 mt-1 px-1 font-mono">{m.timestamp}</span>

                {m.action && (
                  <button
                    type="button"
                    onClick={() => handleActionClick(m.action)}
                    className="mt-1.5 px-3 py-1.5 bg-[#0071ce] hover:bg-[#005fb0] text-white rounded-xl text-[11px] font-bold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer active:scale-95 ml-7"
                  >
                    <span>{m.action.label}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Preset Questions Chips */}
          <div className="p-2.5 bg-white border-t border-slate-100 shrink-0">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Scale className="w-3 h-3 text-[#0071ce]" />
              <span>{isEs ? 'Consultas rápidas al Juez Astro:' : 'Ask Judge Astro:'}</span>
            </div>
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
              {presetFaqs.map((faq, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSelectFaq(faq)}
                  className="text-left text-[11px] text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-[#0071ce] px-2.5 py-1 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                >
                  {faq.question}
                </button>
              ))}
            </div>
          </div>

          {/* Input form */}
          <form onSubmit={handleSendCustomMessage} className="p-2.5 bg-white border-t border-slate-200 flex gap-2 shrink-0">
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder={isEs ? 'Pregunta al Juez Virtual Astro...' : 'Ask Virtual Judge Astro...'}
              className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white text-slate-900 placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="p-2 bg-[#0071ce] hover:bg-[#005fb0] text-white rounded-xl cursor-pointer transition-colors"
              title="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
