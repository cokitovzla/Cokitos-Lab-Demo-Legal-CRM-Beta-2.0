import React from 'react';

interface CokitosLogoProps {
  className?: string;
  showFirmName?: boolean;
  theme?: 'light' | 'dark';
}

export const CokitosLogo: React.FC<CokitosLogoProps> = ({ 
  className = "h-8 w-auto", 
  showFirmName = true,
  theme = 'light' 
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* JurisNova Legal Emblem: Balanza de la Justicia (Scales of Justice) */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg 
          viewBox="0 0 44 44" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-sm transition-transform group-hover:scale-105"
          aria-hidden="true"
        >
          {/* Base Shield: deep obsidian navy with refined cobalt legal trim */}
          <rect 
            x="2" 
            y="2" 
            width="40" 
            height="40" 
            rx="10" 
            fill={isDark ? "#08101E" : "#0B192C"} 
            stroke="#0071ce" 
            strokeWidth="1.4"
            strokeOpacity="0.85"
          />

          {/* Pedestal / Architectural Base of Justice */}
          <path 
            d="M15 32H29M17 29.5H27" 
            stroke="#38bdf8" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
          />

          {/* Central Column / Pillar of Law */}
          <line 
            x1="22" 
            y1="11" 
            x2="22" 
            y2="29.5" 
            stroke="#38bdf8" 
            strokeWidth="1.8" 
            strokeLinecap="round" 
          />

          {/* Finial / Crown at the Top of the Column */}
          <circle 
            cx="22" 
            cy="10.5" 
            r="1.8" 
            fill="#38bdf8" 
          />

          {/* Balanced Horizontal Crossbar */}
          <line 
            x1="10.5" 
            y1="15" 
            x2="33.5" 
            y2="15" 
            stroke="#38bdf8" 
            strokeWidth="1.8" 
            strokeLinecap="round" 
          />

          {/* Left Scale Suspension Chains */}
          <line x1="12.5" y1="15" x2="8.5" y2="22" stroke="#93c5fd" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="12.5" y1="15" x2="16.5" y2="22" stroke="#93c5fd" strokeWidth="1.2" strokeLinecap="round" />

          {/* Left Scale Pan (Balanza de Ley) */}
          <path 
            d="M8 22C8 25.5 17 25.5 17 22Z" 
            fill="#0071ce" 
            fillOpacity="0.45"
            stroke="#38bdf8" 
            strokeWidth="1.3" 
            strokeLinejoin="round" 
          />

          {/* Right Scale Suspension Chains */}
          <line x1="31.5" y1="15" x2="27.5" y2="22" stroke="#93c5fd" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="31.5" y1="15" x2="35.5" y2="22" stroke="#93c5fd" strokeWidth="1.2" strokeLinecap="round" />

          {/* Right Scale Pan (Balanza de Ley) */}
          <path 
            d="M27 22C27 25.5 36 25.5 36 22Z" 
            fill="#0071ce" 
            fillOpacity="0.45"
            stroke="#38bdf8" 
            strokeWidth="1.3" 
            strokeLinejoin="round" 
          />

          {/* Fulcrum Pivot Ring / Golden Accent */}
          <circle cx="22" cy="15" r="1.6" fill="#facc15" />
        </svg>
      </div>

      {/* Typography: Law Firm Name & Cokito's lab Firm Identity */}
      {showFirmName && (
        <div className="flex flex-col text-left leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`font-display font-extrabold tracking-tight text-base sm:text-lg ${isDark ? 'text-white' : 'text-[#0B192C]'}`}>
              JurisNova
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-sky-500/10 text-sky-600 border border-sky-400/30">
              International
            </span>
          </div>
          <span className={`text-[10px] font-semibold tracking-wide uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Cokito&apos;s lab · European Branch
          </span>
        </div>
      )}
    </div>
  );
};
