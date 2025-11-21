"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

/**
 * Client component ที่ทำหน้าที่ update lang attribute ของ <html> tag
 * เพื่อป้องกัน hydration mismatch
 */
export function HtmlLangWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();

  useEffect(() => {
    // Update lang attribute เมื่อภาษาเปลี่ยน
    document.documentElement.lang = language;
  }, [language]);

  return <>{children}</>;
}
