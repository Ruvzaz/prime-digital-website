"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  // Framer Motion Animation Variants (Wiz.io Spring Easing)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white text-slate-900 min-h-screen flex items-center pt-28 md:pt-32 pb-20 md:pb-28 border-b border-slate-200/70">
      {/* Background Architectural Mesh & Wiz Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Background Building Mask */}
        <Image
          src="/images/hero-building.jpg"
          alt="Office building background"
          fill
          priority
          className="object-cover opacity-[0.035] mix-blend-multiply scale-105"
        />

        {/* Dynamic Wiz-style Cyan & Deep Blue Glowing Orbs */}
        <div className="absolute top-[-10%] right-[10%] w-[550px] h-[550px] bg-gradient-to-br from-cyan-400/15 via-blue-600/10 to-indigo-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] bg-gradient-to-tr from-[#0D278A]/10 via-blue-400/10 to-transparent rounded-full blur-[130px]" />

        {/* Precision Grid Dots Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #0D278A 1.2px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid xl:grid-cols-12 gap-12 xl:gap-16 items-center"
        >
          {/* Left Column: Wiz-style Headline & CTAs */}
          <div className="xl:col-span-7 space-y-6 text-center xl:text-left">
            {/* Category Tag Badge with Pulsing Live Indicator */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EEF2FF] border border-[#0D278A]/15 text-[#0D278A] text-xs md:text-sm font-bold tracking-wide shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D278A] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0D278A]" />
                </span>
                <span>{t("hero.subtitle")}</span>
              </div>
            </motion.div>

            {/* Wiz-style Bold High-Contrast Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
            >
              <span>{t("hero.title.line1")}</span>
              <br className="hidden sm:block" />{" "}
              <span className="bg-gradient-to-r from-[#0D278A] via-[#1E40AF] to-cyan-600 bg-clip-text text-transparent">
                {t("hero.title.line2")}
              </span>
            </motion.h1>

            {/* Paragraph Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto xl:mx-0 leading-relaxed font-normal"
            >
              {t("hero.description")}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center xl:justify-start gap-4 pt-2"
            >
              <Link
                href="/portfolio"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0D278A] text-white text-sm font-semibold shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">{t("hero.cta2")}</span>
                <svg
                  className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-slate-300 text-slate-800 text-sm font-semibold hover:bg-slate-50 hover:border-slate-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-2xs"
              >
                <span>{t("hero.cta1")}</span>
              </Link>
            </motion.div>

            {/* Wiz-style Enterprise Metric Bar */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg mx-auto xl:mx-0 text-center xl:text-left"
            >
              <div>
                <p className="text-xl md:text-2xl font-extrabold text-[#0D278A] tracking-tight">
                  100%
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Security Standard
                </p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-extrabold text-[#0D278A] tracking-tight">
                  Enterprise
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Digital Solutions
                </p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-extrabold text-[#0D278A] tracking-tight">
                  24/7
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Consult Support
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Wiz-inspired Interactive Context Graph & Architecture Artwork */}
          <motion.div
            variants={itemVariants}
            className="xl:col-span-5 w-full max-w-lg mx-auto relative"
          >
            {/* Wiz Floating Badge 1: Top Right Risk Shield */}
            <motion.div
              animate={{ y: [-5, 5] }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-3 z-20 hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_12px_30px_rgba(13,39,138,0.08)] text-xs font-bold text-slate-800 transform-gpu"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-600 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span>NCSA / ISO Verified</span>
            </motion.div>

            {/* Wiz Floating Badge 2: Bottom Left Realtime Sync */}
            <motion.div
              animate={{ y: [5, -5] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-3 z-20 hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_12px_30px_rgba(13,39,138,0.08)] text-xs font-bold text-slate-800 transform-gpu"
            >
              <div className="w-6 h-6 rounded-lg bg-cyan-500/15 text-cyan-600 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <span>Automated Risk Fix</span>
            </motion.div>

            {/* Main Interactive Graph Dashboard Container */}
            <div className="bg-white/90 backdrop-blur-2xl border border-slate-200/90 shadow-[0_24px_70px_rgba(13,39,138,0.12)] rounded-3xl p-6 sm:p-7 space-y-6 text-slate-800 relative overflow-hidden group hover:border-[#0D278A]/30 transition-all duration-300">
              {/* Card Header: Context Graph Title */}
              <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#0D278A] flex items-center justify-center border border-[#0D278A]/10 shadow-2xs">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 tracking-wide">
                      {t("hero.card.title")}
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Security Context & Architecture Graph
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FF] text-[#0D278A] text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Monitored</span>
                </div>
              </div>

              {/* Wiz-style Connected Graph Visual Diagram */}
              <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-100 space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-700">
                    Architecture Health Index
                  </span>
                  <span className="font-bold text-[#0D278A]">
                    99.8% Optimized
                  </span>
                </div>

                {/* SVG Connected Nodes Graph */}
                <div className="relative h-28 w-full bg-white rounded-xl border border-slate-200/80 p-3 flex items-center justify-between overflow-hidden shadow-inner">
                  {/* Background Node Lines */}
                  <svg
                    className="absolute inset-0 w-full h-full stroke-slate-200"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  >
                    <line x1="20%" y1="50%" x2="50%" y2="50%" />
                    <line x1="50%" y1="50%" x2="80%" y2="50%" />
                  </svg>

                  {/* Node 1: Code / Audit */}
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#0D278A] flex items-center justify-center shadow-2xs font-mono font-bold text-xs">
                      AUDIT
                    </div>
                    <span className="text-[10px] font-bold text-slate-600">
                      Code & Infra
                    </span>
                  </div>

                  {/* Connecting Pulse Arrow */}
                  <div className="relative z-10 w-8 h-0.5 bg-gradient-to-r from-[#0D278A] to-cyan-500 rounded-full animate-pulse" />

                  {/* Node 2: Cloud Architecture */}
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <div className="w-11 h-11 rounded-xl bg-[#0D278A] border border-blue-900 text-white flex items-center justify-center shadow-md shadow-blue-900/20 font-mono font-bold text-xs">
                      CLOUD
                    </div>
                    <span className="text-[10px] font-extrabold text-[#0D278A]">
                      Architecture
                    </span>
                  </div>

                  {/* Connecting Pulse Arrow */}
                  <div className="relative z-10 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full animate-pulse" />

                  {/* Node 3: Executive Insights */}
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shadow-2xs font-mono font-bold text-xs">
                      DATA
                    </div>
                    <span className="text-[10px] font-bold text-slate-600">
                      Dashboard
                    </span>
                  </div>
                </div>
              </div>

              {/* 3 Real Feature Scope Cards */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-slate-100/80 transition-colors flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#EEF2FF] text-[#0D278A] flex items-center justify-center font-bold text-xs shrink-0">
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="font-semibold text-slate-800">
                      {t("hero.card.item1")}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#0D278A] bg-[#EEF2FF] px-2.5 py-0.5 rounded-md font-bold">
                    PASSED
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-slate-100/80 transition-colors flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#EEF2FF] text-[#0D278A] flex items-center justify-center font-bold text-xs shrink-0">
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
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                    <span className="font-semibold text-slate-800">
                      {t("hero.card.item2")}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#0D278A] bg-[#EEF2FF] px-2.5 py-0.5 rounded-md font-bold">
                    ACTIVE
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-slate-100/80 transition-colors flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#EEF2FF] text-[#0D278A] flex items-center justify-center font-bold text-xs shrink-0">
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
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 012 2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <span className="font-semibold text-slate-800">
                      {t("hero.card.item3")}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#0D278A] bg-[#EEF2FF] px-2.5 py-0.5 rounded-md font-bold">
                    SYNCED
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
