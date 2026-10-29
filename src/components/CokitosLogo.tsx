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
      {/* Cokito's Lab Neon Chemistry & Tech Flask Crest */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg 
          viewBox="0 0 44 44" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-sm transition-transform group-hover:scale-105"
        >
          {/* Rounded Shield Base with deep obsidian & neon cyan border */}
          <rect 
            x="2" 
            y="2" 
            width="40" 
            height="40" 
            rx="10" 
            fill={isDark ? "#08101E" : "#0B192C"} 
            stroke="#00f5ff" 
            strokeWidth="1.2"
            strokeOpacity="0.8"
          />

          {/* Glowing Beaker / Chemistry Flask (Dexter's Lab x Heisenberg vibe) */}
          <path 
            d="M19 12H25M20 12V17L14 28C13 29.8 14.3 32 16.5 32H27.5C29.7 32 31 29.8 30 28L24 17V12" 
            stroke="#00f5ff" 
            strokeWidth="1.6" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />

          {/* Bubbling Neon Emerald Reagent Liquid */}
          <path 
            d="M16 27.5C18 26.5 20 28 22 27C24 26 26 27.5 28 27.5L27 30H17L16 27.5Z" 
            fill="#10b981" 
            fillOpacity="0.8"
          />

          {/* Glowing Reaction Bubbles */}
          <circle cx="20" cy="24" r="1.2" fill="#00ff88" />
          <circle cx="24" cy="22" r="1" fill="#facc15" />
          <circle cx="21" cy="19" r="0.8" fill="#38bdf8" />

          {/* Electric Atomic Energy Orbit Ring */}
          <ellipse 
            cx="22" 
            cy="22" 
            rx="14" 
            ry="6" 
            transform="rotate(-30 22 22)" 
            stroke="#38bdf8" 
            strokeWidth="0.8" 
            strokeDasharray="2 3"
            strokeOpacity="0.7"
          />

          {/* Atomic Energy Sparks */}
          <circle cx="34" cy="15" r="1.2" fill="#00ff88" />
          <circle cx="10" cy="29" r="1" fill="#00f5ff" />
        </svg>
      </div>

      {/* Typography: Law Firm Name & Cokito's Lab Firm Identity */}
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
            Cokito&apos;s Lab · European Branch
          </span>
        </div>
      )}
    </div>
  );
};
