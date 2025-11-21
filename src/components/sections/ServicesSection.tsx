"use client";

import Link from "next/link";
import { SERVICES, getServiceContent } from "@/lib/services";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesSection() {
  const { language, t } = useLanguage();

  return (
    <section className="bg-[#F5F7FA] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#5A73C3] uppercase">
              {t("services.subtitle")}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#111827]">
              {t("services.title")}
            </h2>
            <p className="mt-2 text-sm text-[#4B5563] max-w-xl">
              {t("services.description")}
            </p>
          </div>

          <Link
            href="/services"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full border border-[#5A73C3] text-[#0D278A] text-xs font-semibold bg-white hover:bg-[#EEF2FF] transition"
          >
            {t("services.viewDetails")}
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => {
            const content = getServiceContent(service, language);
            return (
              <article
                key={service.id}
                className="bg-white rounded-2xl border border-gray-200 p-6 transition-colors duration-300 hover:border-gray-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E3E7F8] flex items-center justify-center mb-4">
                  <span className="text-[#0D278A] text-lg">{service.icon}</span>
                </div>

                <h3 className="text-lg font-semibold text-[#111827] mb-2">
                  {content.name}
                </h3>

                <p className="text-sm text-[#4B5563] mb-4">
                  {content.description}
                </p>

                <ul className="text-xs text-[#6B7280] space-y-1 mb-4">
                  {content.details.map((detail, index) => (
                    <li key={index}>• {detail}</li>
                  ))}
                </ul>

                <button className="text-xs font-semibold text-[#0D278A] hover:underline">
                  {t("services.learnMore")} →
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
