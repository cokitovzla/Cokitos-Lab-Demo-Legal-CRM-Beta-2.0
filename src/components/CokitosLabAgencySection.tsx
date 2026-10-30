import React, { useState } from 'react';
import { 
  Sparkles, 
  FlaskConical, 
  Atom, 
  Zap, 
  Globe2, 
  ArrowRight, 
  LayoutDashboard, 
  MessageCircle, 
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
  const { language, t } = useLanguage();
  const isEs = language === 'es';

  // Interactive Reaction Step Switcher (Dexter's Lab x Breaking Bad chemistry metaphor)
  const [activeFormulaStep, setActiveFormulaStep] = useState<0 | 1 | 2>(1);

  // Selected Hub in the Global Network
  const [selectedHubIndex, setSelectedHubIndex] = useState<number>(0);

  const formulaSteps = [
    {
      id: 'step-reactivo',
      label: t.agency.step1Label,
      tag: t.agency.step1Tag,
      accent: 'from-amber-500/20 to-orange-500/10 border-amber-500/40 text-amber-300',
      icon: <FlaskConical className="w-4 h-4 text-amber-400" />,
      title: t.agency.step1Title,
      desc: t.agency.step1Desc,
      badge: t.agency.step1Badge
    },
    {
      id: 'step-catalizador',
      label: t.agency.step2Label,
      tag: t.agency.step2Tag,
      accent: 'from-cyan-500/25 to-emerald-500/15 border-cyan-400 text-cyan-200',
      icon: <Atom className="w-4 h-4 text-cyan-300 animate-spin" style={{ animationDuration: '6s' }} />,
      title: t.agency.step2Title,
      desc: t.agency.step2Desc,
      badge: t.agency.step2Badge
    },
    {
      id: 'step-cristal',
      label: t.agency.step3Label,
      tag: t.agency.step3Tag,
      accent: 'from-emerald-500/25 to-teal-500/15 border-emerald-400 text-emerald-200',
      icon: <Sparkles className="w-4 h-4 text-emerald-300 animate-pulse" />,
      title: t.agency.step3Title,
      desc: t.agency.step3Desc,
      badge: t.agency.step3Badge
    }
  ];

  const networkLocations = [
    { 
      country: isEs ? 'Estados Unidos' : 'United States', 
      city: 'Sede Central & Lab', 
      flag: '🇺🇸', 
      role: isEs ? 'Sede Central / Ideación & Tech Hub' : 'Headquarters & Idea Lab',
      lead: isEs ? 'Dirección General: Ana Teresa Sandoval («Cokito»)' : 'Executive Direction: Ana Teresa Sandoval ("Cokito")',
      description: isEs ? 'Núcleo donde se conciben las ideas, la arquitectura de software y la estrategia global de producto.' : 'Core where product architecture, software engineering, and global ideas are incubated.',
      status: '🟢 USA HQ'
    },
    { 
      country: isEs ? 'Francia' : 'France', 
      city: 'París', 
      flag: '🇫🇷', 
      role: isEs ? 'Agencia Asociada & Expansión UE' : 'Allied Agency & EU Expansion',
      lead: isEs ? 'Socio / Alianza de Agencia Local' : 'Local Agency Partner & Representation',
      description: isEs ? 'Representación estratégica y enlace con clientes corporativos para el mercado francófono europeo.' : 'Strategic representation and enterprise client relations for the French-speaking European market.',
      status: '🟢 París'
    },
    { 
      country: isEs ? 'Alemania' : 'Germany', 
      city: 'Berlín & Múnich', 
      flag: '🇩🇪', 
      role: isEs ? 'Socio Tecnológico & Europa Central' : 'Tech Partner & Central Europe',
      lead: isEs ? 'Representante Local de Negocios' : 'Local Business Development Partner',
      description: isEs ? 'Punto de contacto para proyectos de escalabilidad, software de gestión e integración transfronteriza.' : 'Contact point for business scalability, management software, and cross-border digital deployments.',
      status: '🟢 Berlín'
    },
    { 
      country: isEs ? 'Portugal' : 'Portugal', 
      city: 'Faro (Algarve)', 
      flag: '🇵🇹', 
      role: isEs ? 'Socio Estratégico & Hub Digital' : 'Strategic Partner & Digital Hub',
      lead: isEs ? 'Alianza Local & Puente Ibérico' : 'Local Alliance & Digital Gateway',
      description: isEs ? 'Atención especializada para nómadas digitales, despachos boutique y empresas en Portugal.' : 'Dedicated attention for boutique firms, digital businesses, and scaleups in Portugal.',
      status: '🟢 Faro'
    },
    { 
      country: isEs ? 'España' : 'Spain', 
      city: 'Madrid (Castellana)', 
      flag: '🇪🇸', 
      role: isEs ? 'Agencia Aliada · Distrito Financiero' : 'Allied Agency · Financial District',
      lead: isEs ? 'Representante Comercial & Agencia Local' : 'Commercial Representative & Local Agency',
      description: isEs ? 'Conexión con el ecosistema corporativo e institucional de la capital española y fondos de inversión.' : 'Connecting with corporate institutions, legal practices, and funds across Spain.',
      status: '🟢 Madrid'
    },
    { 
      country: isEs ? 'España' : 'Spain', 
      city: 'Valencia (Tech Hub)', 
      flag: '🇪🇸', 
      role: isEs ? 'Socio de Innovación & Startups' : 'Innovation & Startup Partner',
      lead: isEs ? 'Representante Local en Ecosistema Tech' : 'Tech Ecosystem Local Partner',
      description: isEs ? 'Alianza directa con incubadoras, scaleups y firmas modernas del polo mediterráneo de innovación.' : 'Direct alliance with incubators, scaleups, and modern practices in the Mediterranean innovation hub.',
      status: '🟢 Valencia'
    },
  ];

  const currentHub = networkLocations[selectedHubIndex] || networkLocations[0];

  return (
    <section 
      id="cokitos-lab" 
      className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-[#050B14] via-[#071322] to-[#030710] text-white relative overflow-hidden border-t border-cyan-500/30"
    >
      {/* Background Neon Glows (Dexter's Lab x Breaking Bad chemistry atmosphere) */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-[350px] h-[200px] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Cybernetic Tech Grid Blueprint Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #00f5ff 1px, transparent 1px), linear-gradient(to bottom, #00f5ff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header: Neon Lab Identity */}
        <div className="max-w-4xl mb-6 sm:mb-8 text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase mb-2 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-400/40 shadow-[0_0_12px_rgba(0,245,255,0.2)]">
            <FlaskConical className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            <span>{t.agency.kicker}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight leading-[1.15] mb-2 sm:mb-3">
            {t.agency.title} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              {isEs ? 'Transformamos tu visión en software de alto impacto.' : 'We engineer your ideas into scalable software.'}
            </span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-3xl font-normal">
            {t.agency.subtitle}
          </p>

          {/* Subtitle badge acknowledging Ana Teresa Sandoval ("Cokito") and local allies */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-300 bg-slate-900/90 border border-slate-700/80 p-2.5 rounded-xl max-w-2xl">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-wide flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              Dirección Creativa:
            </span>
            <span>
              Ideado por <strong>Ana Teresa Sandoval («Cokito»)</strong> con <strong>agencias aliadas y socios locales</strong> en cada sede.
            </span>
          </div>
        </div>

        {/* Dynamic Element 1: Chemistry Reaction / Formula Switcher */}
        <div className="mb-6 sm:mb-8">
          <div className="text-left mb-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
              <Atom className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.agency.formulaTitle}</span>
            </span>
          </div>

          {/* 3 Interactive Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-3.5">
            {formulaSteps.map((step, idx) => {
              const isSelected = activeFormulaStep === idx;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveFormulaStep(idx as 0 | 1 | 2)}
                  className={`p-3 rounded-xl text-left transition-all duration-200 flex items-center justify-between border cursor-pointer active:scale-[0.98] ${
                    isSelected
                      ? `bg-slate-900/90 border-cyan-400 shadow-[0_0_15px_rgba(0,245,255,0.18)] text-white`
                      : `bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200`
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase font-bold text-slate-400">
                        {step.tag}
                      </div>
                      <div className="text-xs font-display font-bold">
                        {step.label}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform shrink-0 ${isSelected ? 'rotate-90 text-cyan-400' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Featured Dynamic Reaction Stage View */}
          {(() => {
            const step = formulaSteps[activeFormulaStep];
            return (
              <div className="bg-gradient-to-r from-slate-900/95 via-[#081729]/90 to-slate-900/95 border border-cyan-500/30 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-xl relative overflow-hidden animate-in fade-in duration-200">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  <div className="space-y-2 max-w-3xl">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-cyan-950 border border-cyan-400/40 text-cyan-300">
                      <span>{step.badge}</span>
                      <span>·</span>
                      <span>Fase 0{activeFormulaStep + 1} de la Reacción</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-display font-extrabold text-white">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Reaction Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0 w-full lg:w-auto">
                    <button
                      type="button"
                      onClick={onOpenCRM}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs rounded-xl shadow-[0_0_15px_rgba(0,245,255,0.25)] transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                    >
                      <LayoutDashboard className="w-3.5 h-3.5 text-slate-950" />
                      <span>Ver CRM en Acción</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <button
                      type="button"
                      onClick={onOpenContact}
                      className="px-3.5 py-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl border border-white/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Hablar con Cokito&apos;s Lab</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Dynamic Element 2: Global Representative & Partner Alliance Hubs */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-6 backdrop-blur-md">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5 text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-1.5 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.agency.networkTitle}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-display font-extrabold text-white">
                {t.agency.hubsTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 max-w-2xl">
                {t.agency.networkDesc}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-lg shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>6 Nodos Activos</span>
            </div>
          </div>

          {/* Interactive Hub Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-4">
            {networkLocations.map((hub, idx) => {
              const isSelected = selectedHubIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedHubIndex(idx)}
                  className={`p-3 rounded-xl border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-cyan-950/40 via-slate-900/90 to-slate-900/90 border-cyan-400/80 shadow-[0_0_15px_rgba(0,245,255,0.12)] ring-1 ring-cyan-400/40'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xl">{hub.flag}</span>
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded border ${
                        isSelected 
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30' 
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}>
                        {hub.country}
                      </span>
                    </div>

                    <h4 className="text-sm font-display font-bold text-white">
                      {hub.city}
                    </h4>

                    <div className="text-[11px] font-semibold text-cyan-400 mb-1">
                      {hub.role}
                    </div>

                    <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                      {hub.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                    <span>{hub.status}</span>
                    <span className="text-cyan-400 font-bold hover:underline">Ver detalle →</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Selected Hub Banner */}
          <div className="bg-gradient-to-r from-[#0B1E36] via-[#071629] to-[#040C17] border border-cyan-500/40 rounded-xl p-3.5 sm:p-4 text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-lg">{currentHub.flag}</span>
                <span className="text-xs font-mono uppercase font-bold text-cyan-300">
                  {currentHub.country} · {currentHub.city}
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded border border-emerald-500/30">
                  {currentHub.status}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-display font-bold text-white">
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
              className="w-full md:w-auto px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.3)] shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Contactar Nodo en {currentHub.city.split(' ')[0]}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
