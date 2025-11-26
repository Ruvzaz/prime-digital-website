import type { Metadata } from "next";
import { Poppins, Prompt } from "next/font/google";
import "./globals.css";

import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";
import { Preloader } from "@/components/layout/Preloader";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HtmlLangWrapper } from "@/components/layout/HtmlLangWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "Prime Digital Consultant – ที่ปรึกษาด้านดิจิทัล ออกแบบกลยุทธ์และระบบ",
  description:
    "เราโฟกัสช่วยองค์กรออกแบบและพัฒนาระบบดิจิทัลที่ซับซ้อน ทั้งกลยุทธ์ สถาปัตยกรรม และ Data-Driven Decision Making",
  metadataBase: new URL("https://primedigital.co"), // Replace with actual domain or localhost for dev
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${poppins.variable} ${prompt.variable} antialiased font-sans`}>
        <LanguageProvider>
          <HtmlLangWrapper>
            <SmoothScroll>
              <Preloader />
              <Navbar />
              <PageTransition>{children}</PageTransition>
              <Footer />
            </SmoothScroll>
          </HtmlLangWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
