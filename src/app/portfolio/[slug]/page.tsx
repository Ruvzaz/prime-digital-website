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

  const title = `${project.title_th} (${project.title_en}) | Prime Digital Consultant`;
  const description = project.description_th || project.description_en;
  const pageUrl = `https://primedigital.co/portfolio/${project.slug}`;

  return {
    title,
    description,
    keywords: [
      project.category_th,
      project.category_en,
      "Prime Digital Consultant",
      "Portfolio",
      "Case Study",
      "Digital Transformation",
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      url: pageUrl,
      title,
      description,
      siteName: "Prime Digital Consultant",
      images: [
        {
          url: project.imageSrc,
          width: 1200,
          height: 630,
          alt: project.title_th,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.imageSrc],
    },
  };
}

// Generate Static Params for Static Export (Optional but good for performance)
export async function generateStaticParams() {
  return PROJECTS.filter((p) => p.slug).map((project) => ({
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
