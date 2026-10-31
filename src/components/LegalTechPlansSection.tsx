import React from 'react';
import { Check, Minus, ExternalLink, ArrowRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LegalTechPlansSectionProps {
  onOpenCRM?: () => void;
}

interface PlanFeatureRow {
  name: string;
  description?: string;
  alfa: { included: boolean; label?: string };
  beta: { included: boolean; label?: string };
  omega: { included: boolean; label?: string };
}

export const LegalTechPlansSection: React.FC<LegalTechPlansSectionProps> = ({ onOpenCRM }) => {
  const { language } = useLanguage();
  const isEs = language === 'es';

  // Strict list of features requested in exact order:
  // 1. Solicitudes y contacto inicial
  // 2. Seguimiento comercial
  // 3. Directorio organizado
  // 4. Agenda y reuniones
  // 5. Gestión de trámites
  // 6. Asignación de abogados
  // 7. Tareas y responsables
  // 8. Expediente digital por cliente
  // 9. Archivos y documentos
  // 10. Presupuestos
  // 11. Roles y permisos
  const features: PlanFeatureRow[] = [
    {
      name: isEs ? 'Solicitudes y contacto inicial' : 'Inquiries & Initial Intake',
      description: isEs ? 'Captación centralizada de leads y requerimientos desde la web' : 'Centralized lead intake from web forms',
      alfa: { included: true, label: isEs ? 'Básico' : 'Basic' },
      beta: { included: true, label: isEs ? 'Multicanal' : 'Multi-channel' },
      omega: { included: true, label: isEs ? 'IA & Triage' : 'AI & Triage' },
    },
    {
      name: isEs ? 'Seguimiento comercial' : 'Sales Pipeline & Lead Tracking',
      description: isEs ? 'Estado del prospecto y notas privadas de seguimiento' : 'Prospect stages and private sales notes',
      alfa: { included: true, label: isEs ? 'Lista simple' : 'Simple list' },
      beta: { included: true, label: isEs ? 'Pipeline activo' : 'Active pipeline' },
      omega: { included: true, label: isEs ? 'Scoring avanzado' : 'Lead scoring' },
    },
    {
      name: isEs ? 'Directorio organizado' : 'Organized Client Directory',
      description: isEs ? 'Separación estructurada de Empresas y Personas' : 'Structured segmentation of Companies and People',
      alfa: { included: true, label: isEs ? 'Contactos' : 'Contacts' },
      beta: { included: true, label: isEs ? 'Empresas y Personas' : 'Companies & People' },
      omega: { included: true, label: isEs ? 'Directorio 360°' : '360° Directory' },
    },
    {
      name: isEs ? 'Agenda y reuniones' : 'Calendar & Scheduling',
      description: isEs ? 'Agendamiento de citas y sesiones de asesoría jurídica' : 'Appointment booking and legal consultation schedules',
      alfa: { included: false },
      beta: { included: true, label: isEs ? 'Programación' : 'Scheduling' },
      omega: { included: true, label: isEs ? 'Sync Calendar/Meet' : 'Calendar/Meet sync' },
    },
    {
      name: isEs ? 'Gestión de trámites' : 'Legal Case & Procedure Tracking',
      description: isEs ? 'Control de estados, fases procesales y porcentaje de avance' : 'Procedure stages and progress milestones',
      alfa: { included: false },
      beta: { included: true, label: isEs ? 'Estados y %' : 'Stages & %' },
      omega: { included: true, label: isEs ? 'Workflows automáticos' : 'Automated workflows' },
    },
    {
      name: isEs ? 'Asignación de abogados' : 'Attorney Case Assignment',
      description: isEs ? 'Designación de responsable técnico por expediente' : 'Dedicated legal specialist per client matter',
      alfa: { included: false },
      beta: { included: true, label: isEs ? 'Asignación directa' : 'Direct assignment' },
      omega: { included: true, label: isEs ? 'Equipos y roles' : 'Teams & roles' },
    },
    {
      name: isEs ? 'Expediente digital por cliente' : 'Digital Client Matter Record',
      description: isEs ? 'Vista consolidada de historial, trámites y resumen del caso' : 'Unified consolidated case timeline and record',
      alfa: { included: false },
      beta: { included: true, label: isEs ? 'Ficha de caso' : 'Case summary' },
      omega: { included: true, label: isEs ? 'Expediente 360°' : '360° Digital file' },
    },
    {
      name: isEs ? 'Archivos y documentos' : 'Case Documents & Files',
      description: isEs ? 'Carga, clasificación y resguardo documental por trámite' : 'Document upload, categorization, and secure vault',
      alfa: { included: false },
      beta: { included: true, label: isEs ? 'Gestor de archivos' : 'File manager' },
      omega: { included: true, label: isEs ? 'Versionado & Firma' : 'Versioning & eSign' },
    },
    {
      name: isEs ? 'Presupuestos' : 'Budget & Fee Quotes',
      description: isEs ? 'Desglose de honorarios, estatus de cobro y presupuestos' : 'Fee breakdowns, approval status, and quotes',
      alfa: { included: false },
      beta: { included: true, label: isEs ? 'Control de partidas' : 'Fee control' },
      omega: { included: true, label: isEs ? 'Facturación dinámica' : 'Dynamic billing' },
    },
    {
      name: isEs ? 'Roles y permisos' : 'Roles & Permissions (RBAC)',
      description: isEs ? 'Niveles de acceso diferenciados para abogados y administradores' : 'Multi-tier access control for attorneys & admins',
      alfa: { included: false },
      beta: { included: false },
      omega: { included: true, label: isEs ? 'RBAC avanzado' : 'Enterprise RBAC' },
    },
    {
      name: isEs ? 'Tareas y responsables' : 'Tasks & Assignees',
      description: isEs ? 'Checklist de actividades, plazos fatales y responsables' : 'Task checklists, deadlines, and assignees',
      alfa: { included: false },
      beta: { included: false },
      omega: { included: true, label: isEs ? 'Gestor avanzado' : 'Advanced tasking' },
    },
  ];

  return (
    <section 
      id="comparativa-versiones" 
      className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200 scroll-mt-20 overflow-hidden"
      aria-label="Matriz comparativa de versiones LegalTech"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-[#0071ce] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{isEs ? 'Evolución de Plataforma' : 'Platform Evolution'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isEs ? 'Comparativa de Versiones LegalTech' : 'LegalTech Versions Comparison'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {isEs 
              ? 'Conoce el alcance de cada edición desarrollada por Cokito\'s lab: desde la captación básica hasta la suite de gestión integral.'
              : 'Discover the functional scope of each edition engineered by Cokito\'s lab: from basic intake to comprehensive enterprise operations.'}
          </p>
        </div>

        {/* Responsive Table Container with Horizontal Scroll & Sticky First Column */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto focus:outline-none focus:ring-2 focus:ring-[#0071ce]" tabIndex={0} role="region" aria-label="Tabla comparativa de ediciones">
            <table className="w-full min-w-[720px] text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-900">
                  {/* Column 1: Feature label (Sticky on mobile) */}
                  <th scope="col" className="sticky left-0 bg-slate-100/95 backdrop-blur-xs z-20 py-4 px-4 sm:px-6 text-xs sm:text-sm font-bold w-[34%] min-w-[220px] shadow-[2px_0_5px_-2px_rgba(0,0,0,0.06)]">
                    <span>{isEs ? 'Funcionalidades y Módulos' : 'Features & Modules'}</span>
                  </th>

                  {/* Column 2: Alfa */}
                  <th scope="col" className="py-4 px-3 sm:px-5 text-center w-[22%] min-w-[150px]">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {isEs ? 'Versión' : 'Edition'}
                      </span>
                      <span className="text-base sm:text-lg font-extrabold text-slate-800">
                        Alfa
                      </span>
                      <span className="text-[11px] text-slate-500 mt-0.5">
                        {isEs ? 'Captación inicial' : 'Initial intake'}
                      </span>
                    </div>
                  </th>

                  {/* Column 3: Beta (DESTACADA / RECOMENDADA) */}
                  <th scope="col" className="py-4 px-3 sm:px-5 text-center w-[22%] min-w-[170px] bg-blue-50/80 border-x-2 border-blue-400/50 relative">
                    <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 bg-[#0071ce] text-white text-[10px] sm:text-[11px] font-extrabold px-3 py-0.5 rounded-b-md shadow-xs flex items-center gap-1 whitespace-nowrap">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>{isEs ? 'Estás viendo Beta' : 'Currently viewing Beta'}</span>
                    </div>
                    <div className="flex flex-col items-center pt-2.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0071ce]">
                        {isEs ? 'Recomendada' : 'Recommended'}
                      </span>
                      <span className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-1">
                        Beta
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping inline-block" />
                      </span>
                      <span className="text-[11px] text-slate-600 mt-0.5 font-medium">
                        {isEs ? 'CRM Operativo Activo' : 'Active Operational CRM'}
                      </span>
                    </div>
                  </th>

                  {/* Column 4: Omega */}
                  <th scope="col" className="py-4 px-3 sm:px-5 text-center w-[22%] min-w-[150px]">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {isEs ? 'Versión' : 'Edition'}
                      </span>
                      <span className="text-base sm:text-lg font-extrabold text-slate-800">
                        Omega
                      </span>
                      <span className="text-[11px] text-slate-500 mt-0.5">
                        {isEs ? 'Suite Enterprise' : 'Enterprise Suite'}
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {features.map((row, idx) => (
                  <tr 
                    key={row.name}
                    className={`transition-colors hover:bg-slate-50/80 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}
                  >
                    {/* Sticky Feature Name */}
                    <th scope="row" className="sticky left-0 bg-inherit backdrop-blur-xs z-10 py-3.5 px-4 sm:px-6 font-semibold text-slate-900 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.06)]">
                      <div className="font-bold text-slate-800">{row.name}</div>
                      {row.description && (
                        <div className="text-[11px] font-normal text-slate-500 mt-0.5 leading-tight hidden sm:block">
                          {row.description}
                        </div>
                      )}
                    </th>

                    {/* Alfa Cell */}
                    <td className="py-3.5 px-3 sm:px-5 text-center">
                      {row.alfa.included ? (
                        <div className="inline-flex flex-col items-center">
                          <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </span>
                          {row.alfa.label && (
                            <span className="text-[10px] text-slate-500 mt-0.5 font-medium">
                              {row.alfa.label}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="inline-flex items-center justify-center text-slate-300">
                          <Minus className="w-4 h-4" />
                        </span>
                      )}
                    </td>

                    {/* Beta Cell (Highlighted Column) */}
                    <td className="py-3.5 px-3 sm:px-5 text-center bg-blue-50/50 border-x-2 border-blue-400/40">
                      {row.beta.included ? (
                        <div className="inline-flex flex-col items-center">
                          <span className="w-6 h-6 rounded-full bg-[#0071ce] text-white flex items-center justify-center shadow-xs">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                          {row.beta.label && (
                            <span className="text-[10px] font-bold text-[#0071ce] mt-0.5">
                              {row.beta.label}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="inline-flex items-center justify-center text-slate-300">
                          <Minus className="w-4 h-4" />
                        </span>
                      )}
                    </td>

                    {/* Omega Cell */}
                    <td className="py-3.5 px-3 sm:px-5 text-center">
                      {row.omega.included ? (
                        <div className="inline-flex flex-col items-center">
                          <span className="w-6 h-6 rounded-full bg-slate-900 text-emerald-400 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </span>
                          {row.omega.label && (
                            <span className="text-[10px] text-slate-700 mt-0.5 font-medium">
                              {row.omega.label}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="inline-flex items-center justify-center text-slate-300">
                          <Minus className="w-4 h-4" />
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* Table Footer with Exact Action Buttons */}
              <tfoot>
                <tr className="border-t-2 border-slate-200 bg-slate-50/90">
                  <td className="sticky left-0 bg-slate-50/95 backdrop-blur-xs z-10 py-4 px-4 sm:px-6 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.06)]">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {isEs ? 'Acceso en vivo' : 'Live Access'}
                    </span>
                  </td>

                  {/* Button Alfa: https://bin-legal-beta-2-0.vercel.app */}
                  <td className="py-4 px-3 sm:px-5 text-center">
                    <a
                      href="https://bin-legal-beta-2-0.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-all shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-slate-400"
                      title="Abrir versión Alfa en pestaña nueva"
                    >
                      <span>Ver Alfa</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </td>

                  {/* Button Beta (CRM ACTIVO - PRIMARY CALL TO ACTION) */}
                  <td className="py-4 px-3 sm:px-5 text-center bg-blue-50/80 border-x-2 border-blue-400/50">
                    <button
                      type="button"
                      onClick={onOpenCRM}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#0071ce] hover:bg-[#005fb0] active:bg-[#004f93] rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-400"
                      title="Explorar el CRM interno de esta versión Beta"
                    >
                      <span>Ver Beta (CRM)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>

                  {/* Button Omega: https://cl-demo-legal-crm-omega-1-0.vercel.app */}
                  <td className="py-4 px-3 sm:px-5 text-center">
                    <a
                      href="https://cl-demo-legal-crm-omega-1-0.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-900 bg-slate-200/80 hover:bg-slate-300 border border-slate-300 rounded-xl transition-all shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-slate-500"
                      title="Abrir versión Omega en pestaña nueva"
                    >
                      <span>Ver Omega</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Bottom helper note */}
        <div className="mt-4 text-center">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>
              {isEs 
                ? 'Todas las versiones incluyen arquitectura segura y cifrado SSL. Puedes probar cada entorno en vivo sin compromiso.'
                : 'All versions feature secure SSL architecture. You can test each live environment freely.'}
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};
