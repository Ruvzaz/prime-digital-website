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
  scopeOfWork_th?: string[];
  scopeOfWork_en?: string[];
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
    scopeOfWork: project[`scopeOfWork_${lang}`],
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
    overview_th: "โครงการยุทธศาสตร์เพื่อสร้างและพัฒนา 'อาสาสมัครดิจิทัล' (อสด.) ให้เป็นกลไกหลักในการขับเคลื่อนสังคมดิจิทัลระดับฐานราก โดยบริษัทรับผิดชอบการบริหารจัดการโครงการแบบครบวงจร (End-to-End) ตั้งแต่การพัฒนาแพลตฟอร์มดิจิทัล (Web & App) การออกแบบหลักสูตรและจัดอบรมเชิงปฏิบัติการใน 4 ภูมิภาค ไปจนถึงการติดตามผลการขยายความรู้สู่ประชาชนในชุมชนกว่า 6,000 ราย",
    overview_en: "A strategic initiative to empower 'Digital Volunteers' (TDV) as key drivers of Thailand's grassroots digital society. We provided end-to-end project management, encompassing digital platform enhancement (Web & App), curriculum design, regional intensive training camps, and monitoring the downstream impact of knowledge transfer to over 6,000 citizens.",
    scopeOfWork_th: [
      "พัฒนาและปรับปรุงเว็บไซต์และแอปพลิเคชัน (TDV) เชื่อมต่อระบบ API และดูแลระบบความปลอดภัยข้อมูล",
      "ออกแบบหลักสูตร Digital Literacy และจัดทำแผนการอบรมรวมกว่า 18 ชั่วโมง",
      "จัดอบรมเชิงปฏิบัติการ (3 วัน 2 คืน) ใน 4 ภูมิภาค สำหรับอาสาสมัครกว่า 320 คน พร้อมระบบถ่ายทอดสด",
      "บริหารจัดการโลจิสติกส์ ที่พัก การเดินทาง และของที่ระลึกสำหรับขยายผลกว่า 6,720 ชิ้น",
      "ติดตามและประเมินผล (Monitoring & Evaluation) การขยายผลความรู้จากอาสาสมัครสู่ประชาชนในอัตราส่วน 1:20"
    ],
    scopeOfWork_en: [
      "Development and optimization of the TDV Website and Mobile Application, including API integration and data security maintenance.",
      "Design of Digital Literacy curriculum and training roadmap (18+ hours).",
      "Organization of regional training camps (3 Days 2 Nights) across 4 regions for 320+ volunteers with live streaming setup.",
      "Logistics management covering accommodation, travel, and distribution of 6,720+ implementation kits.",
      "Monitoring and Evaluation (M&E) of the knowledge expansion from volunteers to the public at a 1:20 ratio."
    ],
    problem_th: "การขับเคลื่อนดิจิทัลระดับประเทศมักประสบปัญหา 'ช่องว่าง' ระหว่างนโยบายกับการปฏิบัติจริงในพื้นที่ชุมชน ขาดบุคลากรที่มีความพร้อมในการถ่ายทอดความรู้ และขาดเครื่องมือ (Tools) ที่ทันสมัยในการบริหารจัดการอาสาสมัคร ทำให้การเข้าถึงบริการดิจิทัลของรัฐยังไม่ครอบคลุมทุกพื้นที่",
    problem_en: "National digital transformation often faces a 'gap' between policy and ground-level implementation. Challenges included a shortage of capable personnel to transfer digital knowledge locally and a lack of modern tools to manage volunteer networks effectively, resulting in uneven access to government digital services.",
    solution_th: "เราใช้แนวทาง 'Tech + Touch' ในการแก้ปัญหา: 1) Tech: ยกระดับแอปพลิเคชัน อสด. ให้ใช้งานง่ายและเชื่อมโยงข้อมูลได้จริง 2) Touch: จัดค่ายอบรมเข้มข้น 4 ภาค สร้าง 'Train the Trainer' ที่มีความรู้จริง และ 3) Mechanism: สร้างระบบติดตามผลการขยายความรู้แบบ Multi-tier (จากวิทยากร -> อสด. -> ประชาชน) เพื่อให้มั่นใจว่าเกิดผลลัพธ์จริง",
    solution_en: "We implemented a 'Tech + Touch' approach: 1) Tech: Upgraded the TDV application for better usability and seamless data integration. 2) Touch: Organized intensive regional training camps to produce capable 'Trainers'. 3) Mechanism: Established a multi-tier monitoring system (Experts -> Volunteers -> Public) to ensure tangible knowledge transfer outcomes.",
    outcome_th: "ประสบความสำเร็จในการสร้างแกนนำอาสาสมัครดิจิทัลกว่า 320 คนที่มีศักยภาพสูง พร้อมด้วยเครื่องมือแอปพลิเคชันที่เสถียร สามารถนำความรู้ไปขยายผลสอนต่อให้กับประชาชนในพื้นที่ได้จริงตามเป้าหมายกว่า 6,400 ราย เกิดเป็นเครือข่ายความร่วมมือที่เข้มแข็งในการลดความเหลื่อมล้ำทางดิจิทัล",
    outcome_en: "Successfully empowered over 320 high-potential Digital Volunteer leaders equipped with stable digital tools. These volunteers effectively expanded their reach, transferring digital skills to over 6,400 citizens in local communities, thereby establishing a strong collaborative network to bridge the digital divide.",
    gallery: [
      "/images/projects/CCT/CCT1.jpg",
      "/images/projects/CCT/CCT2.jpg",
      "/images/projects/CCT/CCT3.jpg",
      "/images/projects/CCT/CCT4.jpg",
      "/images/projects/CCT/CCT5.jpg",
    ],
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
    overview_th: "โครงการพัฒนาศักยภาพเยาวชนด้านความมั่นคงปลอดภัยไซเบอร์ (Cyber Youth Camp) ภายใต้การกำกับดูแลของสำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (สกมช.) เพื่อสร้างบุคลากรไซเบอร์รุ่นใหม่ที่มีทักษะตามมาตรฐานสากล ผ่านกระบวนการคัดกรองเข้มข้นและการอบรมเชิงปฏิบัติการแบบเจาะลึก",

    overview_en: "The 'Cyber Youth Camp' initiative, commissioned by the National Cyber Security Agency (NCSA), aims to cultivate a new generation of cybersecurity talent equipped with international-standard skills. The project involves a rigorous screening process followed by intensive, hands-on training workshops.",

    scopeOfWork_th: [
      "วิเคราะห์และจัดทำหลักสูตร Cybersecurity ร่วมกับผู้เชี่ยวชาญ พร้อมสื่อการสอน (e-Book/Infographic) มาตรฐานวิชาการ",
      "จัดกิจกรรมอบรมออนไลน์ (Online Workshop) เชิงโต้ตอบ เพื่อคัดเลือกผู้เข้าร่วมกิจกรรม",
      "บริหารจัดการค่ายอบรม (On-site Camp) 2 รุ่น รุ่นละ 3 วัน (รวม 18 ชั่วโมง) พร้อมอุปกรณ์คอมพิวเตอร์และระบบเครือข่าย",
      "ดูแลด้านโลจิสติกส์ครบวงจร (อาหาร, ที่พัก, การเดินทาง) และมาตรการความปลอดภัย",
      "จัดทำสื่อประชาสัมพันธ์, บันทึกภาพกิจกรรม, Video สรุปผล และรายงานประเมินผลโครงการ (Pre/Post-test)"
    ],

    scopeOfWork_en: [
      "Development of a standardized Cybersecurity curriculum and learning materials (e-Books/Infographics) in collaboration with industry experts.",
      "Organization of interactive Online Workshops for participant screening and selection.",
      "Full management of On-site Intensive Camps (2 batches, 3 days each) equipped with necessary IT infrastructure.",
      "End-to-end logistics management (Catering, Accommodation, Transportation) and safety protocols.",
      "Production of PR materials, event documentation, summary videos, and comprehensive performance reports (Pre/Post-test analysis)."
    ],

    problem_th: "ภัยคุกคามทางไซเบอร์ทวีความรุนแรงและซับซ้อน ส่งผลกระทบต่อความมั่นคงของชาติและเศรษฐกิจ ในขณะที่ประเทศไทยยังประสบปัญหาขาดแคลนบุคลากรที่มีความเชี่ยวชาญเฉพาะด้าน และเยาวชนยังขาด 'ภูมิคุ้มกัน' ในการรับมือกับความเสี่ยงบนโลกออนไลน์",

    problem_en: "Cyber threats are becoming increasingly severe and complex, impacting national security and the economy. Meanwhile, Thailand faces a critical shortage of skilled cybersecurity professionals, and the youth population lacks the necessary 'digital immunity' to navigate online risks effectively.",

    solution_th: "ออกแบบกระบวนการเรียนรู้แบบ Hybrid Learning: เริ่มต้นด้วยการคัดกรองผ่าน Online Workshop ที่วัดผลได้จริง และต่อยอดด้วย 'Intensive Camp' ที่เน้นการลงมือทำ (Simulation & Practice) ภายใต้การดูแลของวิทยากรผู้เชี่ยวชาญและหลักสูตรที่ผ่านการรับรองจากคณะทำงาน เพื่อให้มั่นใจว่าผู้เรียนได้ทักษะที่นำไปใช้ได้จริง",

    solution_en: "Implemented a Hybrid Learning approach: Starting with a measurable Online Workshop for screening, followed by an 'Intensive Camp' focused on Simulation & Practice. The program is guided by certified experts and a validated curriculum to ensure practical skill acquisition.",

    outcome_th: "สามารถผลิตเยาวชนที่มีทักษะความมั่นคงปลอดภัยไซเบอร์จำนวน 2 รุ่น (รวมกว่า 100 คน) ที่ผ่านการทดสอบสมรรถนะตามเกณฑ์ ได้รับสื่อการเรียนรู้คุณภาพสูง (หนังสือกว่า 100 หน้า) และเกิดเครือข่ายเยาวชนไซเบอร์ที่พร้อมเป็นกำลังสำคัญให้กับประเทศในอนาคต",

    outcome_en: "Successfully empowered two batches of youth (over 100 participants) with verified cybersecurity competencies. Deliverables included high-quality learning resources (100+ page guidebooks) and the establishment of a strong youth cyber network ready to support the nation's digital future.",
    gallery: [
      "/images/projects/CYC/CYC1.jpg",
      "/images/projects/CYC/CYC2.jpg",
      "/images/projects/CYC/CYC3.jpg",
      "/images/projects/CYC/CYC4.jpg",
      "/images/projects/CYC/CYC5.jpg",
      "/images/projects/CYC/CYC6.jpg",
    ],
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
    overview_th: "โครงการยุทธศาสตร์ระดับชาติเพื่อเตรียมความพร้อมคนไทยสู่การเป็น 'พลเมืองดิจิทัล' (Digital Citizenship) โดยการดำเนินงานครอบคลุมตั้งแต่การวิจัยและพัฒนาหลักสูตร การพัฒนาระบบวัดระดับสมรรถนะดิจิทัล (Digital Literacy Assessment System) ที่แสดงผลแบบ Real-time การจัดอบรมแบบ Hybrid (On-site & Online) ให้กับกลุ่มเป้าหมายกว่า 5,000 คนทั่วประเทศ รวมถึงการศึกษาดูงานต่างประเทศเพื่อนำมาวางกรอบนโยบาย",

    overview_en: "A national strategic initiative to prepare the Thai population for 'Digital Citizenship.' The project encompasses end-to-end execution, including research and curriculum development, the implementation of a Real-time Digital Literacy Assessment System, hybrid training (On-site & Online) for over 5,000 participants nationwide, and international study trips to formulate policy frameworks.",

    scopeOfWork_th: [
      "พัฒนาระบบวัดระดับสมรรถนะ (Digital Literacy) และ Dashboard แสดงผล Real-time เชื่อมต่อผ่าน KONG API Gateway",
      "วิเคราะห์และจัดทำหลักสูตรทักษะแห่งอนาคต (Future Skills) ที่เหมาะสมกับกลุ่มเป้าหมายเฉพาะ (ผู้สูงอายุ, เยาวชน, กลุ่ม NEET, คนพิการ)",
      "บริหารจัดการอบรม On-site (1,500 คน) และ Online Live Streaming (3,500 คน) กระจายสู่ศูนย์ดิจิทัลชุมชน 4 ภูมิภาค",
      "จัดประชุมศึกษาดูงานทั้งในและต่างประเทศ (เช่น เกาหลีใต้) เพื่อถอดบทเรียนและปรับปรุงกรอบสมรรถนะดิจิทัลของไทย",
      "ผลิตสื่อประชาสัมพันธ์ กิจกรรมตอบคำถามออนไลน์ และจัดหาของที่ระลึกกว่า 2,000 ชิ้น เพื่อกระตุ้นการมีส่วนร่วม",
      "จัดทำข้อสอบวัดระดับสมรรถนะ 2 ชุด และรายงานสรุปผลการทดสอบเชิงสถิติจากกลุ่มตัวอย่าง 5,000 ราย"
    ],

    scopeOfWork_en: [
      "Development of a Digital Literacy Assessment System and Real-time Dashboard, integrated via KONG API Gateway.",
      "Analysis and design of 'Future Skills' curricula tailored for specific target groups (Elderly, Youth, NEETs, PWDs).",
      "Management of On-site training (1,500 pax) and Online Live Streaming (3,500 pax) distributed to Digital Community Centers across 4 regions.",
      "Organization of domestic and international study trips (e.g., South Korea) to benchmark and refine Thailand's digital competency framework.",
      "Production of PR materials, online engagement activities, and procurement of 2,000+ incentive items.",
      "Creation of 2 standardized assessment sets and statistical reporting on test results from 5,000 participants."
    ],

    problem_th: "พฤติกรรมการเสพสื่อที่เปลี่ยนแปลงไปและการแพร่ระบาดของข่าวปลอม (Fake News) ส่งผลกระทบต่อสังคม ในขณะที่ประชากรกลุ่มเปราะบาง (เช่น ผู้สูงอายุ ผู้ด้อยโอกาส) ยังขาดทักษะการรู้เท่าทันสื่อและดิจิทัล (Digital Literacy) อีกทั้งเครื่องมือวัดระดับสมรรถนะเดิมยังไม่ครอบคลุมบริบททักษะแห่งอนาคต",

    problem_en: "Shifting media consumption habits and the spread of Fake News pose social challenges. Meanwhile, vulnerable groups (e.g., the elderly, the underprivileged) lack essential Media and Information Literacy (MIL). Furthermore, existing assessment tools fail to cover the context of Future Skills required for the digital era.",

    solution_th: "ใช้กลยุทธ์ 'Targeted Digital Empowerment': 1) พัฒนาหลักสูตรที่ 'Customized' ให้เข้ากับบริบทของแต่ละกลุ่มวัย 2) สร้างระบบวัดผลที่ทันสมัย (Modernized Assessment) บน Cloud ภาครัฐ 3) ใช้ศูนย์ดิจิทัลชุมชนเป็นฐานในการกระจายความรู้ผ่านระบบ Conference เพื่อให้เข้าถึงกลุ่มเป้าหมายในพื้นที่ห่างไกลได้อย่างทั่วถึง",

    solution_en: "Deployed a 'Targeted Digital Empowerment' strategy: 1) Developed 'Customized' curricula suited to specific age groups/contexts. 2) Built a Modernized Assessment system on the Government Cloud. 3) Leveraged Digital Community Centers as hubs to disseminate knowledge via conference systems, ensuring reach to remote areas.",

    outcome_th: "ยกระดับทักษะดิจิทัลให้กับประชาชนกลุ่มเป้าหมายครบ 5,000 รายตามสัญญา มีระบบฐานข้อมูลและ Dashboard ที่ใช้งานได้จริงสำหรับการกำหนดนโยบาย พร้อมทั้งได้กรอบสมรรถนะดิจิทัลฉบับใหม่ที่ผ่านการเทียบเคียงมาตรฐานสากลจากการศึกษาดูงานต่างประเทศ",

    outcome_en: "Successfully elevated digital skills for the full target of 5,000 citizens. Delivered a functional database and Dashboard for policy-making, along with a revised Digital Competency Framework benchmarked against international standards through strategic study trips.",
    gallery: [
      "/images/projects/MIL/MIL1.jpg",
      "/images/projects/MIL/MIL2.jpg",
      "/images/projects/MIL/MIL3.jpg",
      "/images/projects/MIL/MIL4.jpg",
      "/images/projects/MIL/MIL5.jpg",
      "/images/projects/MIL/MIL6.jpg",
    ],
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
