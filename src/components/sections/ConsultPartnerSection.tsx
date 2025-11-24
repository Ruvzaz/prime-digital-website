"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function ConsultPartnerSection() {
    const { t } = useLanguage();

    // Placeholder logos - using existing logos for now
    const partners = [
        "/images/partnerLogo/img1.png",
        "/images/partnerLogo/img2.png",
        "/images/partnerLogo/img3.png",
        "/images/partnerLogo/img4.png",
        "/images/partnerLogo/img5.png",

    ];

    return (
        <section className="bg-[#F5F7FA] py-16 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
                <h3 className="text-lg md:text-xl font-bold text-[#0F172A] mb-10 uppercase tracking-wide">
                    {t("consult_partner.title")}
                </h3>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {partners.map((logo, index) => (
                        <div key={index} className="relative h-16 w-16 md:h-40 md:w-40">
                            <Image
                                src={logo}
                                alt={`Partner ${index + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
