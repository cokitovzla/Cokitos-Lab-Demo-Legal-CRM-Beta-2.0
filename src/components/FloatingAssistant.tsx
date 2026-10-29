import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  LayoutDashboard,
  Globe2,
  Cpu
} from 'lucide-react';
import { trackClick, trackWhatsAppClick } from '../lib/analytics';
import { useLanguage } from '../context/LanguageContext';

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
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'bot',
      text: isEs 
        ? '¡Hola! Soy Atlas, el asistente virtual inteligente desarrollado por Cokito\'s Lab International. Puedo responder tus dudas sobre los servicios legales, el CRM interno o cómo Cokito\'s Lab puede transformar tu propia idea de negocio en software.'
        : 'Hello! I am Atlas, the intelligent virtual assistant developed by Cokito\'s Lab International. I can answer your questions about the legal services demo, the live CRM, or how Cokito\'s Lab turns your business ideas into custom software.',
      timestamp: 'Ahora'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const presetFaqs = [
    {
      question: isEs ? '¿Qué es esta plataforma y qué construyó Cokito\'s Lab?' : 'What is this platform and what did Cokito\'s Lab build?',
      answer: isEs 
        ? 'Somos Cokito\'s Lab International, un laboratorio de soluciones tecnológicas e ideas. Un abogado nos trajo su visión y la convertimos en esta plataforma: una web multilingüe conectada a un CRM administrativo en tiempo real. Tú nos traes tu idea y nosotros la transformamos en software.'
        : 'We are Cokito\'s Lab International, a digital solutions and ideas laboratory. A founder brought us their concept and we turned it into this high-converting web platform connected to an internal real-time CRM. You bring us your idea, and we turn it into bespoke software.',
      actionLabel: isEs ? 'Conocer Cokito\'s Lab' : 'Learn about Cokito\'s Lab',
      actionSection: 'cokitos-lab'
    },
    {
      question: isEs ? '¿Dónde están las sedes y representantes de Cokito\'s Lab?' : 'Where are Cokito\'s Lab offices & representatives located?',
      answer: isEs 
        ? 'Cokito\'s Lab International tiene sede en USA y contamos con una red de representantes en Francia, Alemania, Faro (Portugal), Madrid y Valencia (España) para atender clientes en Europa y América.'
        : 'Cokito\'s Lab International is headquartered in the USA, with international representatives in France, Germany, Faro (Portugal), Madrid, and Valencia (Spain).',
      actionLabel: isEs ? 'Hablar por WhatsApp' : 'Chat on WhatsApp',
      actionType: 'whatsapp' as const
    },
    {
      question: isEs ? '¿Cómo funciona el Panel CRM interno?' : 'How does the internal CRM panel work?',
      answer: isEs 
        ? 'El CRM interno recibe en tiempo real todas las solicitudes y diagnósticos enviados desde la web. Puedes gestionar prospectos, asignar abogados, programar reuniones y formalizar expedientes.'
        : 'The internal CRM receives all leads and assessments in real time. Your team can manage pipelines, assign handlers, schedule meetings, and formalize client matters live.',
      actionLabel: isEs ? 'Entrar al Panel CRM' : 'Open CRM Panel',
      actionType: 'crm' as const
    },
    {
      question: isEs ? '¿Cómo solicitar una plataforma para mi propia empresa?' : 'How can I request a platform for my own company?',
      answer: isEs 
        ? '¡Es muy sencillo! Puedes agendar una sesión inicial con el equipo de Cokito\'s Lab a través de nuestro formulario o escribiéndonos directamente por WhatsApp para analizar los requerimientos de tu proyecto.'
        : 'Very simple! You can schedule a consultation with the Cokito\'s Lab team through our contact form or by messaging us on WhatsApp to discuss your project requirements.',
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
      ? 'Gracias por tu mensaje. Como asistente Atlas de Cokito\'s Lab International, te invito a coordinar una conversación directa con nuestro equipo o explorar el Panel CRM interno de esta demo.'
      : 'Thank you for your inquiry. As Atlas by Cokito\'s Lab International, I invite you to reach out directly to our team or explore the internal CRM panel in this demo.';

    let action: Message['action'] = { label: isEs ? 'Contactar por WhatsApp' : 'Chat via WhatsApp', type: 'whatsapp' };

    const lower = query.toLowerCase();
    if (lower.includes('crm') || lower.includes('panel') || lower.includes('admin')) {
      reply = isEs 
        ? 'Puedes explorar el CRM en vivo pulsando el botón "Panel CRM" en la barra superior. Allí verás el flujo completo de prospectos, notas y expedientes.'
        : 'You can explore the live CRM by clicking "CRM Panel" in the top bar. You will see the complete pipeline of requests, notes, and cases.';
      action = { label: isEs ? 'Ver Panel CRM' : 'View CRM Panel', type: 'crm' };
    } else if (lower.includes('cokito') || lower.includes('lab') || lower.includes('software') || lower.includes('precio') || lower.includes('costo')) {
      reply = isEs 
        ? 'En Cokito\'s Lab transformamos ideas en plataformas web y móviles con CRM integrado. Cuéntanos tu proyecto y preparamos una propuesta a la medida.'
        : 'At Cokito\'s Lab, we turn ideas into custom web and mobile platforms with integrated CRMs. Tell us about your project and we will tailor a proposal.';
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
      window.open('https://wa.me/34612000890?text=Hola%20Atlas,%20deseo%20conversar%20con%20Cokito\'s%20Lab%20sobre%20una%20solución%20digital.', '_blank');
    } else if (action.type === 'crm') {
      if (onOpenCRM) onOpenCRM();
    } else if (action.type === 'section' && action.target) {
      if (onNavigateSection) {
        onNavigateSection(action.target);
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-3 sm:p-3.5 bg-gradient-to-r from-[#0B192C] to-[#0071ce] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer border border-sky-400/40"
          title="Atlas · Asistente Virtual Cokito's Lab"
          aria-label="Abrir asistente virtual Atlas"
        >
          <div className="relative">
            <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-sky-300 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-[#0B192C]" />
          </div>
          <span className="hidden sm:inline text-xs font-bold font-display pr-1 tracking-wide">
            Atlas AI
          </span>
        </button>
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div 
          className="fixed bottom-24 sm:bottom-20 right-3 sm:right-6 z-50 w-[92vw] sm:w-[380px] max-w-sm h-[520px] max-h-[82vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0B192C] to-[#0071ce] text-white p-3.5 sm:p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-sky-300">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold font-display text-white">Atlas</h4>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-1.5 py-0.2 rounded font-mono font-semibold">
                    Cokito&apos;s Lab
                  </span>
                </div>
                <p className="text-[11px] text-sky-100">
                  {isEs ? 'Asistente Digital & Soluciones' : 'Digital Assistant & Solutions'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
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
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#0071ce] text-white rounded-br-xs'
                      : 'bg-white text-slate-800 border border-slate-200 shadow-2xs rounded-bl-xs'
                  }`}
                >
                  <p>{m.text}</p>
                </div>
                <span className="text-[9px] text-slate-400 mt-1 px-1 font-mono">{m.timestamp}</span>

                {m.action && (
                  <button
                    type="button"
                    onClick={() => handleActionClick(m.action)}
                    className="mt-1.5 px-3 py-1.5 bg-[#0071ce] hover:bg-[#005fb0] text-white rounded-xl text-[11px] font-bold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer active:scale-95"
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
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              {isEs ? 'Preguntas Frecuentes:' : 'Quick Questions:'}
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
              placeholder={isEs ? 'Pregunta a Atlas...' : 'Ask Atlas...'}
              className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white text-slate-900"
            />
            <button
              type="submit"
              className="p-2 bg-[#0071ce] hover:bg-[#005fb0] text-white rounded-xl cursor-pointer transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
