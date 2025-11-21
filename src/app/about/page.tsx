"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const helpCategories = [
    t("about.help.item1"),
    t("about.help.item2"),
    t("about.help.item3"),
    t("about.help.item4"),
  ];

  const highlights = [
    {
      title: t("about.highlights.item1.title"),
      desc: t("about.highlights.item1.desc"),
    },
    {
      title: t("about.highlights.item2.title"),
      desc: t("about.highlights.item2.desc"),
    },
    {
      title: t("about.highlights.item3.title"),
      desc: t("about.highlights.item3.desc"),
    },
  ];

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20">
      {/* 1) Header / Hero Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 mb-16 md:mb-24 text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-[#0D278A] uppercase mb-4">
          {t("about.subtitle")}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {t("about.companyName")}
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {t("about.hero.description")}
        </p>
      </section>

      {/* 2) About Company & Services */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t("about.intro.title")}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{t("about.intro.paragraph1")}</p>
              <p>{t("about.intro.paragraph2")}</p>
            </div>
          </div>

          {/* Right Box (Card Style) */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100">
            <h3 className="text-lg font-bold text-[#0D278A] mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#0D278A] rounded-full"></span>
              {t("about.helpTitle")}
            </h3>
            <ul className="space-y-4">
              {helpCategories.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <svg
                    className="w-5 h-5 text-[#0D278A] mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3) Highlights */}
      <section className="bg-white py-20 mb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t("about.highlightsTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-[#F5F7FA] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-[#0D278A] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Mindset & Team */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mindset */}
          <div className="bg-gradient-to-br from-[#0D278A] to-[#06154B] rounded-3xl p-8 md:p-10 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-6">{t("about.mindset.title")}</h2>
            <div className="space-y-6 text-white/90 leading-relaxed">
              <p>{t("about.mindset.paragraph1")}</p>
              <p>{t("about.mindset.paragraph2")}</p>
            </div>
          </div>

          {/* Team */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t("about.team.title")}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t("about.team.description")}
            </p>
            <p className="text-sm text-gray-400 italic">
              {t("about.team.note")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
