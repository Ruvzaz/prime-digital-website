import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา | About Us",
  description:
    "รู้จัก Prime Digital Consultant Co., Ltd. พาร์ตเนอร์ที่ปรึกษาด้านดิจิทัล ออกแบบระบบ วางกลยุทธ์ และพัฒนาองค์กรอย่างยั่งยืน",
};

export default function AboutPage() {
  return <AboutContent />;
}
