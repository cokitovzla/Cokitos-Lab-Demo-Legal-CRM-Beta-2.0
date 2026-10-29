import React from 'react';
import { Compass, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export const WhySection: React.FC = () => {
  return (
    <section id="por-que" className="py-12 sm:py-16 lg:py-20 bg-[#0B192C] text-white border-b border-slate-800 relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Subtle blueprint tech pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header: Explaining why modernizing legal solutions is crucial */}
        <div className="w-full max-w-4xl mb-8 sm:mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-sky-400 uppercase mb-3 bg-sky-500/10 px-3 py-1.5 rounded-lg border border-sky-400/20">
            <Compass className="w-4 h-4 text-sky-400" />
            <span>Por Qué Modernizar tu Práctica Legal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15] mb-3">
            El modelo tradicional de asesoría legal está roto. Te mostramos cómo transformarlo.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
            Consultas que se pierden en bandejas de entrada, semanas para revisar un contrato y clientes que no saben en qué estado va su expediente. En <strong>Cokito&apos;s Lab</strong> construimos la tecnología para que tu firma u organización opere como una plataforma digital moderna: rápida, preventiva y conectada en tiempo real.
          </p>
        </div>

        {/* 3 Core Pillars with adjacent documentary visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Visual Editorial Box */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full min-h-[260px] sm:min-h-[300px] lg:min-h-[420px] rounded-2xl overflow-hidden border border-slate-700/80 shadow-xl relative group flex flex-col justify-end">
              <img
                src="/src/assets/images/team_legal_consultation_1792518328026.jpg"
                alt="Mesa de trabajo y asesoría estratégica JurisNova International con clientes"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/95 via-[#0B192C]/60 to-transparent pointer-events-none" />
              
              <div className="relative p-5 sm:p-7 text-white">
                <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono uppercase text-sky-400 font-bold tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Impacto Comprobado de la Modernización</span>
                </div>
                <blockquote className="text-xs sm:text-sm lg:text-base font-medium leading-snug text-slate-100 italic">
                  &ldquo;La digitalización no deshumaniza el servicio jurídico: elimina las tareas repetitivas y lentas para que el abogado se enfoque en estrategia de alto valor y el cliente tenga respuestas en horas.&rdquo;
                </blockquote>
                <div className="mt-4 pt-3 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white">Daniel Eduardo Pérez</span>
                  <span className="text-sky-400 font-medium">Director General · JurisNova</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Pillars Editorial List: The 'Why' to convince clients */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            
            {/* Pillar 01 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0e223b]/90 border border-slate-700/80 hover:bg-[#132c4d] hover:border-sky-400/60 hover:shadow-xl transition-all duration-300 group/pillar">
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-xs sm:text-sm font-mono font-bold text-sky-300 bg-sky-500/20 px-2.5 py-0.5 rounded-md transition-colors group-hover/pillar:bg-sky-400 group-hover/pillar:text-[#0B192C]">
                  01
                </span>
                <span className="text-slate-500 font-bold">/</span>
                <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover/pillar:text-sky-200 transition-colors flex items-center gap-2">
                  <span>Porque la lentitud y la opacidad cuestan clientes</span>
                  <Zap className="w-4 h-4 text-sky-400 shrink-0 hidden sm:inline" />
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 group-hover/pillar:text-white transition-colors leading-relaxed">
                El 80% de los clientes que abandonan una firma no lo hacen por un mal fallo judicial, sino por la <strong>falta de visibilidad y las semanas de silencio</strong> en sus trámites. Un entorno web con diagnóstico express y seguimiento de hitos en tiempo real genera confianza inmediata y multiplica la tasa de retención.
              </p>
            </div>

            {/* Pillar 02 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0e223b]/90 border border-slate-700/80 hover:bg-[#132c4d] hover:border-sky-400/60 hover:shadow-xl transition-all duration-300 group/pillar">
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-xs sm:text-sm font-mono font-bold text-sky-300 bg-sky-500/20 px-2.5 py-0.5 rounded-md transition-colors group-hover/pillar:bg-sky-400 group-hover/pillar:text-[#0B192C]">
                  02
                </span>
                <span className="text-slate-500 font-bold">/</span>
                <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover/pillar:text-sky-200 transition-colors flex items-center gap-2">
                  <span>Porque el software convierte tu expertise en un activo escalable</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 hidden sm:inline" />
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 group-hover/pillar:text-white transition-colors leading-relaxed">
                Sin herramientas tecnológicas, los abogados facturan únicamente por horas vendidas. Cuando <strong>Cokito&apos;s Lab</strong> estructura tu plataforma web con captación automatizada y CRM de expedientes, tu despacho pasa de ser un servicio artesanal a una <strong>empresa escalable que opera con orden en cualquier país</strong>.
              </p>
            </div>

            {/* Pillar 03 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0e223b]/90 border border-slate-700/80 hover:bg-[#132c4d] hover:border-sky-400/60 hover:shadow-xl transition-all duration-300 group/pillar">
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-xs sm:text-sm font-mono font-bold text-sky-300 bg-sky-500/20 px-2.5 py-0.5 rounded-md transition-colors group-hover/pillar:bg-sky-400 group-hover/pillar:text-[#0B192C]">
                  03
                </span>
                <span className="text-slate-500 font-bold">/</span>
                <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover/pillar:text-sky-200 transition-colors">
                  Porque prevenir digitalmente cuesta una décima parte que litigar
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 group-hover/pillar:text-white transition-colors leading-relaxed">
                Un diagnóstico legal inicial que identifica vacíos en pactos de socios, marcas o licencias comerciales antes de que estalle un conflicto ahorra hasta un <strong>90% en comparación con un juicio comercial</strong>. La tecnología preventiva es la mejor inversión financiera tanto para la empresa cliente como para el despacho que la asesora.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
