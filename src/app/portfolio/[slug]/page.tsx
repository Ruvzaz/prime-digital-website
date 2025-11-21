import { PROJECTS } from "@/lib/projects";
import { notFound } from "next/navigation";
import { ProjectDetailContent } from "./ProjectDetailContent";
import type { Metadata } from "next";

type RouteParams = {
  slug: string;
};

type Props = {
  params: Promise<RouteParams>;
};

// Generate Metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug.toLowerCase() === slug.toLowerCase());

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title_en} | Prime Digital Consultant`,
    description: project.description_en,
    openGraph: {
      title: project.title_en,
      description: project.description_en,
      images: [project.imageSrc],
    },
  };
}

// Generate Static Params for Static Export (Optional but good for performance)
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = PROJECTS.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!project) return notFound();

  return <ProjectDetailContent project={project} />;
}
