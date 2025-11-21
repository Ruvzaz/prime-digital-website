"use client";

import { SERVICES, getServiceContent, type Service } from "@/lib/services";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesPage() {
  const { language, t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#F5F7FA] pt-24 md:pt-32 pb-20">
      {/* Page Header */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 mb-16 md:mb-24 text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-[#0D278A] uppercase mb-4">
          {t("services.page.subtitle")}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {t("services.page.title")}
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {t("services.page.description")}
        </p>
      </section>

      {/* Services List */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 space-y-6">
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
    <article className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 transition-colors duration-300 hover:border-gray-300">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12">
        {/* Left: Title and Target */}
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#E3E7F8] flex items-center justify-center text-[#0D278A] text-2xl mb-4">
            {service.icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {content.name}
            </h2>
            <p className="text-xs font-bold uppercase tracking-wider text-[#5A73C3]">
              {content.shortTitle}
            </p>
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 text-xs font-medium text-gray-500 border border-gray-100">
            Target: {content.target}
          </div>
        </div>

        {/* Right: Details */}
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            {content.description}
          </p>
          
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
              {t("services.coverage")}
            </h3>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
              {content.details.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-[#0D278A] mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-gray-400 italic pt-4 border-t border-gray-100">
            {t("services.note")}
          </p>
        </div>
      </div>
    </article>
  );
}
