import Image from "next/image";
import Link from "next/link";
import { PROJECTS, type Project } from "@/lib/projects";

// นี่คือหน้า /portfolio (เป็น Server Component โดย default)
export default function PortfolioPage() {
  return (
    // พื้นหลังหลักของหน้าทั้งหน้า
    <main className="min-h-screen bg-[#F5F7FA]">
      {/* ส่วนหัวของหน้า (Page Header) */}
      <section className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5A73C3] uppercase">
            PORTFOLIO
          </p>
          <h1 className="mt-2 text-2xl md:text-3xl font-semibold text-[#111827]">
            ผลงานที่เราเคยร่วมพัฒนากับองค์กรต่าง ๆ
          </h1>
          <p className="mt-3 text-sm text-[#4B5563] max-w-2xl">
            รวมตัวอย่างบางส่วนของโครงการด้านการออกแบบระบบ พัฒนา backend
            และแดชบอร์ดข้อมูล ที่เราช่วยองค์กรภาครัฐและเอกชนออกแบบและส่งมอบ
            โดยเน้นผลลัพธ์ที่ใช้งานได้จริงในบริบทขององค์กร.
          </p>
        </div>
      </section>

      {/* ส่วนรายการโปรเจกต์ทั้งหมด */}
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-8 md:space-y-10">
          {PROJECTS.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

// Type ของ props สำหรับ component ย่อย
type ProjectRowProps = {
  project: Project;
};

// Component แสดงโปรเจกต์ 1 ชิ้นในรูปแบบ "รูป + ข้อความ"
function ProjectRow({ project }: ProjectRowProps) {
  return (
    <article className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_16px_40px_rgba(15,23,42,0.06)] overflow-hidden">
      <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
        {/* ฝั่งซ้าย: รูปภาพ */}
        <div className="relative aspect-[4/3] bg-[#E5E7EB]">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>

        {/* ฝั่งขวา: รายละเอียดโปรเจกต์ */}
        <div className="p-6 md:p-8 flex flex-col gap-4 md:gap-5">
          {/* หมวด + ปี */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wide">
            <span className="px-2 py-1 rounded-full bg-[#E3E7F8] text-[#0D278A] font-semibold">
              {project.category}
            </span>
            <span className="text-[#6B7280]">{project.year}</span>
          </div>

          {/* ชื่อโปรเจกต์ */}
          <h2 className="text-lg md:text-xl font-semibold text-[#111827]">
            {project.title}
          </h2>

          {/* คำอธิบาย */}
          <p className="text-sm text-[#4B5563] leading-relaxed">
            {project.description}
          </p>

          {/* ด้านล่าง: ข้อความเสริม + ปุ่มลิงก์ไป contact */}
          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
            <p className="text-xs text-[#6B7280]">
              * รายละเอียดเชิงเทคนิคและ stack ที่ใช้สามารถพูดคุยเพิ่มเติมได้ระหว่างการปรึกษา.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#0D278A] text-white text-xs font-semibold shadow-sm hover:bg-[#0A1E6A] transition"
            >
              สนใจโปรเจกต์ลักษณะนี้
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
