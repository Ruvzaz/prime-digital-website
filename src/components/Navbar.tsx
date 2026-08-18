"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  { href: "/", labelKey: "nav.home" },
  { href: "/services", labelKey: "nav.services" },
  { href: "/portfolio", labelKey: "nav.portfolio" },
  { href: "/about", labelKey: "nav.about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3">
        {/* เม็ดแคปซูลหลัก */}
        <div className="bg-white/90 backdrop-blur-md rounded-full border border-slate-200/80 shadow-md shadow-slate-900/5 flex items-center justify-between gap-2 px-4 md:px-6 h-14 md:h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/prime-logo.png"
              alt="Prime Digital Consultant"
              width={120}
              height={40}
              className="h-14 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* NAV LINKS – เฉพาะจอใหญ่ */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 transition-colors ${
                    isActive
                      ? "text-[#0D278A] font-bold"
                      : "hover:text-[#0D278A]"
                  }`}
                >
                  {t(item.labelKey)}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D278A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Language Switcher + CTA Button – เฉพาะจอใหญ่ */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === "th" ? "en" : "th")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-colors text-xs font-semibold text-slate-700 cursor-pointer shadow-2xs"
              aria-label="Switch language"
            >
              <span className="text-slate-400">🌐</span>
              <span>{language === "th" ? "TH" : "EN"}</span>
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-[#0D278A] to-[#2563EB] text-white text-xs md:text-sm font-semibold shadow-md shadow-blue-900/15 hover:shadow-lg hover:brightness-105 transition"
            >
              {t("nav.cta")}
            </Link>
          </div>

          {/* HAMBURGER – เฉพาะมือถือ */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 text-slate-800 hover:bg-slate-100 transition cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-[5px]">
              <span
                className={`block h-[2px] w-5 rounded-full bg-slate-800 transition-transform ${
                  open ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-slate-800 transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-slate-800 transition-transform ${
                  open ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      {open && (
        <div className="md:hidden fixed inset-0 z-30" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-xs" />

          <div
            className="absolute top-16 right-4 w-56 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-slate-200 p-4 space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-2 text-sm text-slate-800 font-medium">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`py-1.5 px-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#EEF2FF] text-[#0D278A] font-bold"
                        : "hover:bg-slate-100 hover:text-[#0D278A]"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {t(item.labelKey)}
                  </Link>
                );
              })}
            </nav>

            {/* Language Switcher - Mobile */}
            <button
              onClick={() => setLanguage(language === "th" ? "en" : "th")}
              className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-full border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700 cursor-pointer"
            >
              <span>🌐</span>
              <span>{language === "th" ? "ไทย (TH)" : "English (EN)"}</span>
            </button>

            <hr className="border-slate-200" />

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center w-full px-4 py-2 rounded-full bg-gradient-to-r from-[#0D278A] to-[#2563EB] text-white text-xs font-semibold shadow-md"
            >
              {t("nav.cta")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
