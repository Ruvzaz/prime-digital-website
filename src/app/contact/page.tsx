import { ContactSection } from "@/components/sections/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ติดต่อเรา | Contact Us",
  description:
    "ปรึกษาเราเพื่อเริ่มต้น Digital Transformation ออกแบบระบบ และ Data Strategy สำหรับองค์กรของคุณ",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      <ContactSection />
    </main>
  );
}
