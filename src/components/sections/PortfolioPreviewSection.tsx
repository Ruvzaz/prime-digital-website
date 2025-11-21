"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { PROJECTS, type Project } from "@/lib/projects";

export function PortfolioPreviewSection() {
  // ตั้งค่า Embla ให้เลื่อนทีละ 1 การ์ด และวนลูป
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 3500, // 3.5 วินาทีต่อการขยับครั้งนึง
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#5A73C3] uppercase">
              PORTFOLIO
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#111827]">
              ตัวอย่างผลงานที่คัดมาให้คุณดู
            </h2>
            <p className="mt-2 text-sm text-[#4B5563] max-w-xl">
              โปรเจกต์ด้านระบบดิจิทัลและข้อมูลที่เราได้ร่วมงานกับองค์กรภาครัฐและเอกชน
              โดยเน้นผลลัพธ์ที่ใช้งานได้จริงในบริบทขององค์กร.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full border border-[#5A73C3] text-[#0D278A] text-xs font-semibold bg-white hover:bg-[#EEF2FF] transition"
          >
            ดูผลงานทั้งหมด
          </Link>
        </div>

        {/* === Embla viewport === */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* track = จะถูกเลื่อนซ้ายขวา */}
          <div className="flex">
            {PROJECTS.map((project: Project) => (
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
                      className="inline-flex items-center text-xs font-semibold text-[#0D278A] hover:underline mt-2"
                    >
                      ดูรายละเอียดโปรเจกต์ →
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* ปุ่มดูทั้งหมดสำหรับ mobile */}
        <div className="mt-6 md:hidden text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center px-5 py-2.5 rounded-full border border-[#5A73C3] text-[#0D278A] text-xs font-semibold bg-white hover:bg-[#EEF2FF] transition"
          >
            ดูผลงานทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
}
