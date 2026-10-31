import React from 'react';
import { Globe, ExternalLink, FlaskConical } from 'lucide-react';

export const CokitosLabBanner: React.FC = () => {
  // Dynamic project name and WhatsApp URL
  const projectName = 'JurisNova LegalTech & CRM';
  const whatsappMessage = `Hola Cokito's lab, vi la plataforma de ${projectName} y quiero crear una solución tecnológica para mi empresa`;
  const whatsappUrl = `https://wa.me/584224612534?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="bg-slate-50/80 border-t border-slate-200 py-6 sm:py-8" aria-label="Créditos y Autoría Cokito's lab">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card con diseño armónico y sin contraste estridente */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-50 via-white to-blue-50/40 border border-slate-200/90 p-4 sm:p-5 shadow-xs transition-all hover:border-slate-300">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Left Zone: Periodic Table Badge + 2-line Text */}
            <div className="flex items-center gap-3.5 w-full lg:w-auto text-left">
              {/* Insignia estilo tabla periódica de los elementos */}
              <a
                href="https://cokitos-lab-international.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B192C] via-[#1E3E62] to-[#0071ce] border border-sky-400/40 shadow-sm p-1 flex flex-col justify-between hover:scale-105 active:scale-95 transition-all group cursor-pointer"
                title="Cokito's lab International · Laboratorio Tecnológico"
              >
                <div className="text-[8px] font-mono font-bold text-sky-300 leading-none">
                  31
                </div>
                <div className="text-base sm:text-lg font-black font-mono tracking-wider text-white text-center leading-none">
                  CL
                </div>
                <div className="text-[7px] font-mono font-bold tracking-widest text-sky-200 text-center uppercase leading-none">
                  lab
                </div>
              </a>

              {/* Texto en 2 líneas exactas */}
              <div className="space-y-0.5 min-w-0">
                <p className="text-xs sm:text-[13px] text-slate-800 leading-snug">
                  Esta solución tecnológica fue desarrollada por{' '}
                  <a
                    href="https://cokitos-lab-international.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#0071ce] hover:text-[#005fb0] underline underline-offset-2 transition-colors inline-flex items-center gap-0.5"
                  >
                    Cokito&apos;s lab
                  </a>
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-snug">
                  ¿Quieres una plataforma a la medida para tu negocio? ¡Tú también puedes tener la tuya!
                </p>
              </div>
            </div>

            {/* Right Zone: 2 Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full lg:w-auto justify-end">
              {/* Botón 1: Web Oficial */}
              <a
                href="https://cokitos-lab-international.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold rounded-xl border border-slate-300 shadow-2xs hover:shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 whitespace-nowrap"
                title="Visitar sitio oficial de Cokito's lab"
              >
                <Globe className="w-3.5 h-3.5 text-[#0071ce] shrink-0" />
                <span>Web Oficial</span>
                <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
              </a>

              {/* Botón 2: WhatsApp Lab (Breaking Bad x Dexter's Lab) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-4 py-2 bg-gradient-to-r from-[#0B192C] via-[#12283f] to-[#0071ce] hover:brightness-110 text-white text-xs font-bold rounded-xl border border-sky-400/50 shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 group whitespace-nowrap"
                title="Contactar al Laboratorio por WhatsApp"
              >
                <span className="relative flex items-center justify-center">
                  <FlaskConical className="w-4 h-4 text-lime-400 group-hover:rotate-12 transition-transform" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse absolute -top-0.5 -right-0.5" />
                </span>
                <span className="tracking-wide">¡Quiero mi plataforma!</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
