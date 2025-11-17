import Image from "next/image";
import Link from "next/link";

// ⬇️ เพิ่มบรรทัดนี้: import type + data จาก lib
import { PROJECTS, type Project } from "@/lib/projects";

// 3) Component หลักของ Portfolio Preview Section
export function PortfolioPreviewSection() {
  return (
    // 4) พื้นหลังสีขาว เพื่อให้รูปและการ์ดดูชัด
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* 5) ส่วนหัว section */}
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

          {/* ปุ่ม "ดูทั้งหมด" ด้านขวา (แสดงเฉพาะบนหน้าจอใหญ่) */}
          <Link
            href="/portfolio"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full border border-[#5A73C3] text-[#0D278A] text-xs font-semibold bg-white hover:bg-[#EEF2FF] transition"
          >
            ดูผลงานทั้งหมด
          </Link>
        </div>

        {/* 6) ส่วนการ์ดผลงาน: ใช้ grid + map */}
        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project: Project) => (
            <article
              key={project.id}
              className="group bg-[#FCFCFD] rounded-2xl border border-[#E5E7EB] overflow-hidden hover:border-[#B0BBDF] hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              {/* 6.1) ส่วนรูปด้านบนของการ์ด */}
              <div className="relative aspect-[4/3] bg-[#E5E7EB]">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill // ใช้ให้รูปเติมเต็มกรอบ (ต้องใช้คู่กับ className="object-cover")
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              {/* 6.2) เนื้อหาด้านล่าง */}
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide">
                  <span className="px-2 py-1 rounded-full bg-[#E3E7F8] text-[#0D278A] font-semibold">
                    {project.category}
                  </span>
                  <span className="text-[#6B7280]">{project.year}</span>
                </div>

                <h3 className="text-base font-semibold text-[#111827] group-hover:text-[#0D278A] transition">
                  {project.title}
                </h3>

                <p className="text-xs text-[#4B5563]">
                  {project.description}
                </p>

                {/* 6.3) ลิงก์อ่านเพิ่มเติม (ยังไปหน้าเดียวกันทั้งหมดได้ เช่น /portfolio) */}
                <Link
                  href="/portfolio"
                  className="inline-flex items-center text-xs font-semibold text-[#0D278A] hover:underline"
                >
                  ดูรายละเอียดโปรเจกต์ →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
