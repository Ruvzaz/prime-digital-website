// src/lib/services.ts

export type Service = {
  id: number;
  nameTH: string;
  nameEN: string;
  shortTitleTH: string;
  shortTitleEN: string;
  descriptionTH: string;
  descriptionEN: string;
  detailsTH: string[];
  detailsEN: string[];
  targetTH: string;
  targetEN: string;
  icon: string;
};

// Helper function to get service content based on language
export function getServiceContent(service: Service, language: "th" | "en") {
  return {
    id: service.id,
    name: language === "th" ? service.nameTH : service.nameEN,
    shortTitle: language === "th" ? service.shortTitleTH : service.shortTitleEN,
    description: language === "th" ? service.descriptionTH : service.descriptionEN,
    details: language === "th" ? service.detailsTH : service.detailsEN,
    target: language === "th" ? service.targetTH : service.targetEN,
    icon: service.icon,
  };
}

export const SERVICES: Service[] = [
  {
    id: 1,
    nameTH: "ที่ปรึกษากลยุทธ์ดิจิทัลและการวางแผนงาน",
    nameEN: "Digital Strategy & Roadmap Consulting",
    shortTitleTH: "กลยุทธ์ดิจิทัล",
    shortTitleEN: "Digital Strategy & Roadmap",
    descriptionTH:
      "ช่วยให้องค์กรวางทิศทางด้านดิจิทัลแบบชัดเจน มองจากมุมธุรกิจจริง ไม่ใช่แค่ทำตามเทรนด์ พร้อมแผนดำเนินงานที่ทำได้จริงและนำไปใช้ได้ทันที",
    descriptionEN:
      "Help organizations define clear digital direction from a real business perspective, not just following trends. Deliver actionable plans that are practical and immediately implementable.",
    detailsTH: [
      "วิเคราะห์สถานการณ์จริงขององค์กร ปัญหา จุดแข็ง จุดอ่อน และข้อจำกัด (As-Is Assessment)",
      "กำหนดเป้าหมายด้านดิจิทัลและตัวชี้วัดความสำเร็จที่จับต้องได้ (Digital KPIs)",
      "จัดลำดับโครงการและสร้าง Roadmap ที่เห็นภาพชัด ว่าองค์กรควรเริ่มตรงไหน ทำอะไรในแต่ละเฟส",
    ],
    detailsEN: [
      "Analyze organization's current state, challenges, strengths, weaknesses, and constraints (As-Is Assessment)",
      "Define digital goals and tangible success metrics (Digital KPIs)",
      "Prioritize projects and create clear roadmaps showing where to start and what to do in each phase",
    ],
    targetTH: "ผู้บริหาร / ทีมวางแผน / หน่วยงานด้านยุทธศาสตร์",
    targetEN: "Executives / Planning Teams / Strategy Departments",
    icon: "🧭",
  },
  {
    id: 2,
    nameTH: "ออกแบบสถาปัตยกรรมระบบและ Backend",
    nameEN: "System Architecture & Backend Design",
    shortTitleTH: "สถาปัตยกรรมระบบ",
    shortTitleEN: "System Architecture & Backend",
    descriptionTH:
      "ช่วยออกแบบโครงสร้างระบบที่รองรับการเติบโต เชื่อมต่อบริการได้ง่าย และดูแลต่อได้ในระยะยาว โดยคงความเรียบง่ายและเข้าใจได้ชัดเจน",
    descriptionEN:
      "Design system structures that support growth, easy service integration, and long-term maintainability while keeping things simple and clearly understandable.",
    detailsTH: [
      "วางสถาปัตยกรรมระบบให้เหมาะกับงาน เช่น Microservices",
      "ออกแบบ API และฐานข้อมูลให้รองรับการขยายตัว และใช้งานง่ายสำหรับทีมพัฒนา",
      "ให้คำแนะนำด้าน DevOps, CI/CD และแนวทางการ Deploy ที่เหมาะกับแต่ละองค์กร",
    ],
    detailsEN: [
      "Design appropriate system architecture (e.g., Microservices) for specific needs",
      "Design APIs and databases that scale well and are developer-friendly",
      "Provide guidance on DevOps, CI/CD, and deployment strategies tailored to each organization",
    ],
    targetTH: "ทีมพัฒนา / ทีม IT / Vendor ที่ดูแลหรือพัฒนาระบบให้หน่วยงาน",
    targetEN: "Development Teams / IT Teams / Vendors managing or developing systems",
    icon: "🏗️",
  },
  {
    id: 3,
    nameTH: "แดชบอร์ดและโซลูชันด้านข้อมูล",
    nameEN: "Dashboard & Data Solutions",
    shortTitleTH: "โซลูชันด้านข้อมูล",
    shortTitleEN: "Dashboard & Data Solutions",
    descriptionTH:
      "ช่วยออกแบบตั้งแต่โครงสร้างข้อมูลไปจนถึงแดชบอร์ดสำหรับผู้บริหาร โดยเน้นการเล่าเรื่องผ่านข้อมูล (Data Storytelling)",
    descriptionEN:
      "Design everything from data structures to executive dashboards, focusing on data storytelling to communicate insights effectively.",
    detailsTH: [
      "ออกแบบโครงสร้างข้อมูลและ pipeline การดึงข้อมูล (ETL / ELT)",
      "ออกแบบแดชบอร์ดด้วยเครื่องมือ BI เช่น Power BI, Looker Studio",
      "ช่วยนิยาม KPI และตัวชี้วัดให้สอดคล้องกับเป้าหมายองค์กร",
    ],
    detailsEN: [
      "Design data structures and pipelines for data extraction (ETL / ELT)",
      "Design dashboards using BI tools like Power BI, Looker Studio",
      "Help define KPIs and metrics aligned with organizational goals",
    ],
    targetTH: "ผู้บริหาร / ทีมวิเคราะห์ข้อมูล / ทีมโครงการ",
    targetEN: "Executives / Data Analytics Teams / Project Teams",
    icon: "📊",
  },
];
