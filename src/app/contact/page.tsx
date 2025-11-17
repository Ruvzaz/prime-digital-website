// src/app/contact/page.tsx

import { ContactSection } from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
   

      {/* ใช้ ContactSection ที่เราเขียนไว้แล้ว (การ์ด + ฟอร์ม) */}
      <ContactSection />
    </main>
  );
}
