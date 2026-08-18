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
  title: {
    default: "Prime Digital Consultant – ที่ปรึกษาด้านดิจิทัล ออกแบบกลยุทธ์และระบบ",
    template: "%s | Prime Digital Consultant",
  },
  description:
    "เราโฟกัสช่วยองค์กรออกแบบและพัฒนาระบบดิจิทัลที่ซับซ้อน ทั้งกลยุทธ์ สถาปัตยกรรมระบบ Cloud & Backend และ Data-Driven Decision Making",
  keywords: [
    "Prime Digital Consultant",
    "Digital Transformation",
    "System Architecture",
    "Digital Strategy",
    "Cyber Security",
    "Cloud Solutions",
    "Data Analytics",
    "ที่ปรึกษาด้านดิจิทัล",
    "พัฒนาระบบองค์กร",
  ],
  authors: [{ name: "Prime Digital Consultant Co., Ltd." }],
  creator: "Prime Digital Consultant Co., Ltd.",
  metadataBase: new URL("https://primedigital.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    alternateLocale: "en_US",
    url: "https://primedigital.co",
    title: "Prime Digital Consultant – ที่ปรึกษาด้านดิจิทัล ออกแบบกลยุทธ์และระบบ",
    description:
      "เราโฟกัสช่วยองค์กรออกแบบและพัฒนาระบบดิจิทัลที่ซับซ้อน ทั้งกลยุทธ์ สถาปัตยกรรมระบบ และ Data Insights",
    siteName: "Prime Digital Consultant",
    images: [
      {
        url: "/images/project-1.jpg",
        width: 1200,
        height: 630,
        alt: "Prime Digital Consultant Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Digital Consultant – ที่ปรึกษาด้านดิจิทัล ออกแบบกลยุทธ์และระบบ",
    description:
      "บริการที่ปรึกษาการแปลงผ่านสู่ดิจิทัล ออกแบบสถาปัตยกรรมระบบ และ Data-Driven Dashboard",
    images: ["/images/project-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Prime Digital Consultant Co., Ltd.",
  url: "https://primedigital.co",
  logo: "https://primedigital.co/images/agencyLogo/Alogo1.png",
  description:
    "ที่ปรึกษาด้านดิจิทัลระดับมืออาชีพ มุ่งออกแบบกลยุทธ์ สถาปัตยกรรมระบบ และแดชบอร์ดเชิงลึกสำหรับองค์กร",
  address: {
    "@type": "PostalAddress",
    addressCountry: "TH",
  },
  serviceType: [
    "Digital Transformation",
    "System Architecture Design",
    "Cloud & Backend Architecture",
    "Data Analytics & Dashboard",
    "Cyber Security Training",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
