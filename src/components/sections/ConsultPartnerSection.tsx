"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function ConsultPartnerSection() {
  const { t } = useLanguage();

  const partners = [
    "/images/partnerLogo/img1.png",
    "/images/partnerLogo/img2.png",
    "/images/partnerLogo/img3.png",
    "/images/partnerLogo/img4.png",
    "/images/partnerLogo/img5.png",
  ];

  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24 border-t border-slate-200/60 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 md:px-6 text-center"
      >
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#E0E7FF] text-[#0D278A] text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-2xs">
          {t("consult_partner.title")}
        </span>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-4">
          {partners.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative h-20 w-28 md:h-24 md:w-36 transition-all duration-300 hover:scale-110 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 cursor-pointer transform-gpu"
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
