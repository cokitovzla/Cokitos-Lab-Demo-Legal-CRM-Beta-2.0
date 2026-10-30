import React from 'react';

interface VirtualJudgeIconProps {
  className?: string;
  size?: number;
  showBadge?: boolean;
}

/**
 * VirtualJudgeIcon - "Astro", el juecesito / abogadito virtual de Cokito's Lab.
 * Diseñado con toga judicial, solapas blancas (jabot de juez/abogado), 
 * martillo de juez dorado (gavel), ojos tecnológicos amigables y halo de IA.
 */
export const VirtualJudgeIcon: React.FC<VirtualJudgeIconProps> = ({ 
  className = "w-7 h-7", 
  size,
  showBadge = false 
}) => {
  const dimensionProps = size ? { width: size, height: size } : {};

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`} style={size ? { width: size, height: size } : undefined}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
        {...dimensionProps}
      >
        <defs>
          {/* Fondo gradiente de toga y aura */}
          <linearGradient id="judgeBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B192C" />
            <stop offset="50%" stopColor="#1E3E62" />
            <stop offset="100%" stopColor="#0071ce" />
          </linearGradient>

          {/* Gradiente dorado del martillito */}
          <linearGradient id="goldGavel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="50%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#CA8A04" />
          </linearGradient>

          {/* Gradiente cara tecnológica */}
          <linearGradient id="faceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E0F2FE" />
          </linearGradient>

          {/* Brillo halo neón */}
          <radialGradient id="neonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0071ce" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Halo exterior de IA */}
        <circle cx="24" cy="24" r="23" fill="url(#judgeBg)" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.6" />

        {/* Toga judicial oscura */}
        <path
          d="M10 44 C 10 33, 16 29, 24 29 C 32 29, 38 33, 38 44 Z"
          fill="#0B192C"
          stroke="#1E3E62"
          strokeWidth="1"
        />

        {/* Cuello y pechera de juez (Tiras blancas clásicas de abogado/juez) */}
        <path d="M22 29 L26 29 L25 38 L23 38 Z" fill="#F8FAFC" />
        <path d="M20 29 L23 37 L21 37 L19 29 Z" fill="#E2E8F0" />
        <path d="M28 29 L25 37 L27 37 L29 29 Z" fill="#E2E8F0" />

        {/* Mini pajarita / lazo judicial */}
        <polygon points="21,29 27,29 24,31" fill="#CBD5E1" />

        {/* Cabeza / Rostro amigable del abogadito virtual */}
        <ellipse cx="24" cy="19" rx="10" ry="9.5" fill="url(#faceGrad)" stroke="#BAE6FD" strokeWidth="0.8" />

        {/* Peluca clásica sutil estilizada o corte moderno inteligente */}
        <path
          d="M14 17 C 14 11, 18 9, 24 9 C 30 9, 34 11, 34 17 C 34 14, 30 11.5, 24 11.5 C 18 11.5, 14 14, 14 17 Z"
          fill="#CBD5E1"
          opacity="0.9"
        />

        {/* Ojos expresivos amigables (Digital AI) */}
        <ellipse cx="20.5" cy="18.5" rx="1.6" ry="2" fill="#0284C7" />
        <ellipse cx="27.5" cy="18.5" rx="1.6" ry="2" fill="#0284C7" />
        
        {/* Brillos en los ojos */}
        <circle cx="21" cy="17.8" r="0.6" fill="#FFFFFF" />
        <circle cx="28" cy="17.8" r="0.6" fill="#FFFFFF" />

        {/* Gafitas inteligentes sutiles de abogado/juez */}
        <rect x="18" y="16.5" width="5" height="4" rx="1.5" fill="none" stroke="#0071ce" strokeWidth="0.8" strokeOpacity="0.7" />
        <rect x="25" y="16.5" width="5" height="4" rx="1.5" fill="none" stroke="#0071ce" strokeWidth="0.8" strokeOpacity="0.7" />
        <line x1="23" y1="18.5" x2="25" y2="18.5" stroke="#0071ce" strokeWidth="0.8" strokeOpacity="0.7" />

        {/* Sonrisa amable */}
        <path d="M22 22.5 Q24 24.5 26 22.5" stroke="#0369A1" strokeWidth="1" strokeLinecap="round" fill="none" />

        {/* Martillo de juez dorado (Gavel) sostenido a la derecha */}
        <g transform="translate(32, 28) rotate(-25)">
          {/* Mango de madera */}
          <rect x="-1" y="2" width="2.2" height="12" rx="1" fill="#78350F" stroke="#451A03" strokeWidth="0.5" />
          {/* Cabeza del martillo dorada */}
          <rect x="-5" y="-3" width="10" height="5" rx="1.2" fill="url(#goldGavel)" stroke="#78350F" strokeWidth="0.5" />
          {/* Anillos dorados */}
          <line x1="-3" y1="-3" x2="-3" y2="2" stroke="#FEF08A" strokeWidth="0.8" />
          <line x1="3" y1="-3" x2="3" y2="2" stroke="#FEF08A" strokeWidth="0.8" />
        </g>

        {/* Balanza de la justicia holográfica flotando a la izquierda */}
        <g transform="translate(7, 26) scale(0.4)" stroke="#38BDF8" strokeWidth="1.5" fill="none">
          <line x1="12" y1="2" x2="12" y2="18" strokeLinecap="round" />
          <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
          {/* Plato izquierdo */}
          <path d="M4 6 L2 12 L6 12 Z" fill="#38BDF8" fillOpacity="0.3" />
          {/* Plato derecho */}
          <path d="M20 6 L18 12 L22 12 Z" fill="#38BDF8" fillOpacity="0.3" />
        </g>

        {/* Chispa de IA / Estrella inteligente arriba a la derecha */}
        <path
          d="M37 10 L38 12 L40 13 L38 14 L37 16 L36 14 L34 13 L36 12 Z"
          fill="#38BDF8"
        />
      </svg>

      {/* Indicador de estado online pulsante opcional */}
      {showBadge && (
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
        </span>
      )}
    </div>
  );
};
