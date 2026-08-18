"use client";

import { SERVICES, getServiceContent, type Service } from "@/lib/services";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesContent() {
  const { language, t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-24 md:pt-32 pb-20">
      {/* Page Header */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 mb-16 md:mb-24 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-[#E0E7FF] text-[#0D278A] text-xs font-bold tracking-[0.25em] uppercase mb-4 shadow-sm">
          {t("services.page.subtitle")}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          {t("services.page.title")}
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {t("services.page.description")}
        </p>
      </section>

      {/* Services List */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 space-y-8">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} language={language} />
        ))}
      </section>
    </main>
  );
}

type ServiceCardProps = {
  service: Service;
  language: "th" | "en";
};

function ServiceCard({ service, language }: ServiceCardProps) {
  const { t } = useLanguage();
  const content = getServiceContent(service, language);

  return (
    <article className="group bg-white rounded-2xl border border-slate-200/80 p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12">
        {/* Left: Title and Target */}
        <div className="space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] flex items-center justify-center text-[#0D278A] text-3xl mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1.5 group-hover:text-[#0D278A] transition-colors">
              {content.name}
            </h2>
            <p className="text-xs font-bold uppercase tracking-wider text-[#0D278A]/80">
              {content.shortTitle}
            </p>
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-600 border border-slate-200">
            Target: {content.target}
          </div>
        </div>

        {/* Right: Details */}
        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            {content.description}
          </p>
          
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              {t("services.coverage")}
            </h3>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
              {content.details.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D278A] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-slate-400 italic pt-4 border-t border-slate-100">
            {t("services.note")}
          </p>
        </div>
      </div>
    </article>
  );
}
