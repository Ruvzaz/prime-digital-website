// ประกาศ type สำหรับ Project ให้ใช้ร่วมกันได้ทั้งเว็บ
export type Project = {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  imageSrc: string; // path รูปใน public เช่น "/portfolio-1.jpg"
};

// ประกาศรายการผลงาน (คุณสามารถแก้/เพิ่มได้เองภายหลัง)
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ระบบ Dashboard ติดตามโครงการภาครัฐ",
    category: "GovTech · Data Dashboard",
    year: "2025",
    description:
      "ออกแบบสถาปัตยกรรมข้อมูลและแดชบอร์ดให้ผู้บริหารเห็นภาพรวมการดำเนินโครงการและตัวชี้วัดได้แบบเรียลไทม์.",
    imageSrc: "/project1.jpg",
  },
  {
    id: 2,
    title: "แพลตฟอร์ม Digital Onboarding สำหรับองค์กรการเงิน",
    category: "FinTech · Backend Platform",
    year: "2024",
    description:
      "ออกแบบ backend และ workflow ระบบ onboarding ลูกค้าแบบดิจิทัล ลดเวลาการอนุมัติและขั้นตอนงานเอกสาร.",
    imageSrc: "/project1.jpg",
  },
  {
    id: 3,
    title: "ระบบบริหารจัดการข้อมูลด้านการศึกษาและการฝึกอบรม",
    category: "EduTech · Data Platform",
    year: "2023",
    description:
      "ออกแบบระบบจัดเก็บข้อมูลและแดชบอร์ดสำหรับติดตามผลการฝึกอบรม ทักษะดิจิทัล และตัวชี้วัดเชิงนโยบาย.",
    imageSrc: "/project1.jpg",
  },
  {
    id: 4,
    title: "ระบบบริหารจัดการข้อมูลด้านการศึกษาและการฝึกอบรม",
    category: "EduTech · Data Platform",
    year: "2023",
    description:
      "ออกแบบระบบจัดเก็บข้อมูลและแดชบอร์ดสำหรับติดตามผลการฝึกอบรม ทักษะดิจิทัล และตัวชี้วัดเชิงนโยบาย.",
    imageSrc: "/project1.jpg",
  },
  {
    id: 5,
    title: "ระบบบริหารจัดการข้อมูลด้านการศึกษาและการฝึกอบรม",
    category: "EduTech · Data Platform",
    year: "2023",
    description:
      "ออกแบบระบบจัดเก็บข้อมูลและแดชบอร์ดสำหรับติดตามผลการฝึกอบรม ทักษะดิจิทัล และตัวชี้วัดเชิงนโยบาย.",
    imageSrc: "/project1.jpg",
  },
  {
    id: 6,
    title: "ระบบบริหารจัดการข้อมูลด้านการศึกษาและการฝึกอบรม",
    category: "EduTech · Data Platform",
    year: "2023",
    description:
      "ออกแบบระบบจัดเก็บข้อมูลและแดชบอร์ดสำหรับติดตามผลการฝึกอบรม ทักษะดิจิทัล และตัวชี้วัดเชิงนโยบาย.",
    imageSrc: "/project1.jpg",
  },
  {
    id: 7,
    title: "ระบบบริหารจัดการข้อมูลด้านการศึกษาและการฝึกอบรม",
    category: "EduTech · Data Platform",
    year: "2023",
    description:
      "ออกแบบระบบจัดเก็บข้อมูลและแดชบอร์ดสำหรับติดตามผลการฝึกอบรม ทักษะดิจิทัล และตัวชี้วัดเชิงนโยบาย.",
    imageSrc: "/project1.jpg",
  },
];
