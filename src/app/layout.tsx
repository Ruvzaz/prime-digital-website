import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1) นำเข้า Navbar ที่เราสร้างเมื่อกี้
//    เส้นทางนี้ หมายถึง: src/components/Navbar
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";
// 2) ตั้งค่า font Inter เป็น font หลักทั้งเว็บ
const inter = Inter({ subsets: ["latin"] });

// 3) metadata = ข้อมูล SEO พื้นฐานของเว็บ
export const metadata: Metadata = {
  title: "Prime Digital Consultant",
  description: "Digital consulting for modern & data-driven business.",
};

// 4) RootLayout = โครงหลักของทุกหน้าในเว็บ
//    children = เนื้อหาของแต่ละหน้า (Home, Services, About, ...)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 5) <html lang="th"> บอก browser ว่าใช้ภาษาไทยเป็นหลัก
    <html lang="th">
      {/* 6) ใส่ className จาก Inter (ฟอนต์) ให้กับทั้ง body */}
      <body className={inter.className}>
        {/* 7) Navbar อยู่คงที่ */}
        <SmoothScroll>
        <Navbar />

        {/* 8) ครอบ children ด้วย PageTransition */}
        <PageTransition>{children}</PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
