import type { Metadata } from "next";
import { PortfolioContent } from "./PortfolioContent";

export const metadata: Metadata = {
  title: "แฟ้มผลงาน | Portfolio",
  description:
    "รวมตัวอย่างผลงานการออกแบบสถาปัตยกรรมระบบ พัฒนา Backend, Mobile/Web Application และแดชบอร์ดข้อมูล โดย Prime Digital Consultant",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
