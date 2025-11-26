"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0D278A] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-[1.5fr_0.5fr_0.75fr] gap-12 mb-12">
          {/* 1) Brand / Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 bg-white/10 w-fit px-4 py-2 rounded-xl backdrop-blur-sm">
              <span className="text-xl font-bold tracking-wide">{t("footer.brand")}</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>
          </div>

          <div><span></span></div>

          {/* 3) Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t("footer.contact.title")}</h4>
            <h2 className="text-md font-bold mb-6">{t("footer.contact.company")}</h2>
            <ul className="space-y-1 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <span className="opacity-70">{t("footer.email")}:</span>
                <a href="mailto:contact@primedigital.co.th" className="hover:text-white transition-colors">
                  {t("footer.contact.email")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="opacity-70">{t("footer.phone")}:</span>
                <a href="tel:02-123-4567" className="hover:text-white transition-colors">
                  02-123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="opacity-70">{t("footer.address")}:</span>
                <span className="whitespace-pre-line">
                  {t("footer.contact.address")}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="opacity-70">{t("footer.time")}:</span>
                <span className="whitespace-pre-line">
                  {t("footer.contact.time")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>{t("footer.copyright").replace("{year}", new Date().getFullYear().toString())}</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white/80 transition">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="hover:text-white/80 transition">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
