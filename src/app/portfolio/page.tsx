import Image from "next/image";
import Link from "next/link";
import { PROJECTS, type Project } from "@/lib/projects";

// นี่คือหน้า /portfolio (เป็น Server Component โดย default)
export default function PortfolioPage() {
  return (
    // พื้นหลังหลักของหน้าทั้งหน้า (ใช้สีเดียวกับ Global)
    <main className="min-h-screen pt-24 md:pt-32 pb-20">
      
      {/* 1) Header / Hero Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 mb-16 md:mb-24 text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-[#0D278A] uppercase mb-4">
          PORTFOLIO
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          ผลงานที่เราเคยร่วมพัฒนากับองค์กรต่าง ๆ
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          รวมตัวอย่างบางส่วนของโครงการด้านการออกแบบระบบ พัฒนา backend
          และแดชบอร์ดข้อมูล ที่เราช่วยองค์กรภาครัฐและเอกชนออกแบบและส่งมอบ
          โดยเน้นผลลัพธ์ที่ใช้งานได้จริงในบริบทขององค์กร.
        </p>
      </section>

      {/* 2) ส่วนรายการโปรเจกต์ทั้งหมด */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 space-y-12">
        {PROJECTS.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
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
    <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-colors duration-300 hover:border-gray-300">
      <div className="grid md:grid-cols-2">
        {/* ฝั่งซ้าย: รูปภาพ */}
        <div className="relative h-full min-h-[300px] bg-gray-100 group">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>

        {/* ฝั่งขวา: รายละเอียดโปรเจกต์ */}
        <div className="p-8 md:p-10 flex flex-col gap-6">
          {/* หมวด + ปี */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-wide">
            <span className="px-3 py-1 rounded-full bg-[#E3E7F8] text-[#0D278A] font-bold">
              {project.category}
            </span>
            <span className="text-gray-400 font-medium">{project.year}</span>
          </div>

          {/* ชื่อโปรเจกต์ */}
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">
            {project.title}
          </h2>

          {/* คำอธิบาย */}
          <p className="text-gray-600 leading-relaxed">
            {project.description}
          </p>

          {/* ด้านล่าง: ข้อความเสริม + ปุ่มลิงก์ไป contact */}
          <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-gray-400 italic">
              * รายละเอียดเชิงเทคนิคและ stack สามารถพูดคุยเพิ่มเติมได้
            </p>
            <Link
              href={`/portfolio/${project.slug}`}
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#0D278A] text-white text-sm font-semibold hover:bg-[#0A1E6A] transition-colors"
            >
              สนใจโปรเจกต์นี้
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
