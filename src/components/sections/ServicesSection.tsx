"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES, getServiceContent } from "@/lib/services";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesSection() {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24 border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#E0E7FF] text-[#0D278A] text-xs font-bold tracking-[0.2em] uppercase mb-3 shadow-2xs">
              {t("services.subtitle")}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
              {t("services.title")}
            </h2>
            <p className="mt-2 text-sm md:text-base text-slate-600 max-w-xl leading-relaxed">
              {t("services.description")}
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-xs md:text-sm font-semibold text-[#0D278A] hover:bg-[#EEF2FF] hover:border-slate-300 transition-all duration-200 shadow-2xs shrink-0 self-start md:self-auto"
          >
            <span>{t("services.viewDetails")}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const content = getServiceContent(service, language);
            return (
              <motion.article
                key={service.id}
                variants={itemVariants}
                className="group bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 transform-gpu"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] flex items-center justify-center mb-5 shadow-2xs group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[#0D278A] text-3xl">{service.icon}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0D278A] transition-colors">
                    {content.name}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 mb-4 leading-relaxed">
                    {content.description}
                  </p>

                  <ul className="text-xs text-slate-500 space-y-1.5 mb-6">
                    {content.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D278A] mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center text-xs font-bold text-[#0D278A] hover:underline pt-3 border-t border-slate-100 mt-auto group-hover:translate-x-1 transition-transform"
                >
                  <span>{t("services.learnMore")}</span>
                  <span className="ml-1">→</span>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
