import { PROJECTS } from "@/lib/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

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
    <main className="min-h-screen bg-[#F5F7FA] pt-24 md:pt-32 pb-20">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 mb-16">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          {/* Title on Hero */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-6 md:px-10 pb-8 md:pb-12 text-white">
              <p className="text-xs md:text-sm font-bold tracking-widest uppercase opacity-90 mb-3">
                PORTFOLIO
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                {project.title}
              </h1>

              <div className="flex gap-3 text-xs md:text-sm">
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  {project.category}
                </span>
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  {project.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT CARD */}
      <section className="max-w-6xl mx-auto px-4 md:px-6">
        <article className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 space-y-10">
          {/* Overview */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              ภาพรวมโปรเจกต์
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {project.overview || project.description}
            </p>
          </div>

          {/* Detail Sections */}
          <div className="space-y-8">
            {project.problem && (
              <section className="border-l-4 border-[#0D278A] pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  ปัญหาก่อนเริ่มโปรเจกต์
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">{project.problem}</p>
              </section>
            )}

            {project.solution && (
              <section className="border-l-4 border-[#0D278A] pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  แนวทางและการออกแบบของเรา
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">{project.solution}</p>
              </section>
            )}

            {project.outcome && (
              <section className="border-l-4 border-[#0D278A] pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  ผลลัพธ์ที่เกิดขึ้น
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">{project.outcome}</p>
              </section>
            )}
          </div>

          {/* GALLERY GRID */}
          {project.gallery && project.gallery.length > 0 && (
            <section className="pt-4">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                ภาพประกอบเพิ่มเติม
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100 border border-gray-200"
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
          <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-gray-500 italic">
              สนใจรายละเอียดเพิ่มเติมหรือต้องการให้เราช่วยออกแบบโปรเจกต์คล้ายกัน?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#0D278A] text-white text-sm font-semibold hover:bg-[#0A1E6A] transition-colors"
            >
              ติดต่อเรา
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
