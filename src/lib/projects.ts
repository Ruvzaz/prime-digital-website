// ประกาศ type สำหรับ Project ให้ใช้ร่วมกันได้ทั้งเว็บ (รองรับ 2 ภาษา)
export type Project = {
  id: number;
  slug: string;
  imageSrc: string; // path รูปใน public เช่น "/portfolio-1.jpg"
  gallery?: string[]; // รูปภาพเพิ่มเติม
  year: string;
  
  // ข้อมูลที่มีทั้ง TH และ EN
  title_th: string;
  title_en: string;
  category_th: string;
  category_en: string;
  description_th: string;
  description_en: string;
  
  // สำหรับหน้า Detail (Optional)
  overview_th?: string;
  overview_en?: string;
  problem_th?: string;
  problem_en?: string;
  solution_th?: string;
  solution_en?: string;
  outcome_th?: string;
  outcome_en?: string;
};

// Helper function สำหรับดึงข้อมูลตามภาษา
export function getProjectContent(project: Project, lang: "th" | "en") {
  return {
    ...project,
    title: project[`title_${lang}`],
    category: project[`category_${lang}`],
    description: project[`description_${lang}`],
    overview: project[`overview_${lang}`],
    problem: project[`problem_${lang}`],
    solution: project[`solution_${lang}`],
    outcome: project[`outcome_${lang}`],
  };
}

// ประกาศรายการผลงาน
export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "digital-volunteer",
    year: "2025",
    imageSrc: "/images/project-1.jpg",
    
    title_th: "โครงการการพัฒนาเครือข่ายอาสาสมัครดิจิทัล (อสด.)",
    title_en: "Digital Volunteer Network Development Project",
    
    category_th: "Digital · Volunteer",
    category_en: "Digital · Volunteer",
    
    description_th: "ที่ปรึกษาโครงการพัฒนาเครือข่ายอาสาสมัครดิจิทัล (อสด.) เป็นการพัฒนาประชาชนที่มีจิตอาสาที่มีความสนใจด้านดิจิทัล เพื่อเป็นตัวแทนในการทำหน้าที่ช่วยเหลือ ให้คำแนะนำภารกิจที่สำคัญของกระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคมที่ดำเนินการในพื้นที่",
    description_en: "Consulting for the Digital Volunteer Network Development Project to develop citizens with volunteer spirit interested in digital technology, serving as representatives to assist and provide guidance on important missions of the Ministry of Digital Economy and Society operating in the area",
  },
  {
    id: 2,
    slug: "cyber-youth-camp",
    year: "2024",
    imageSrc: "/images/project-2.jpg",
    
    title_th: "กิจกรรมค่ายเยาวชนไซเบอร์ (Cyber Youth Camp)",
    title_en: "Cyber Youth Camp",
    
    category_th: "Cyber · Youth Camp",
    category_en: "Cyber · Youth Camp",
    
    description_th: "ออกแบบและจัดอบรม Cyber Youth Camp เป็นค่ายพัฒนาเยาวชนที่ออกแบบมาเพื่อสร้าง พลเมืองดิจิทัลที่เข้มแข็ง ผ่านประสบการณ์การเรียนรู้ด้านความปลอดภัยไซเบอร์ การรู้เท่าทันข้อมูล การคิดวิเคราะห์ และการใช้เทคโนโลยีอย่างสร้างสรรค์ โดย ผสานกิจกรรมเชิงปฏิบัติจริงกับสถานการณ์จำลอง เพื่อให้เยาวชนพร้อมเผชิญโลกออนไลน์ที่เปลี่ยนแปลงอย่างรวดเร็ว",
    description_en: "Designed and conducted Cyber Youth Camp to build 'strong digital citizens' through learning experiences in cybersecurity, media literacy, critical thinking, and creative technology use, combining hands-on activities with simulated scenarios to prepare youth for the rapidly changing online world",
  },
  {
    id: 3,
    slug: "mildl-digital-literacy",
    year: "2025",
    imageSrc: "/images/project-3.jpg",
    
    title_th: "กิจกรรมยกระดับสมรรถนะประชากรเพื่อให้พร้อมเข้าสู่การเป็นพลเมืองดิจิทัล",
    title_en: "Population Capacity Building for Digital Citizenship",
    
    category_th: "MILDL · Digital Literacy",
    category_en: "MILDL · Digital Literacy",
    
    description_th: "ออกแบบและจัดอบรมเพื่อให้ความรู้และทักษะที่จำเป็นในการใช้ชีวิตในโลกดิจิทัลอย่างปลอดภัยและชาญฉลาด โดยเน้นที่การสร้างพลเมืองดิจิทัลที่มีความสามารถในการรับมือกับความท้าทายและคว้าโอกาสในยุคดิจิทัล",
    description_en: "Designed and conducted training to provide essential knowledge and skills for living safely and wisely in the digital world, focusing on creating digital citizens capable of handling challenges and seizing opportunities in the digital age",
  },
  {
    id: 4,
    slug: "sinofarm-vaccination-registration",
    year: "2021",
    imageSrc: "/images/project-4 (5).jpg",
    
    title_th: "ข้อมูลระบบลงทะเบียนฉีดวัคซีน ซิโนฟาร์ม องค์การบริหารส่วนจังหวัดสมุทรปราการ",
    title_en: "Sinofarm Vaccination Registration System - Samut Prakan Provincial Administrative Organization",
    
    category_th: "Visualization · Dashboard",
    category_en: "Visualization · Dashboard",
    
    description_th: "ออกแบบระบบลงทะเบียนฉีดวัคซีนซิโนฟาร์ม ขององค์การบริหารส่วนจังหวัดสมุทรปราการ เป็นระบบดิจิทัลที่จัดทำขึ้นเพื่อรองรับการลงทะเบียน การคัดกรอง และการบริหารจัดการข้อมูลผู้ประสงค์รับวัคซีน ภายใต้การดำเนินงานเชิงรุกเพื่อเพิ่มประสิทธิภาพการบริการสุขภาพให้แก่ประชาชน พร้อมทั้งเพิ่มความโปร่งใส ลดความซ้ำซ้อน และรองรับปริมาณผู้ใช้ในระดับสูง",
    description_en: "Designed Sinofarm vaccination registration system for Samut Prakan PAO - a digital system to support registration, screening, and data management of vaccine applicants under proactive operations to enhance public health services, increase transparency, reduce redundancy, and accommodate high user volumes",
  },
  {
    id: 5,
    slug: "mildl-dashboard-2568",
    year: "2025",
    imageSrc: "/images/project-5.jpg",
    
    title_th: "ข้อมูลสถานภาพการรู้เท่าทันสื่อสารสนเทศ และการเข้าใจดิจิทัล ประจำปี พ.ศ. 2568",
    title_en: "Media and Information Literacy and Digital Understanding Status Report 2025",
    
    category_th: "Visualization · Dashboard",
    category_en: "Visualization · Dashboard",
    
    description_th: "ออกแบบรายงาน สถานภาพการรู้เท่าทันสื่อสารสนเทศและการเข้าใจดิจิทัล 2568 นำเสนอภาพรวมระดับทักษะดิจิทัลของประชาชนไทย ทั้งด้านการวิเคราะห์ข้อมูล การตรวจสอบข่าวสาร ความปลอดภัยไซเบอร์ และการใช้เทคโนโลยีอย่างรับผิดชอบ เพื่อสะท้อนสถานการณ์จริงและเป็นแนวทางพัฒนาศักยภาพประชาชนในยุคดิจิทัล",
    description_en: "Designed 'Media and Information Literacy and Digital Understanding Status Report 2025' presenting an overview of Thai citizens' digital skill levels in data analysis, news verification, cybersecurity, and responsible technology use to reflect the real situation and guide capacity development in the digital age",
  },
];
