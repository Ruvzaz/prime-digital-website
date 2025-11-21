"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PROJECTS, getProjectContent } from "@/lib/projects";
import { useLanguage } from "@/contexts/LanguageContext";

export function PortfolioPreviewSection() {
  const { language, t } = useLanguage();
  const projects = PROJECTS.slice(0, 6).map(p => getProjectContent(p, language));
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* หัวข้อ */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs md:text-sm uppercase tracking-widest text-[#0D278A] font-bold mb-3">
            {t("portfolio.subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F172A]">
            {t("portfolio.title")}
          </h2>
          <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
            {t("portfolio.description")}
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project) => (
              <div
                key={project.id}
                className="shrink-0 basis-full md:basis-1/3 px-3"
              >
                <article className="group bg-[#FCFCFD] rounded-2xl border border-gray-200 overflow-hidden transition-colors duration-300 hover:border-gray-300 h-full flex flex-col">
                  {/* รูปด้านบน */}
                  <div className="relative aspect-[4/3] bg-[#E5E7EB]">
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>

                  {/* เนื้อหาการ์ด */}
                  <div className="p-5 space-y-3 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide">
                      <span className="px-2 py-1 rounded-full bg-[#E3E7F8] text-[#0D278A] font-semibold">
                        {project.category}
                      </span>
                      <span className="text-[#6B7280]">{project.year}</span>
                    </div>

                    <h3 className="text-base font-semibold text-[#111827] group-hover:text-[#0D278A] transition">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#4B5563] flex-1">
                      {project.description}
                    </p>

                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center text-xs font-semibold text-[#0D278A] hover:underline mt-auto"
                    >
                      {t("portfolio.view")} →
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#0D278A] text-white text-sm font-semibold hover:bg-[#0A1E6A] transition-colors"
          >
            {t("portfolio.cta")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
