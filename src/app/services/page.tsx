import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "บริการของเรา | Services",
  description:
    "บริการวางกลยุทธ์ดิจิทัล ออกแบบสถาปัตยกรรมระบบ Cloud & Backend และพัฒนา Executive Data Dashboard",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
