import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { CokitosLogo } from './CokitosLogo';
import { VirtualJudgeIcon } from './VirtualJudgeIcon';
import { 
  Shield, 
  LayoutDashboard, 
  Sparkles, 
  FolderKanban, 
  LogOut, 
  Briefcase, 
  Mail, 
  LogIn, 
  ChevronDown,
  Check,
  Globe2,
  Users,
  X
} from 'lucide-react';
import { trackNavigation } from '../lib/analytics';

interface NavbarProps {
  currentView: 'landing' | 'admin' | 'ecosystem' | 'portal';
  activeSection?: string;
  onNavigate: (view: 'landing' | 'admin' | 'ecosystem' | 'portal', sectionId?: string) => void;
  unreadLeadsCount?: number;
  onOpenAuth: (mode?: 'login' | 'register' | 'newsletter') => void;
  onOpenShare?: () => void;
  onToggleDiagnosticDrawer?: () => void;
  onToggleBlogDrawer?: () => void;
  isDiagnosticOpen?: boolean;
  isBlogOpen?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentView, 
  activeSection,
  onNavigate, 
  unreadLeadsCount = 0,
  onOpenAuth,
  onToggleDiagnosticDrawer,
  onToggleBlogDrawer,
  isDiagnosticOpen,
  isBlogOpen,
}) => {
  const { currentUser, logout } = useAuth();
  const { language, setLanguage, t, languagesList } = useLanguage();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileLangModalOpen, setMobileLangModalOpen] = useState(false);

  // Auto-close dropdown when viewport is resized back to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setLangDropdownOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Strict order: 1. Por qué -> 2. Qué hacemos -> 3. Cómo -> 4. Equipo -> 5. Contacto
  const navItems = [
    { id: 'por-que', label: t.nav.whyUs },
    { id: 'que-hacemos', label: t.nav.services },
    { id: 'como', label: t.nav.howItWorks },
    { id: 'equipo', label: t.nav.team },
    { id: 'contacto', label: t.nav.contact },
  ];

  const handleNavClick = (sectionId: string) => {
    trackNavigation(sectionId, 'navbar');
    onNavigate('landing', sectionId);
  };

  const handleLogoClick = () => {
    trackNavigation('inicio', 'navbar_logo');
    onNavigate('landing', 'inicio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentLangObj = languagesList.find(l => l.code === language) || languagesList[0];

  return (
    <header 
      style={{ position: 'sticky', top: 0 }}
      className="sticky top-0 z-50 w-full max-w-full bg-white/95 backdrop-blur-md border-b border-neutral-200/90 transition-all shadow-xs overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 lg:gap-4 h-14 sm:h-15">
          
          {/* Zone 1: Logo Wordmark (Cokito's Lab International) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 text-left group focus-visible:outline-none cursor-pointer"
              title="Cokito's Lab International"
              aria-label="Cokito's Lab International Inicio"
            >
              <CokitosLogo />
            </button>
          </div>

          {/* Zone 2: Navigation Links (Strict order: Por qué -> Qué hacemos -> Cómo -> Equipo -> Contacto) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-semibold">
            {navItems.map((item) => {
              const isActive = currentView === 'landing' && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  data-track-section="navbar"
                  data-track-action={`nav_${item.id}`}
                  className={`relative px-3 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer select-none group ${
                    isActive 
                      ? 'text-[#0071ce] bg-blue-50/90 font-bold shadow-2xs' 
                      : 'text-slate-600 hover:text-[#0071ce] hover:bg-blue-50/60 active:scale-95'
                  }`}
                >
                  <span className="relative z-10 transition-colors group-hover:text-[#0071ce]">
                    {item.label}
                  </span>
                  <span 
                    className={`absolute bottom-0.5 left-2 right-2 h-0.5 rounded-full bg-[#0071ce] transition-transform duration-200 origin-center ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-75'
                    }`} 
                  />
                </button>
              );
            })}
          </nav>

          {/* Zone 3 Desktop Actions: Languages (ES, FR, EN, IT, DE, PT) + Exact Mode States */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
            
            {/* 6 Languages Selector (ES · FR · EN · IT · DE · PT) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Cambiar idioma / Change language"
              >
                <span>{currentLangObj.flag}</span>
                <span className="font-mono">{currentLangObj.code.toUpperCase()}</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-1 w-44 bg-white border border-slate-200 rounded-xl shadow-xl p-1.5 z-50 animate-in fade-in slide-in-from-top-1 space-y-0.5">
                  {languagesList.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        language === lang.code ? 'bg-blue-50 text-[#0071ce] font-bold' : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </div>
                      {language === lang.code && <Check className="w-3.5 h-3.5 text-[#0071ce]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* When in CRM View: "CRM activo y ya" + single sleek Back to Web action (no duplicate login buttons) */}
            {currentView === 'admin' ? (
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-1.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>CRM activo</span>
                </span>
                <button
                  onClick={() => onNavigate('landing')}
                  data-track-section="navbar"
                  data-track-action="back_to_web"
                  className="px-3 py-1.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-lg shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                  title="Volver al Sitio Web Principal"
                >
                  <Briefcase className="w-3.5 h-3.5 text-[#0071ce]" />
                  <span>{t.nav.backToWeb}</span>
                </button>
              </div>
            ) : (
              /* When in Landing View: Login + Primary CRM Shortcut */
              <div className="flex items-center gap-2">
                {currentUser ? (
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onNavigate('portal')}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <FolderKanban className="w-3.5 h-3.5" />
                      <span>Mi Portal</span>
                    </button>
                    <button
                      onClick={logout}
                      className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg transition-colors cursor-pointer"
                      title="Cerrar sesión"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => onOpenAuth('login')}
                    data-track-section="navbar"
                    data-track-action="login_click"
                    className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-[#0071ce] hover:bg-blue-50/80 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer border border-slate-200"
                    title="Iniciar sesión / Registro"
                  >
                    <LogIn className="w-3.5 h-3.5 text-[#0071ce]" />
                    <span>{t.nav.login}</span>
                  </button>
                )}

                <button
                  onClick={() => onNavigate('admin')}
                  data-track-section="navbar"
                  data-track-action="crm_shortcut"
                  className="px-3.5 py-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 active:bg-black rounded-lg shadow-xs hover:shadow transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                  title="Acceder al Panel CRM Interno"
                >
                  <LayoutDashboard className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.nav.crm}</span>
                  {unreadLeadsCount > 0 && (
                    <span className="text-[10px] font-bold px-1.5 py-0.2 bg-[#0071ce] text-white rounded-full">
                      {unreadLeadsCount}
                    </span>
                  )}
                </button>
              </div>
            )}

          </div>

          {/* Zone 3 Responsive (< lg: Mobile & Tablet Header Action - Astro Juez Virtual & Language) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {/* Quick Language Mobile Toggle */}
            <button
              type="button"
              onClick={() => setMobileLangModalOpen(true)}
              className="px-2.5 py-1.5 bg-slate-100 hover:bg-[#0071ce] hover:text-white active:bg-[#0071ce] active:text-white text-slate-800 text-xs font-bold rounded-xl border border-slate-200 flex items-center gap-1.5 cursor-pointer transition-all duration-150 active:scale-95 shadow-2xs"
              title="Cambiar idioma / Change language"
              aria-label="Abrir selector de idiomas"
            >
              <span className="text-sm">{currentLangObj.flag}</span>
              <span className="font-mono text-xs">{currentLangObj.code.toUpperCase()}</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>

            {/* Astro Virtual Judge Launcher in Top Mobile Header */}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open-astro-ai'))}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0071ce] hover:brightness-110 active:scale-95 text-white rounded-xl shadow-xs border border-sky-400/40 transition-all text-xs font-bold cursor-pointer"
              title="Astro · Juez Virtual de Cokito's Lab"
              aria-label="Abrir juez virtual Astro"
            >
              <VirtualJudgeIcon size={24} showBadge />
              <span className="text-[11px] font-display font-bold text-sky-100 tracking-wide">
                Astro AI
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Language Selector Modal / Bottom Sheet */}
      {mobileLangModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setMobileLangModalOpen(false)}
        >
          <div 
            className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl p-5 border border-slate-200 animate-in slide-in-from-bottom-6 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0071ce] flex items-center justify-center">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {language === 'es' ? 'Seleccionar idioma' : 'Select language'}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    {language === 'es' ? 'Disponible en 6 idiomas europeos' : 'Available in 6 European languages'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileLangModalOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Cerrar selector de idiomas"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List of 6 Languages */}
            <div className="grid grid-cols-2 gap-2">
              {languagesList.map((lang) => {
                const isSelected = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setLanguage(lang.code);
                      setMobileLangModalOpen(false);
                    }}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all duration-150 cursor-pointer active:scale-95 ${
                      isSelected
                        ? 'bg-[#0071ce] text-white border-[#0071ce] font-extrabold shadow-md ring-2 ring-blue-300'
                        : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-[#0071ce] hover:bg-blue-50/60'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xl shrink-0">{lang.flag}</span>
                      <div className="min-w-0">
                        <div className={`text-xs truncate ${isSelected ? 'text-white' : 'text-slate-900 font-bold'}`}>
                          {lang.label}
                        </div>
                        <div className={`text-[10px] font-mono uppercase ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                          {lang.code}
                        </div>
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-white shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Close button pill */}
            <button
              type="button"
              onClick={() => setMobileLangModalOpen(false)}
              className="w-full mt-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              {language === 'es' ? 'Listo' : 'Done'}
            </button>
          </div>
        </div>
      )}

      {/* Fixed Mobile Bottom Tab Bar - Primary Mobile Navigation */}
      <nav 
        aria-label="Navegación móvil inferior"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 w-full max-w-full bg-white/95 backdrop-blur-md border-t border-neutral-200/90 h-16 py-1 px-1.5 flex items-center justify-around shadow-xl pb-[max(0.4rem,env(safe-area-inset-bottom))] box-border overflow-x-hidden"
      >
        {/* 1. Inicio */}
        <button
          onClick={handleLogoClick}
          className={`flex-1 flex flex-col items-center justify-center min-w-0 min-h-[46px] px-1 py-1 rounded-xl transition-all duration-150 cursor-pointer active:scale-90 ${
            currentView === 'landing' && (!activeSection || activeSection === 'inicio') 
              ? 'text-white bg-[#0071ce] font-extrabold shadow-sm' 
              : 'text-slate-600 hover:text-[#0071ce] hover:bg-blue-50/60'
          }`}
          title="Ir al inicio"
        >
          <Shield className="w-4.5 h-4.5 mb-0.5 shrink-0" />
          <span className="text-[10px] font-semibold tracking-tight truncate max-w-full">Inicio</span>
        </button>

        {/* 2. Servicios (Qué hacemos) */}
        <button
          onClick={() => handleNavClick('que-hacemos')}
          className={`flex-1 flex flex-col items-center justify-center min-w-0 min-h-[46px] px-1 py-1 rounded-xl transition-all duration-150 cursor-pointer active:scale-90 ${
            currentView === 'landing' && activeSection === 'que-hacemos' 
              ? 'text-white bg-[#0071ce] font-extrabold shadow-sm' 
              : 'text-slate-600 hover:text-[#0071ce] hover:bg-blue-50/60'
          }`}
          title="Ver servicios y qué hacemos"
        >
          <Sparkles className="w-4.5 h-4.5 mb-0.5 shrink-0" />
          <span className="text-[10px] font-semibold tracking-tight truncate max-w-full">{t.nav.services}</span>
        </button>

        {/* 3. Equipo */}
        <button
          onClick={() => handleNavClick('equipo')}
          className={`flex-1 flex flex-col items-center justify-center min-w-0 min-h-[46px] px-1 py-1 rounded-xl transition-all duration-150 cursor-pointer active:scale-90 ${
            currentView === 'landing' && activeSection === 'equipo' 
              ? 'text-white bg-[#0071ce] font-extrabold shadow-sm' 
              : 'text-slate-600 hover:text-[#0071ce] hover:bg-blue-50/60'
          }`}
          title="Ver equipo y especialistas"
        >
          <Users className="w-4.5 h-4.5 mb-0.5 shrink-0" />
          <span className="text-[10px] font-semibold tracking-tight truncate max-w-full">{t.nav.team}</span>
        </button>

        {/* 4. Contacto */}
        <button
          onClick={() => handleNavClick('contacto')}
          className={`flex-1 flex flex-col items-center justify-center min-w-0 min-h-[46px] px-1 py-1 rounded-xl transition-all duration-150 cursor-pointer active:scale-90 ${
            currentView === 'landing' && activeSection === 'contacto' 
              ? 'text-white bg-[#0071ce] font-extrabold shadow-sm' 
              : 'text-slate-600 hover:text-[#0071ce] hover:bg-blue-50/60'
          }`}
          title="Contacto y sedes"
        >
          <Mail className="w-4.5 h-4.5 mb-0.5 shrink-0" />
          <span className="text-[10px] font-semibold tracking-tight truncate max-w-full">{t.nav.contact}</span>
        </button>

        {/* 5. Idioma (with flag & modal toggle) */}
        <button
          onClick={() => setMobileLangModalOpen(true)}
          className={`flex-1 flex flex-col items-center justify-center min-w-0 min-h-[46px] px-1 py-1 rounded-xl transition-all duration-150 cursor-pointer active:scale-90 ${
            mobileLangModalOpen 
              ? 'text-white bg-[#0071ce] font-extrabold shadow-sm' 
              : 'text-slate-700 hover:text-[#0071ce] hover:bg-blue-50/60'
          }`}
          title="Cambiar idioma"
        >
          <span className="text-base leading-none mb-0.5 shrink-0">{currentLangObj.flag}</span>
          <span className="text-[10px] font-mono font-bold tracking-tight uppercase truncate max-w-full">
            {currentLangObj.code}
          </span>
        </button>

        {/* 6. CRM / Web Switch */}
        <button
          onClick={() => onNavigate(currentView === 'admin' ? 'landing' : 'admin')}
          className={`flex-1 flex flex-col items-center justify-center min-w-0 min-h-[46px] px-1 py-1 rounded-xl transition-all duration-150 cursor-pointer active:scale-90 ${
            currentView === 'admin' 
              ? 'text-white bg-emerald-600 font-extrabold shadow-sm' 
              : 'text-slate-900 bg-slate-100 hover:bg-[#0071ce] hover:text-white font-bold'
          }`}
          title={currentView === 'admin' ? t.nav.backToWeb : 'Ir al CRM'}
        >
          {currentView === 'admin' ? (
            <Briefcase className="w-4.5 h-4.5 mb-0.5 shrink-0" />
          ) : (
            <LayoutDashboard className="w-4.5 h-4.5 mb-0.5 shrink-0" />
          )}
          <span className="text-[10px] font-semibold tracking-tight truncate max-w-full">
            {currentView === 'admin' ? 'Web' : 'CRM'}
          </span>
        </button>
      </nav>
    </header>
  );
};
