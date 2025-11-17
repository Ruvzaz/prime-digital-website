import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioPreviewSection } from "@/components/sections/PortfolioPreviewSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      <Hero />
      <ServicesSection />
      <PortfolioPreviewSection />
      <ContactSection />
    </main>
  );
}
