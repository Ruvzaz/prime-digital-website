"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, type Project, getProjectContent } from "@/lib/projects";
import { useLanguage } from "@/contexts/LanguageContext";

export function PortfolioContent() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extract unique tags for filter tabs
  const categoryTabs = useMemo(() => {
    const tagsSet = new Set<string>();
    PROJECTS.forEach((p) => {
      if (p.slug) {
        const content = getProjectContent(p, language);
        content.tags.forEach((tag) => {
          if (tag) tagsSet.add(tag);
        });
      }
    });

    return [
      { id: "ALL", label: language === "th" ? "ทั้งหมด" : "All Projects" },
      ...Array.from(tagsSet).map((tag) => ({ id: tag, label: tag })),
    ];
  }, [language]);

  // Filter projects based on tag & search query
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (!p.slug) return false;

      const content = getProjectContent(p, language);
      const matchesCategory =
        selectedCategory === "ALL" || content.tags.includes(selectedCategory);

      const matchesSearch =
        !searchQuery.trim() ||
        content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20 bg-[#F8FAFC]">
      {/* 1) Header / Hero Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 mb-12 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-[#E0E7FF] text-[#0D278A] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">
          {t("portfolio.subtitle")}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          {t("portfolio.title")}
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {t("portfolio.description")}
        </p>
      </section>

      {/* 2) Filter Tabs & Search Bar */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-sm">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categoryTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0D278A] text-white shadow-md shadow-blue-900/20 scale-[1.02]"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder={language === "th" ? "ค้นหาผลงาน..." : "Search projects..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-9 rounded-xl text-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0D278A]/30 focus:border-[#0D278A] transition-all"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3) Projects List Grid */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 space-y-10">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 font-medium">
              {language === "th"
                ? "ไม่พบผลงานที่ตรงกับเงื่อนไข"
                : "No projects match your search criteria."}
            </p>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} language={language} />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </section>
    </main>
  );
}

type ProjectCardProps = {
  project: Project;
  language: "th" | "en";
};

function ProjectCard({ project, language }: ProjectCardProps) {
  const { t } = useLanguage();
  const content = getProjectContent(project, language);

  return (
    <article className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300">
      <div className="grid md:grid-cols-12 gap-0">
        {/* Left: Image Container */}
        <div className="md:col-span-5 relative min-h-[260px] md:min-h-[340px] bg-slate-100 overflow-hidden">
          <Image
            src={project.imageSrc}
            alt={content.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(min-width: 768px) 45vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Right: Content details */}
        <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            {/* Category Tags & Year */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {content.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#0D278A] font-bold tracking-wide"
                >
                  {tag}
                </span>
              ))}
              <span className="text-slate-400 font-semibold">•</span>
              <span className="text-slate-400 font-medium">{project.year}</span>
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug group-hover:text-[#0D278A] transition-colors">
              {content.title}
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-slate-600 leading-relaxed line-clamp-4">
              {content.description}
            </p>
          </div>

          {/* Footer CTA & Note */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-slate-400 italic">
              {t("portfolio.technicalNote")}
            </p>
            <Link
              href={`/portfolio/${project.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0D278A] text-white text-xs md:text-sm font-semibold hover:bg-[#0A1E6A] shadow-md hover:shadow-lg shadow-blue-900/10 transition-all hover:translate-x-0.5"
            >
              <span>{t("portfolio.cta")}</span>
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
          </div>
        </div>
      </div>
    </article>
  );
}
