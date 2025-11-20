import { PROJECTS } from "@/lib/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

type RouteParams = {
  slug: string;
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;

  const project = PROJECTS.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      {/* HERO */}
      <section className="relative w-full h-[360px] md:h-[420px] overflow-hidden">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Title on Hero */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto w-full px-4 pb-10 text-white">
            <p className="text-xs md:text-sm tracking-widest opacity-80">
              PORTFOLIO
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              {project.title}
            </h1>

            <div className="flex gap-3 mt-3 text-xs md:text-sm">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                {project.year}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT CARD */}
      <section className="relative -mt-14 md:-mt-20 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          <article className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-6 md:p-10 space-y-8 border border-[#E5E7EB]">
            {/* Overview */}
            <div>
              <h2 className="text-lg font-semibold text-[#0D278A] mb-2">
                ภาพรวมโปรเจกต์
              </h2>
              <p className="text-sm md:text-base text-[#4B5563] leading-relaxed">
                {project.overview || project.description}
              </p>
            </div>

            {/* Detail Sections */}
            <div className="space-y-6 text-sm md:text-base text-[#4B5563] leading-relaxed">
              {project.problem && (
                <section>
                  <h3 className="font-semibold text-[#0D278A] mb-1">
                    ปัญหาก่อนเริ่มโปรเจกต์
                  </h3>
                  <p>{project.problem}</p>
                </section>
              )}

              {project.solution && (
                <section>
                  <h3 className="font-semibold text-[#0D278A] mb-1">
                    แนวทางและการออกแบบของเรา
                  </h3>
                  <p>{project.solution}</p>
                </section>
              )}

              {project.outcome && (
                <section>
                  <h3 className="font-semibold text-[#0D278A] mb-1">
                    ผลลัพธ์ที่เกิดขึ้น
                  </h3>
                  <p>{project.outcome}</p>
                </section>
              )}
            </div>

            {/* GALLERY GRID */}
            {project.gallery && project.gallery.length > 0 && (
              <section className="pt-4">
                <h3 className="font-semibold text-[#0D278A] mb-3">
                  ภาพประกอบเพิ่มเติม
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((img, index) => (
                    <div
                      key={index}
                      className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100"
                    >
                      <Image
                        src={img}
                        alt={`Gallery ${index}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <div className="pt-6">
              <a
                href="/contact"
                className="inline-flex items-center text-sm font-semibold text-[#0D278A] hover:underline"
              >
                ติดต่อเพื่อขอข้อมูลเพิ่มเติม →
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
