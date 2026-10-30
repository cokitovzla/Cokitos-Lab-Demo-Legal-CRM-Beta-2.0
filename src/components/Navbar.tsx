import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { CokitosLogo } from './CokitosLogo';
import { 
  Shield, 
  LayoutDashboard, 
  Menu, 
  X, 
  Sparkles, 
  FolderKanban, 
  LogOut, 
  Briefcase, 
  Mail, 
  LogIn, 
  ChevronDown,
  Check
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
}) => {
  const { currentUser, logout } = useAuth();
  const { language, setLanguage, t, languagesList } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  // Auto-close dropdown when viewport is resized back to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
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
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    trackNavigation('inicio', 'navbar_logo');
    onNavigate('landing', 'inicio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
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

          {/* Zone 3 Responsive (< lg: Mobile & Tablet) */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            {/* Quick Language Mobile Toggle */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="px-2 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-lg border border-slate-200 flex items-center gap-1 cursor-pointer"
              >
                <span>{currentLangObj.flag}</span>
                <span className="font-mono text-[11px]">{currentLangObj.code.toUpperCase()}</span>
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 mt-1 w-40 bg-white border border-slate-200 rounded-xl shadow-xl p-1 z-50 space-y-0.5">
                  {languagesList.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1 rounded-md text-xs cursor-pointer ${
                        language === lang.code ? 'bg-blue-50 text-[#0071ce] font-bold' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{lang.flag} {lang.label}</span>
                      {language === lang.code && <Check className="w-3 h-3 text-[#0071ce]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick CRM/Web single toggle button for mobile */}
            <button
              onClick={() => onNavigate(currentView === 'admin' ? 'landing' : 'admin')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                currentView === 'admin' 
                  ? 'bg-emerald-600 text-white shadow-xs' 
                  : 'bg-slate-900 text-white'
              }`}
              title={currentView === 'admin' ? t.nav.backToWeb : t.nav.crm}
            >
              {currentView === 'admin' ? (
                <>
                  <Briefcase className="w-3.5 h-3.5 text-white" />
                  <span>Web</span>
                </>
              ) : (
                <>
                  <LayoutDashboard className="w-3.5 h-3.5 text-blue-300" />
                  <span>CRM</span>
                </>
              )}
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-neutral-700 hover:text-[#0071ce] hover:bg-blue-50/60 rounded-lg focus:outline-none cursor-pointer transition-colors"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#0071ce]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Responsive Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-5 space-y-2.5 animate-in fade-in slide-in-from-top-2 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-1 text-sm font-semibold text-neutral-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 px-3 rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                  currentView === 'landing' && activeSection === item.id 
                    ? 'text-[#0071ce] bg-blue-50 font-bold' 
                    : 'hover:text-[#0071ce] hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-slate-400">→</span>
              </button>
            ))}
          </div>

          <div className="pt-2.5 border-t border-neutral-100 flex flex-col gap-2">
            {currentView === 'admin' ? (
              <div className="space-y-1.5">
                <div className="w-full py-2 px-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>CRM activo</span>
                </div>
                <button
                  onClick={() => {
                    onNavigate('landing');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2 px-4 text-xs font-bold rounded-lg bg-[#0071ce] text-white hover:bg-[#005fb0] flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{t.nav.backToWeb}</span>
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => {
                    onNavigate('admin');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2 px-4 text-xs font-bold rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-colors bg-slate-900 text-white hover:bg-slate-800"
                >
                  <LayoutDashboard className="w-4 h-4 text-blue-400" />
                  <span>{t.nav.crm}</span>
                </button>

                <button
                  onClick={() => {
                    onOpenAuth('login');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2 px-4 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold rounded-lg border border-slate-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogIn className="w-4 h-4 text-[#0071ce]" />
                  <span>{t.nav.login} / {t.nav.register}</span>
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Fixed Mobile Bottom Tab Bar - Strictly bounded without overflow */}
      <nav 
        aria-label="Navegación móvil inferior"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 w-full max-w-full bg-white/95 backdrop-blur-md border-t border-neutral-200/90 py-1 px-1 flex items-center justify-around shadow-lg pb-[max(0.35rem,env(safe-area-inset-bottom))] box-border overflow-x-hidden"
      >
        <button
          onClick={handleLogoClick}
          className={`flex flex-col items-center justify-center min-w-[50px] min-h-[44px] px-1 py-0.5 transition-colors ${
            currentView === 'landing' && (!activeSection || activeSection === 'inicio') ? 'text-[#0071ce] font-bold' : 'text-[#626967] hover:text-[#3e4543]'
          }`}
        >
          <Shield className="w-4.5 h-4.5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Inicio</span>
        </button>

        <button
          onClick={() => handleNavClick('por-que')}
          className="flex flex-col items-center justify-center min-w-[50px] min-h-[44px] px-1 py-0.5 text-[#626967] hover:text-[#3e4543] transition-colors"
        >
          <Briefcase className="w-4.5 h-4.5 mb-0.5" />
          <span className="text-[10px] tracking-tight">{t.nav.whyUs}</span>
        </button>

        <button
          onClick={() => handleNavClick('que-hacemos')}
          className="flex flex-col items-center justify-center min-w-[50px] min-h-[44px] px-1 py-0.5 text-[#626967] hover:text-[#3e4543] transition-colors"
        >
          <Sparkles className="w-4.5 h-4.5 mb-0.5" />
          <span className="text-[10px] tracking-tight">{t.nav.services}</span>
        </button>

        <button
          onClick={() => handleNavClick('contacto')}
          className="flex flex-col items-center justify-center min-w-[50px] min-h-[44px] px-1 py-0.5 text-[#626967] hover:text-[#3e4543] transition-colors"
        >
          <Mail className="w-4.5 h-4.5 mb-0.5" />
          <span className="text-[10px] tracking-tight">{t.nav.contact}</span>
        </button>

        <button
          onClick={() => onNavigate(currentView === 'admin' ? 'landing' : 'admin')}
          className={`flex flex-col items-center justify-center min-w-[50px] min-h-[44px] px-1 py-0.5 transition-colors ${
            currentView === 'admin' ? 'text-emerald-600 font-bold' : 'text-neutral-500 hover:text-neutral-900'
          }`}
        >
          <LayoutDashboard className="w-4.5 h-4.5 mb-0.5" />
          <span className="text-[10px] tracking-tight">{currentView === 'admin' ? 'Web' : 'CRM'}</span>
        </button>
      </nav>
    </header>
  );
};
