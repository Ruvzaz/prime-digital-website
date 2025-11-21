"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative overflow-hidden bg-[#0D278A] min-h-screen flex items-center">
      {/* พื้นหลังรูปตึกแบบเต็มจอแนวนอน */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-building.jpg"
          alt="Office building background"
          fill
          priority
          className="object-cover"
        />
        {/* เลเยอร์กรองสีฟ้าอ่อนให้ภาพไม่แข่งกับตัวอักษร */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D278A]/70 via-[#0D278A]/40 to-[#0D278A]/20" />
      </div>

      {/* เนื้อหา Hero */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
        {/* กล่อง glass ใหญ่ตรงกลางคล้ายตัวอย่าง */}
        <div className="bg-white/85 backdrop-blur-xl rounded-[28px] md:rounded-[32px] shadow-[0_24px_80px_rgba(15,23,42,0.30)] border border-white/70 w-full max-w-3xl md:max-w-none mx-auto px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between text-center md:text-left gap-8">
          {/* ฝั่งซ้าย: ข้อความ + CTA */}
          <div className="space-y-4 md:space-y-5 max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#5A73C3] uppercase">
              {t("hero.subtitle")}
            </p>

            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-[#0D278A]">
              {t("hero.title.line1")}
              <br className="hidden sm:block" />
              {" "}
              {t("hero.title.line2")}
            </h1>

            <p className="text-sm md:text-base text-[#4B5563] max-w-lg">
              {t("hero.description")}
            </p>

            {/* ปุ่ม CTA 2 ปุ่ม */}
            <div className="flex flex-wrap items-center gap-3 pt-2 justify-center md:justify-start">
              {/* ปุ่มรอง: นัดหมายปรึกษา → ไปหน้า Contact */}
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full border border-gray-200 bg-white text-xs md:text-sm font-semibold text-[#111827] hover:bg-gray-50 hover:border-gray-300 transition-colors"
              >
                {t("hero.cta1")}
              </Link>

              {/* ปุ่มหลัก: ดูผลงานของเรา → ไปหน้า Portfolio */}
              <Link
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#0D278A] text-white text-xs md:text-sm font-semibold hover:bg-[#0A1E6A] transition-colors"
              >
                {t("hero.cta2")}
              </Link>
            </div>
          </div>

          {/* ฝั่งขวา: ไอคอนการ์ดทรงสี่เหลี่ยมโค้งเหมือนในภาพ */}
          <div className="md:justify-self-end">
          <div className="bg-white/90 backdrop-blur rounded-2xl p-6 md:p-8 shadow-2xl max-w-md mx-auto">
            <h3 className="text-[#0D278A] font-semibold text-lg mb-4">
              {t("hero.card.title")}
            </h3>

            {/* 5.1) รายการ bullet สั้น ๆ */}
            <ul className="space-y-2 text-sm text-[#4B5563]">
              <li>{t("hero.card.item1")}</li>
              <li>{t("hero.card.item2")}</li>
              <li>{t("hero.card.item3")}</li>
            </ul>

            {/* 5.2) ข้อความเล็กด้านล่าง card */}
            <p className="mt-4 text-xs text-[#6B7280]">
              {t("hero.card.footer")}
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
