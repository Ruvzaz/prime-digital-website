import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioPreviewSection } from "@/components/sections/PortfolioPreviewSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ConsultPartnerSection } from "@/components/sections/ConsultPartnerSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      <HeroSection />
      <ServicesSection />
      <PortfolioPreviewSection />
      <ContactSection />
      <ConsultPartnerSection />
    </main>
  );
}
