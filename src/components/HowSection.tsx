import React, { useState } from 'react';
import { Search, FileCheck, Sparkles, Check, Workflow, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HowSectionProps {
  onStartDiagnosis: () => void;
}

export const HowSection: React.FC<HowSectionProps> = ({ onStartDiagnosis }) => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: t.how.step1Title,
      subtitle: t.how.step1Subtitle,
      icon: <Search className="w-4 h-4 text-sky-600" />,
      description: t.how.step1Desc,
      deliverables: [
        t.how.step1Deliv1,
        t.how.step1Deliv2,
        t.how.step1Deliv3
      ],
      timeframe: t.how.step1Time
    },
    {
      number: '02',
      title: t.how.step2Title,
      subtitle: t.how.step2Subtitle,
      icon: <FileCheck className="w-4 h-4 text-emerald-600" />,
      description: t.how.step2Desc,
      deliverables: [
        t.how.step2Deliv1,
        t.how.step2Deliv2,
        t.how.step2Deliv3
      ],
      timeframe: t.how.step2Time
    },
    {
      number: '03',
      title: t.how.step3Title,
      subtitle: t.how.step3Subtitle,
      icon: <Sparkles className="w-4 h-4 text-blue-600" />,
      description: t.how.step3Desc,
      deliverables: [
        t.how.step3Deliv1,
        t.how.step3Deliv2,
        t.how.step3Deliv3
      ],
      timeframe: t.how.step3Time
    }
  ];

  return (
    <section id="como" className="py-8 sm:py-10 lg:py-12 bg-slate-50/90 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="w-full max-w-4xl mb-6 sm:mb-8 text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#0071ce] uppercase mb-2 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
            <Workflow className="w-3.5 h-3.5 text-[#0071ce]" />
            <span>{t.how.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950 tracking-tight mb-2 sm:mb-3">
            {t.how.title}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
            {t.how.subtitle}
          </p>
        </div>

        {/* 3 Step Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`bg-white rounded-2xl p-4.5 sm:p-5 border transition-all cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md active:scale-[0.99] ${
                  isSelected 
                    ? 'border-[#0071ce] ring-2 ring-[#0071ce]/20 shadow-sm' 
                    : 'border-slate-200/90 hover:border-slate-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md ${
                      isSelected ? 'bg-[#0071ce] text-white shadow-xs' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {t.how.stepPrefix} {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-display font-bold text-slate-950 mb-1 leading-snug">
                    {step.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#0071ce] mb-2.5">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {step.description}
                  </p>

                  <div className="pt-2.5 border-t border-slate-100">
                    <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider mb-1.5 font-semibold">
                      {t.how.deliverablesPrefix}
                    </div>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{step.timeframe}</span>
                  <span className="text-[#0071ce] font-semibold flex items-center gap-0.5">
                    <span>Etapa {step.number}/03</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
