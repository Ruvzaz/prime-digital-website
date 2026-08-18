"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-[#0B1E68] text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-10 border-b border-white/10">
          {/* Column 1: Brand & Summary (Span 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 bg-white/10 w-fit px-3.5 py-1.5 rounded-lg backdrop-blur-xs">
              <span className="text-base font-bold tracking-wider">
                {t("footer.brand")}
              </span>
            </div>
            <p className="text-white/75 text-xs md:text-sm leading-relaxed max-w-md">
              {t("footer.description")}
            </p>
          </div>

          {/* Column 2: Navigation Links (Span 3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-200">
              {t("footer.menu.title")}
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  {t("nav.portfolio")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (Span 4) */}
          <div className="md:col-span-4 space-y-3 text-xs md:text-sm">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-200">
              {t("footer.contact.title")}
            </h4>
            <p className="font-semibold text-white">{t("footer.contact.company")}</p>

            <ul className="space-y-2 text-white/75">
              <li className="flex items-start gap-2">
                <span className="text-blue-300 font-medium shrink-0">
                  {t("footer.email")}:
                </span>
                <a
                  href={`mailto:${t("footer.contact.email")}`}
                  className="hover:text-white transition-colors"
                >
                  {t("footer.contact.email")}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-300 font-medium shrink-0">
                  {t("footer.phone")}:
                </span>
                <a
                  href={`tel:${t("footer.contact.phone")}`}
                  className="hover:text-white transition-colors"
                >
                  {t("footer.contact.phone")}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-300 font-medium shrink-0">
                  {t("footer.address")}:
                </span>
                <span className="whitespace-pre-line leading-relaxed">
                  {t("footer.contact.address")}
                </span>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <span className="text-blue-300 font-medium shrink-0">
                  {t("footer.time")}:
                </span>
                <span className="whitespace-pre-line leading-relaxed">
                  {t("footer.contact.time")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Language Switcher, Policies */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            {t("footer.copyright").replace(
              "{year}",
              new Date().getFullYear().toString()
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* Language Switcher in Footer */}
            <button
              onClick={() => setLanguage(language === "th" ? "en" : "th")}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs transition-all cursor-pointer shadow-2xs"
            >
              <span>🌐</span>
              <span>{language === "th" ? "English (EN)" : "ไทย (TH)"}</span>
            </button>

            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
