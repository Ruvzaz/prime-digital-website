// src/lib/services.ts

export type Service = {
  id: number;
  name: string;
  shortTitle: string;    // ชื่อสั้น ๆ ที่โชว์บน card
  description: string;   // อธิบายแบบย่อ
  details: string[];     // bullet รายละเอียดเสริม
  target: string;        // กลุ่มเป้าหมายหลัก
};

// คุณปรับเนื้อหาตามงานจริงของบริษัทได้เลย
export const SERVICES: Service[] = [
  {
    id: 1,
    name: "ที่ปรึกษากลยุทธ์ดิจิทัลและแผนทรานส์ฟอร์ม",
    shortTitle: "Digital Strategy & Roadmap",
    description:
      "ช่วยองค์กรกำหนดทิศทางด้านดิจิทัลจากมุมธุรกิจ ไม่ใช่แค่เลือกเทคโนโลยีตามเทรนด์ พร้อมแผนลงมือทำที่เป็นไปได้จริง.",
    details: [
      "สำรวจสภาพแวดล้อม ปัญหา และข้อจำกัดขององค์กร (As-Is Assessment)",
      "กำหนดเป้าหมายด้านดิจิทัลและตัวชี้วัดความสำเร็จ (Digital KPIs)",
      "จัดทำ Roadmap โครงการดิจิทัลเป็นลำดับเฟสการดำเนินงาน",
    ],
    target: "ผู้บริหาร / ทีมวางแผน / หน่วยงานด้านยุทธศาสตร์",
  },
  {
    id: 2,
    name: "ออกแบบสถาปัตยกรรมระบบและ Backend",
    shortTitle: "System Architecture & Backend",
    description:
      "ออกแบบภาพรวมระบบให้รองรับการเติบโต การเชื่อมต่อบริการ และการดูแลระยะยาว โดยเน้นความเรียบง่ายและชัดเจน.",
    details: [
      "ออกแบบสถาปัตยกรรมระบบเชิงบริการ (Microservices / Modular Monolith)",
      "ออกแบบ API และโครงสร้างฐานข้อมูลให้รองรับการขยายตัว",
      "คำแนะนำด้าน DevOps, CI/CD และสภาพแวดล้อมการ Deploy",
    ],
    target: "ทีมพัฒนา / ทีม IT / Vendor ที่ทำระบบให้หน่วยงาน",
  },
  {
    id: 3,
    name: "แดชบอร์ดและโซลูชันด้านข้อมูล",
    shortTitle: "Dashboard & Data Solutions",
    description:
      "ช่วยออกแบบตั้งแต่โครงสร้างข้อมูลไปจนถึงแดชบอร์ดสำหรับผู้บริหาร โดยเน้นการเล่าเรื่องผ่านข้อมูล (Data Storytelling).",
    details: [
      "ออกแบบโครงสร้างข้อมูลและ pipeline การดึงข้อมูล (ETL / ELT)",
      "ออกแบบแดชบอร์ดด้วยเครื่องมือ BI เช่น Power BI, Looker Studio",
      "ช่วยนิยาม KPI และตัวชี้วัดให้สอดคล้องกับเป้าหมายองค์กร",
    ],
    target: "ผู้บริหาร / ทีมวิเคราะห์ข้อมูล / ทีมโครงการ",
  },
];
