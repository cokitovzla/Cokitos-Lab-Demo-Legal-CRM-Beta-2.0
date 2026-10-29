import React, { useState } from 'react';
import { 
  Sparkles, 
  FlaskConical, 
  Atom, 
  Zap, 
  Globe2, 
  ArrowRight, 
  CheckCircle2, 
  LayoutDashboard, 
  MessageCircle, 
  Code2, 
  Layers,
  Building2,
  Cpu,
  Radio,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CokitosLabAgencySectionProps {
  onOpenCRM: () => void;
  onOpenContact: () => void;
}

export const CokitosLabAgencySection: React.FC<CokitosLabAgencySectionProps> = ({
  onOpenCRM,
  onOpenContact
}) => {
  const { language } = useLanguage();
  const isEs = language === 'es';

  // Interactive Reaction Step Switcher (Dexter's Lab x Breaking Bad chemistry metaphor)
  const [activeFormulaStep, setActiveFormulaStep] = useState<0 | 1 | 2>(1);

  // Selected Hub in the Global Network
  const [selectedHubIndex, setSelectedHubIndex] = useState<number>(0);

  const formulaSteps = [
    {
      id: 'step-reactivo',
      label: isEs ? '1. Reactivo: Tu Idea en Bruto' : '1. Raw Material: Your Vision',
      tag: isEs ? 'El Problema' : 'The Challenge',
      accent: 'from-amber-500/20 to-orange-500/10 border-amber-500/40 text-amber-300',
      icon: <FlaskConical className="w-5 h-5 text-amber-400 animate-bounce" />,
      title: isEs ? 'Tú nos traes tu necesidad o idea de negocio' : 'You bring us your business need or raw idea',
      desc: isEs 
        ? 'Un abogado, emprendedor o director de empresa llega al laboratorio con un problema común: «Pierdo horas redactando lo mismo 100 veces, los clientes me saturan por WhatsApp, no tengo trazabilidad y mis procesos son lentos y manuales».'
        : 'A founder, lawyer, or business director approaches our lab with a bottleneck: "We waste hours replying manually, leads get lost in messaging apps, and our operations are slow and fragmented".',
      badge: isEs ? 'Materia Prima' : 'Input'
    },
    {
      id: 'step-catalizador',
      label: isEs ? '2. Reacción: El Laboratorio de Cokito' : '2. Reaction: Cokito’s Lab Engine',
      tag: isEs ? 'La Alquimia Digital' : 'The Tech Catalyst',
      accent: 'from-cyan-500/25 to-emerald-500/15 border-cyan-400 text-cyan-200',
      icon: <Atom className="w-5 h-5 text-cyan-300 animate-spin" style={{ animationDuration: '6s' }} />,
      title: isEs ? 'Sintetizamos tu visión en arquitectura de software' : 'We synthesize your idea into production-grade software',
      desc: isEs 
        ? 'Ideado y dirigido por Ana Teresa Sandoval («Cokito»), nuestro laboratorio toma tu idea y la somete a ingeniería pura: diseñamos la experiencia de usuario (UX), el algoritmo de triaje preventivo, las reglas de negocio y una base de datos reactiva en tiempo real.'
        : 'Conceived and directed by Ana Teresa Sandoval ("Cokito"), our laboratory puts your idea through pure tech engineering: high-converting UX, intake algorithms, and real-time reactive backends.',
      badge: isEs ? 'Catalizador Activo' : 'Active Catalyst'
    },
    {
      id: 'step-cristal',
      label: isEs ? '3. Compuesto Puro: El Software en Vivo' : '3. Pure Compound: Live Software',
      tag: isEs ? 'El Resultado' : 'The Final Output',
      accent: 'from-emerald-500/25 to-teal-500/15 border-emerald-400 text-emerald-200',
      icon: <Sparkles className="w-5 h-5 text-emerald-300 animate-pulse" />,
      title: isEs ? 'Nace tu plataforma web + tu CRM administrativo' : 'Your live web platform + custom CRM is born',
      desc: isEs 
        ? 'El resultado es exactamente lo que estás viendo en esta pantalla: un portal institucional multilingüe con captación guiada de clientes conectado en directo con un CRM donde gestionas expedientes, presupuestos y equipo en cualquier país.'
        : 'The outcome is exactly what you are experiencing on this screen: a multilingual, high-converting public portal connected to an internal real-time CRM to manage clients and cases anywhere.',
      badge: isEs ? '99.8% Pureza Operativa' : 'High Performance'
    }
  ];

  const networkLocations = [
    { 
      country: isEs ? 'Estados Unidos' : 'United States', 
      city: 'Sede Central & Lab de Ideas', 
      flag: '🇺🇸', 
      role: isEs ? 'Sede Central / Ideación & Tech Hub' : 'Headquarters & Idea Lab',
      lead: isEs ? 'Dirección General: Ana Teresa Sandoval («Cokito»)' : 'Executive Direction: Ana Teresa Sandoval ("Cokito")',
      description: isEs ? 'Núcleo donde se conciben las ideas, la arquitectura de software y la estrategia global de producto.' : 'Core where product architecture, software engineering, and global ideas are incubated.',
      status: '🟢 Operativo · Hub Principal'
    },
    { 
      country: isEs ? 'Francia' : 'France', 
      city: 'París & Región Centro', 
      flag: '🇫🇷', 
      role: isEs ? 'Agencia Asociada & Expansión UE' : 'Allied Agency & EU Expansion',
      lead: isEs ? 'Socio / Alianza de Agencia Local' : 'Local Agency Partner & Representation',
      description: isEs ? 'Representación estratégica y enlace con clientes corporativos para el mercado francófono europeo.' : 'Strategic representation and enterprise client relations for the French-speaking European market.',
      status: '🟢 Operativo · Enlace París'
    },
    { 
      country: isEs ? 'Alemania' : 'Germany', 
      city: 'Berlín & Múnich', 
      flag: '🇩🇪', 
      role: isEs ? 'Socio Tecnológico & Europa Central' : 'Tech Partner & Central Europe',
      lead: isEs ? 'Representante Local de Negocios' : 'Local Business Development Partner',
      description: isEs ? 'Punto de contacto para proyectos de escalabilidad, software de gestión e integración transfronteriza.' : 'Contact point for business scalability, management software, and cross-border digital deployments.',
      status: '🟢 Operativo · Nodo Berlín'
    },
    { 
      country: isEs ? 'Portugal' : 'Portugal', 
      city: 'Faro (Algarve)', 
      flag: '🇵🇹', 
      role: isEs ? 'Socio Estratégico & Hub Digital' : 'Strategic Partner & Digital Hub',
      lead: isEs ? 'Alianza Local & Puente Ibérico' : 'Local Alliance & Digital Gateway',
      description: isEs ? 'Atención especializada para nómadas digitales, despachos boutique y empresas en Portugal.' : 'Dedicated attention for boutique firms, digital businesses, and scaleups in Portugal.',
      status: '🟢 Operativo · Nodo Faro'
    },
    { 
      country: isEs ? 'España' : 'Spain', 
      city: 'Madrid (Paseo de la Castellana)', 
      flag: '🇪🇸', 
      role: isEs ? 'Agencia Aliada · Distrito Financiero' : 'Allied Agency · Financial District',
      lead: isEs ? 'Representante Comercial & Agencia Local' : 'Commercial Representative & Local Agency',
      description: isEs ? 'Conexión con el ecosistema corporativo e institucional de la capital española y fondos de inversión.' : 'Connecting with corporate institutions, legal practices, and funds across Spain.',
      status: '🟢 Operativo · Nodo Madrid'
    },
    { 
      country: isEs ? 'España' : 'Spain', 
      city: 'Valencia (Hub de Innovación)', 
      flag: '🇪🇸', 
      role: isEs ? 'Socio de Innovación & Startups' : 'Innovation & Startup Partner',
      lead: isEs ? 'Representante Local en Ecosistema Tech' : 'Tech Ecosystem Local Partner',
      description: isEs ? 'Alianza directa con incubadoras, scaleups y firmas modernas del polo mediterráneo de innovación.' : 'Direct alliance with incubators, scaleups, and modern practices in the Mediterranean innovation hub.',
      status: '🟢 Operativo · Nodo Valencia'
    },
  ];

  const currentHub = networkLocations[selectedHubIndex] || networkLocations[0];

  return (
    <section 
      id="cokitos-lab" 
      className="py-16 sm:py-24 bg-gradient-to-b from-[#050B14] via-[#071322] to-[#030710] text-white relative overflow-hidden border-t border-cyan-500/30"
    >
      {/* Background Neon Glows (Dexter's Lab x Heisenberg aesthetic) */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-12 left-10 w-[350px] h-[250px] bg-blue-600/10 rounded-full blur-[90px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Cybernetic Tech Grid Blueprint Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #00f5ff 1px, transparent 1px), linear-gradient(to bottom, #00f5ff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header: Neon Lab Identity */}
        <div className="max-w-4xl mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase mb-3 bg-cyan-950/80 px-3.5 py-1.5 rounded-full border border-cyan-400/40 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
            <FlaskConical className="w-4 h-4 text-cyan-300 animate-pulse" />
            <span>Cokito&apos;s Lab International · Ideas-to-Software Laboratory</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            Tú nos traes tu idea en bruto. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              Nosotros la transformamos en software de alto impacto.
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
            En <strong>Cokito&apos;s Lab</strong> operamos como un laboratorio creativo y tecnológico. Esta misma página que estás navegando es la prueba viviente: <em>un abogado nos confió su idea y sintetizamos este portal con captación inteligente y un CRM administrativo en tiempo real</em>.
          </p>

          {/* Subtitle badge acknowledging Ana Teresa Sandoval and local allies */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-300 bg-slate-900/90 border border-slate-700/80 p-3 rounded-xl max-w-2xl">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-wide flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              Dirección Creativa:
            </span>
            <span>
              Ideado por <strong>Ana Teresa Sandoval («Cokito»)</strong> y respaldado por una <strong>red de agencias aliadas y socios estratégicos locales</strong> en cada país.
            </span>
          </div>
        </div>

        {/* Dynamic Element 1: Interactive Chemistry Reaction / Formula Switcher */}
        <div className="mb-14 sm:mb-20">
          <div className="text-left mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Atom className="w-4 h-4 text-cyan-400" />
              <span>La Fórmula de Cokito&apos;s Lab · Cómo Convertimos tu Idea en Software</span>
            </span>
          </div>

          {/* 3 Interactive Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {formulaSteps.map((step, idx) => {
              const isSelected = activeFormulaStep === idx;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveFormulaStep(idx as 0 | 1 | 2)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 flex items-center justify-between border cursor-pointer active:scale-[0.98] ${
                    isSelected
                      ? `bg-slate-900/90 border-cyan-400 shadow-[0_0_20px_rgba(0,245,255,0.2)] text-white`
                      : `bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200`
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase font-bold text-slate-400">
                        {step.tag}
                      </div>
                      <div className="text-xs sm:text-sm font-display font-bold">
                        {step.label}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-cyan-400' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Featured Dynamic Reaction Stage View */}
          {(() => {
            const step = formulaSteps[activeFormulaStep];
            return (
              <div className="bg-gradient-to-r from-slate-900/95 via-[#081729]/90 to-slate-900/95 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div className="space-y-3 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-cyan-950 border border-cyan-400/40 text-cyan-300">
                      <span>{step.badge}</span>
                      <span>·</span>
                      <span>Fase 0{activeFormulaStep + 1} de la Reacción</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-white">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Reaction Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
                    <button
                      type="button"
                      onClick={onOpenCRM}
                      className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs rounded-xl shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <LayoutDashboard className="w-4 h-4 text-slate-950" />
                      <span>Ver el Motor CRM en Acción</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={onOpenContact}
                      className="px-4 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Conversar con el Laboratorio</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Dynamic Element 2: Global Representative & Partner Alliance Hubs */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Red Internacional · Presencia en USA & Europa</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Sedes, Agencias Aliadas y Socios Estratégicos
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                En cada ciudad contamos con un aliado local —sea una agencia hermana o un socio de confianza— para coordinar tu proyecto con cercanía y visión global:
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-lg shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>6 Nodos Operativos Activos</span>
            </div>
          </div>

          {/* Interactive Hub Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
            {networkLocations.map((hub, idx) => {
              const isSelected = selectedHubIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedHubIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-cyan-950/40 via-slate-900/90 to-slate-900/90 border-cyan-400/80 shadow-[0_0_20px_rgba(0,245,255,0.15)] ring-1 ring-cyan-400/40'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{hub.flag}</span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                        isSelected 
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30' 
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}>
                        {hub.country}
                      </span>
                    </div>

                    <h4 className="text-base font-display font-bold text-white mb-0.5">
                      {hub.city}
                    </h4>

                    <div className="text-xs font-semibold text-cyan-400 mb-2">
                      {hub.role}
                    </div>

                    <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                      {hub.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                    <span>{hub.status}</span>
                    <span className="text-cyan-400 font-bold hover:underline">Ver detalle →</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Selected Hub Banner */}
          <div className="bg-gradient-to-r from-[#0B1E36] via-[#071629] to-[#040C17] border border-cyan-500/40 rounded-2xl p-5 sm:p-6 text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xl">{currentHub.flag}</span>
                <span className="text-xs font-mono uppercase font-bold text-cyan-300">
                  {currentHub.country} · {currentHub.city}
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                  {currentHub.status}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-display font-bold text-white">
                {currentHub.lead}
              </h4>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                {currentHub.description}
              </p>
            </div>

            <a
              href={`https://wa.me/34612000890?text=Hola%20Cokito's%20Lab,%20me%20gustar%C3%ADa%20conversar%20con%20el%20representante%20en%20${encodeURIComponent(currentHub.city)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contactar Nodo en {currentHub.city.split(' ')[0]}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
