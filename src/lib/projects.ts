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
  {
    id: 6,
    slug: "nso-digital-province",
    year: "2024",
    imageSrc: "/images/project-6.jpg",

    title_th: "โครงการขับเคลื่อนสถิติและดิจิทัลจังหวัด ระยะที่ 1",
    title_en: "Provincial Statistics and Digital Drive Project, Phase 1",

    category_th: "Statistics · Digital Literacy",
    category_en: "Statistics · Digital Literacy",

    description_th: "โครงการที่ปรึกษาเพื่อการเปลี่ยนผ่านองค์กร (Organizational Transformation) มุ่งยกระดับสำนักงานสถิติจังหวัดสู่การเป็น 'ศูนย์กลางข้อมูลและดิจิทัลระดับภูมิภาค' เราทำงานร่วมกับภาครัฐในการวิเคราะห์ช่องว่างสมรรถนะ (Gap Analysis) และวางรากฐานโครงสร้างพื้นฐานใหม่ เพื่อเตรียมความพร้อมให้ข้าราชการท้องถิ่นสามารถขับเคลื่อนนโยบายรัฐบาลดิจิทัลได้อย่างมีประสิทธิภาพสูงสุด",
    description_en: "A strategic organizational transformation consultancy project aimed at elevating Provincial Statistical Offices into 'Regional Data and Digital Hubs.' We collaborated with the government to conduct comprehensive Gap Analysis and lay new infrastructural foundations, ensuring local officials are fully equipped to drive digital government policies effectively.",
    overview_th: "โครงการที่ปรึกษาเพื่อขับเคลื่อนการเปลี่ยนแปลงองค์กร (Change Management) ของสำนักงานสถิติแห่งชาติ โดยมุ่งเน้นการยกระดับบทบาทจาก 'สถิติจังหวัด' สู่ 'สถิติและดิจิทัลจังหวัด' ผ่านการจัดทำกรอบสมรรถนะ (Competency Framework) ใหม่ การประเมินความพร้อมโครงสร้างพื้นฐานทั่วประเทศ และการพัฒนาทักษะบุคลากรในพื้นที่นำร่อง เพื่อให้พร้อมเป็นกลไกหลักในการขับเคลื่อนรัฐบาลดิจิทัลในระดับภูมิภาค",

    overview_en: "A strategic Change Management consultancy project for the National Statistical Office (NSO), aimed at transforming 'Provincial Statistical Offices' into 'Provincial Statistics and Digital Offices.' The project involves developing a new Competency Framework, assessing nationwide digital infrastructure, and conducting intensive capacity building in pilot provinces to establish them as key drivers of regional digital government.",

    scopeOfWork_th: [
      "วิเคราะห์และจัดทำกรอบสมรรถนะ (Competency Framework) ด้านสถิติและดิจิทัล พร้อมเครื่องมือประเมินช่องว่างสมรรถนะ (Gap Analysis) ในรูปแบบออนไลน์",
      "ประเมินสถานการณ์โครงสร้างพื้นฐานดิจิทัล (Digital Infrastructure) ของสำนักงานสถิติจังหวัดครบทั้ง 76 จังหวัด",
      "ออกแบบหลักสูตรพัฒนาทักษะกว่า 10 หลักสูตร และผลิตสื่อ e-Learning (Video Clip) จำนวน 30 บทเรียน ความยาวรวมไม่น้อยกว่า 150 นาที",
      "จัดอบรมผสมผสาน: Online สำหรับ 76 จังหวัด และ On-site Workshop เชิงปฏิบัติการเข้มข้นสำหรับ 18 จังหวัดนำร่อง",
      "ลงพื้นที่สังเกตการณ์และให้คำปรึกษา (On-site Consulting) ใน 18 จังหวัดนำร่อง เพื่อจัดทำแผนพัฒนาองค์กรระดับจังหวัดรายพื้นที่",
      "จัดทำ (ร่าง) แผนพัฒนาองค์กรสถิติและดิจิทัลระดับจังหวัด เพื่อเป็นต้นแบบในการขยายผลระยะต่อไป"
    ],

    scopeOfWork_en: [
      "Development of a Statistics & Digital Competency Framework and an online Gap Analysis assessment tool.",
      "Assessment of Digital Infrastructure readiness across all 76 provincial statistical offices.",
      "Design of 10+ training curricula and production of e-Learning materials (30 video lessons, totaling 150+ minutes).",
      "Hybrid Training Delivery: Online sessions for 76 provinces and intensive On-site Workshops for 18 pilot provinces.",
      "On-site Consulting and observation in 18 pilot provinces to formulate localized organizational development plans.",
      "Drafting of the Strategic Plan for Provincial Statistics and Digital Organization Development to serve as a blueprint for future expansion."
    ],

    problem_th: "ตามนโยบายกระทรวงดิจิทัลฯ ที่ต้องการให้สำนักงานสถิติจังหวัดเพิ่มบทบาทเป็นผู้นำด้านดิจิทัลในระดับภูมิภาค (One Roof Policy) แต่บุคลากรเดิมยังขาดทักษะที่จำเป็น (Competency Gap) และยังไม่มีกรอบมาตรฐานที่ชัดเจนในการประเมินความพร้อมหรือแนวทางในการปรับเปลี่ยนองค์กรให้สอดคล้องกับบริบทใหม่",

    problem_en: "Following the 'One Roof Policy,' Provincial Statistical Offices are mandated to lead regional digital transformation. However, existing personnel lack the necessary digital competencies, and there is no established framework to assess readiness or guide the organizational restructuring required for this new mandate.",

    solution_th: "ใช้กระบวนการ 'Assess - Design - Implement': 1) Assess: ประเมิน Gap ของคนและโครงสร้างพื้นฐานด้วยเครื่องมือดิจิทัล 2) Design: ออกแบบหลักสูตร Re-skill/Up-skill ที่ตรงจุด 3) Implement: จัด Workshop นำร่องเพื่อสร้าง 'Change Agents' ใน 18 จังหวัด และลงพื้นที่ประกบเพื่อทำแผนพัฒนาเฉพาะจังหวัด (Provincial Roadmap)",

    solution_en: "Deployed an 'Assess - Design - Implement' methodology: 1) Assess: Evaluated personnel and infrastructure gaps using digital tools. 2) Design: Created targeted Re-skill/Up-skill curricula. 3) Implement: Conducted pilot workshops to cultivate 'Change Agents' in 18 provinces, followed by on-site consulting to develop specific Provincial Roadmaps.",

    outcome_th: "ได้ต้นแบบกรอบสมรรถนะและแผนพัฒนาองค์กรที่ชัดเจน บุคลากรใน 18 จังหวัดนำร่องได้รับการยกระดับทักษะจนสามารถจัดทำแผนขับเคลื่อนดิจิทัลของจังหวัดตนเองได้ และมีสื่อการเรียนรู้ e-Learning มาตรฐานที่บุคลากรใน 76 จังหวัดสามารถใช้ทบทวนเพื่อพัฒนาตนเองได้อย่างยั่งยืน",

    outcome_en: "Delivered a validated Competency Framework and Organizational Development Plan. Personnel in 18 pilot provinces were upskilled to create their own provincial digital roadmaps. Additionally, a standardized e-Learning library was established, enabling continuous self-development for staff across all 76 provinces.",
    gallery: [
      "/images/projects/NP/NP1.jpg",
      "/images/projects/NP/NP2.jpg",
      "/images/projects/NP/NP3.jpg",
      "/images/projects/NP/NP4.jpg",
      "/images/projects/NP/NP5.jpg",
    ],
  },
  {
    id: 7,
    slug: "government-data-catalog",
    year: "2024",
    imageSrc: "/images/project-7.jpg",
    title_th: "โครงการส่งเสริมการใช้งานระบบ Government Data Catalog",
    title_en: "Government Data Catalog Project",
    category_en: "Government · Data Catalog",
    category_th: "Government · Data Catalog",
    description_en: "The Government Data Catalog Promotion project is a strategic initiative designed to transform a static 'Data Repository' into a dynamic 'National Intelligence Hub.' We focused on cultivating a vibrant Data Ecosystem by bridging government agencies, academia, and the public. Through nationwide roadshows and intensive analytics training, we unlocked the full potential of Open Government Data, ensuring it is actively utilized to drive tangible socio-economic impact.",
    description_th: "โครงการส่งเสริมการใช้งานระบบบัญชีข้อมูลภาครัฐ เป็นภารกิจสำคัญในการเปลี่ยน 'คลังข้อมูล' ให้เป็น 'คลังปัญญา' ของประเทศ เรามุ่งเน้นการสร้างระบบนิเวศข้อมูล (Data Ecosystem) ที่มีชีวิต โดยการเชื่อมโยงภาครัฐ ภาคการศึกษา และภาคประชาชนเข้าด้วยกัน ผ่านกิจกรรม Roadshow ทั่วประเทศและการอบรม Data Analytics เชิงลึก เพื่อปลดล็อกให้เกิดการนำข้อมูลเปิดภาครัฐ (Open Data) ไปใช้ขับเคลื่อนเศรษฐกิจและสังคมอย่างเป็นรูปธรรม",
    overview_th: "โครงการขับเคลื่อนระบบนิเวศข้อมูลภาครัฐ (Government Data Ecosystem) โดยมุ่งเน้นการส่งเสริมให้เกิดการนำ 'บัญชีข้อมูลภาครัฐ' (GD Catalog) ไปใช้ประโยชน์เชิงเศรษฐกิจและสังคมอย่างเป็นรูปธรรม ผ่านกระบวนการที่ครอบคลุมตั้งแต่การให้คำปรึกษาด้านมาตรฐานข้อมูล (Linked Open Data) การจัดอบรมเชิงปฏิบัติการด้าน Data Analytics ให้กับข้าราชการและสถาบันการศึกษาทั่วประเทศ ไปจนถึงการจัดกิจกรรม Roadshow และงานนิทรรศการระดับประเทศเพื่อสร้างความตระหนักรู้",

    overview_en: "A strategic initiative to activate the 'Government Data Ecosystem' by promoting the tangible utilization of the 'Government Data Catalog' (GD Catalog) for socio-economic impact. The project encompasses a comprehensive scope, ranging from consultancy on data standards (Linked Open Data) and Data Analytics workshops for public officials and academic institutions nationwide, to organizing regional roadshows and a national exhibition to drive awareness.",

    scopeOfWork_th: [
      "ศึกษาวิเคราะห์และจัดทำแนวทางบูรณาการข้อมูล (Linked Open Data) และเทคนิคการทำข้อมูลนิรนาม (Anonymous Data) เพื่อการเปิดเผย",
      "จัดกิจกรรม Roadshow ใน 18 กลุ่มจังหวัด และงานระดับประเทศ 'Government Data Catalog Day' พร้อมนิทรรศการกว่า 50 บูธ",
      "จัดอบรมเชิงปฏิบัติการ (Workshop) การใช้เครื่องมือวิเคราะห์ข้อมูล (Power BI / Looker Studio) ให้กับบุคลากรภาครัฐและสถาบันการศึกษา รวมกว่า 840 คน",
      "ผลิตสื่อประชาสัมพันธ์ครบวงจร (Video, Infographic, เอกสาร 45,000 ฉบับ) และบริหารจัดการสื่อออนไลน์ 5 ช่องทาง",
      "สร้างเครือข่ายความร่วมมือกับสถาบันการศึกษา (University Network) เพื่อนำข้อมูลภาครัฐไปใช้ในการเรียนการสอนและวิจัย",
      "ติดตามและประเมินผลโครงการผ่านระบบ Dashboard และรายงานความก้าวหน้า"
    ],

    scopeOfWork_en: [
      "Study and development of guidelines for Linked Open Data integration and Anonymous Data techniques for public disclosure.",
      "Organization of regional Roadshows across 18 provincial groups and the national 'Government Data Catalog Day' featuring 50+ exhibition booths.",
      "Conducting Data Analytics Workshops (using Power BI / Looker Studio) for over 840 government officials and academic representatives.",
      "End-to-end production of PR materials (Videos, Infographics, 45,000 brochures) and management of 5 social media channels.",
      "Establishment of academic partnerships (University Network) to integrate government data into curriculum and research.",
      "Project monitoring and evaluation via a dedicated Dashboard and progress reporting system."
    ],

    problem_th: "แม้ภาครัฐจะมีชุดข้อมูลจำนวนมาก แต่ยังขาดการนำไปใช้ประโยชน์อย่างเต็มประสิทธิภาพ (Underutilized Data) เนื่องจากผู้ใช้ยังขาดความรู้ความเข้าใจในการเข้าถึง ขาดทักษะในการวิเคราะห์ข้อมูล (Data Analytics Skills) และชุดข้อมูลบางส่วนยังไม่เชื่อมโยงกันหรืออยู่ในรูปแบบที่พร้อมใช้งาน (Ready-to-use)",

    problem_en: "Despite the abundance of government datasets, they remain 'Underutilized Data' due to a lack of user awareness on access, insufficient Data Analytics skills among stakeholders, and data often not being interconnected or in a ready-to-use format.",

    solution_th: "ดำเนินการด้วยกลยุทธ์ 'Data Activation 360°': 1) Tech: ยกระดับมาตรฐานข้อมูลด้วย Linked Open Data 2) People: อบรมทักษะการใช้ข้อมูลจริงด้วยเครื่องมือ BI Tools 3) Engagement: สร้างเวทีแลกเปลี่ยนเรียนรู้ผ่าน Roadshow ทั่วประเทศและดึงภาคการศึกษาเข้ามามีส่วนร่วม เพื่อให้ข้อมูลถูกนำไปสร้างมูลค่าจริง",

    solution_en: "Executed a 'Data Activation 360°' strategy: 1) Tech: Elevating data standards with Linked Open Data. 2) People: Upskilling stakeholders in practical data usage via BI Tools. 3) Engagement: Creating platforms for knowledge exchange through nationwide Roadshows and academic partnerships to drive real-world value creation.",

    outcome_th: "สร้างเครือข่ายผู้ใช้งานข้อมูลภาครัฐที่เข้มแข็งทั่วประเทศ บุคลากรกว่า 800 คนสามารถใช้เครื่องมือวิเคราะห์ข้อมูลเพื่อตอบโจทย์ภารกิจได้จริง เกิดการรับรู้ในวงกว้างผ่านสื่อประชาสัมพันธ์และกิจกรรม Roadshow นำไปสู่การยกระดับบัญชีข้อมูลภาครัฐให้เป็น 'National Data Infrastructure' ที่สมบูรณ์",

    outcome_en: "Established a robust network of government data users nationwide. Over 800 personnel were empowered with data analytics tools to solve real-world tasks. Broad awareness was achieved through PR campaigns and Roadshows, successfully elevating the Government Data Catalog to become a complete 'National Data Infrastructure'.",
    gallery: [
      "/images/projects/GDC/GDC1.jpg",
      "/images/projects/GDC/GDC2.jpg",
      "/images/projects/GDC/GDC3.jpg",
      "/images/projects/GDC/GDC4.jpg",
      "/images/projects/GDC/GDC5.jpg",
      "/images/projects/GDC/GDC6.jpg",
    ],
  },
  {
    id: 8,
    slug: "zpot-data-catalog",
    imageSrc: "/images/project-8.jpg",
    year: "2025",
    title_th: "โครงการจ้างที่ปรึกษาจัดทำบัญชีข้อมูลองค์กร (Data Catalog) ขององค์การสวนสัตว์แห่งประเทศไทยฯ",
    title_en: "Consultancy Services Project for the Development of the Organization Data Catalog for the Zoological Park Organization of Thailand",
    category_th: "Data Catalog",
    category_en: "Data Catalog",
    description_th: "โครงการจ้างที่ปรึกษาจัดทำบัญชีข้อมูลองค์กร (Data Catalog) ขององค์การสวนสัตว์แห่งประเทศไทยฯ เพื่อให้ข้อมูลถูกนำไปสร้างมูลค่าจริง",
    description_en: "A digital transformation initiative empowering the Zoological Park Organization of Thailand to become a truly Data-Driven Organization. We established the foundational Data Architecture, consolidating fragmented wildlife conservation and tourism data into a unified 'Corporate Data Catalog.' This project enhances transparency and facilitates the utilization of data for research and public service improvement.",
    overview_th: "โครงการวางรากฐานการบริหารจัดการข้อมูลเชิงยุทธศาสตร์ให้กับองค์การสวนสัตว์แห่งประเทศไทยฯ โดยมุ่งเน้นการจัดทำสถาปัตยกรรมข้อมูล (Data Architecture) ที่ได้มาตรฐานสากล และพัฒนาระบบบัญชีข้อมูลองค์กร (Data Catalog) บนแพลตฟอร์ม CKAN เพื่อรวบรวมและเปิดเผยข้อมูลสำคัญด้านการอนุรักษ์และการให้บริการ สู่สาธารณะตามมาตรฐานข้อมูลเปิดภาครัฐ (Open Data)",
    overview_en: "A strategic data management initiative for the Zoological Park Organization of Thailand (ZPOT), focusing on establishing a standardized Data Architecture and developing an Organization Data Catalog using the CKAN platform. The project aims to consolidate and publish key conservation and service data to the public, adhering to Open Government Data standards.",
    scopeOfWork_th: [
      "วิเคราะห์และออกแบบสถาปัตยกรรมข้อมูล (Data Architecture) ครอบคลุม Data Lake, Data Warehouse และ Data Mart พร้อมแผนภาพ Data Pipeline",
      "จัดทำมาตรฐานข้อมูล (Data Standard), พจนานุกรมข้อมูล (Data Dictionary) และ Metadata สำหรับชุดข้อมูลเปิด",
      "พัฒนาระบบบัญชีข้อมูล (Data Catalog Portal) ด้วยซอฟต์แวร์ CKAN ติดตั้งบนระบบคลาวด์กลางภาครัฐ (GDCC) หรือ Cloud ที่กำหนด",
      "จัดเตรียมและทำความสะอาดชุดข้อมูล (Data Cleaning & Preparation) ระดับ 3 ดาว อย่างน้อย 3 ชุด (เช่น ข้อมูลประชากรสัตว์, ผู้เข้าชม)",
      "เชื่อมโยงข้อมูลสู่ระบบบัญชีข้อมูลภาครัฐ (GD Catalog) และศูนย์กลางข้อมูลเปิดภาครัฐ (Data.go.th)",
      "จัดอบรมถ่ายทอดความรู้การบริหารจัดการข้อมูลและการใช้งานระบบ ให้กับบุคลากรไม่น้อยกว่า 60 ท่าน"
    ],

    scopeOfWork_en: [
      "Analysis and design of Data Architecture, covering Data Lake, Data Warehouse, and Data Mart, including Data Pipeline diagrams.",
      "Development of Data Standards, Data Dictionaries, and Metadata for Open Data datasets.",
      "Development of a Data Catalog Portal using CKAN software, deployed on the Government Data Center and Cloud service (GDCC) or designated Cloud.",
      "Data preparation and cleansing to achieve 3-star Open Data standards for at least 3 key datasets (e.g., animal population, visitor statistics).",
      "Integration and registration of datasets with the National Government Data Catalog (GD Catalog) and Data.go.th.",
      "Provision of knowledge transfer training on data management and system usage for at least 60 personnel."
    ],

    problem_th: "ระบบบริหารจัดการข้อมูลเดิมขาดความเชื่อมโยง (Siloed Data) และไม่มีโครงสร้างมาตรฐาน ทำให้การนำข้อมูลไปวิเคราะห์เพื่อตัดสินใจเชิงยุทธศาสตร์ทำได้ล่าช้า อีกทั้งข้อมูลด้านการอนุรักษ์และการให้บริการยังไม่ได้ถูกจัดระเบียบเพื่อเปิดเผยต่อสาธารณะอย่างมีประสิทธิภาพตามนโยบายรัฐบาลดิจิทัล",

    problem_en: "The existing data management system suffered from disconnected silos and lacked a standardized structure, causing delays in strategic data analysis. Furthermore, valuable conservation and service data were not organized efficiently for public disclosure in alignment with Digital Government policies.",

    solution_th: "วางโครงสร้างระบบนิเวศข้อมูลใหม่ (Data Ecosystem) โดยเริ่มจากการออกแบบ Data Architecture ที่ชัดเจน (ต้นน้ำถึงปลายน้ำ) กำหนดธรรมาภิบาลข้อมูล และใช้เครื่องมือ CKAN ในการสร้าง Data Catalog เพื่อเป็นศูนย์กลางในการเข้าถึงข้อมูลที่โปร่งใสและตรวจสอบได้",

    solution_en: "Established a new Data Ecosystem by designing a clear Data Architecture (end-to-end), defining Data Governance policies, and utilizing CKAN tools to build a centralized Data Catalog, ensuring transparent and auditable data access.",

    outcome_th: "องค์การสวนสัตว์ฯ มีระบบบัญชีข้อมูล (Data Catalog) ที่ทันสมัยและใช้งานได้จริงบน Cloud มีมาตรฐานการจัดการข้อมูลที่รองรับการขยายตัวในอนาคต และมีชุดข้อมูลเปิด (Open Data) คุณภาพสูงที่พร้อมให้บริการแก่นักวิจัยและประชาชน เพื่อสนับสนุนงานอนุรักษ์และเศรษฐกิจยุคใหม่",

    outcome_en: "ZPOT is equipped with a modern, functional Data Catalog hosted on Cloud, backed by scalable data management standards. The project delivered high-quality Open Data sets ready for researchers and the public, supporting conservation efforts and the modern data economy.",
    gallery: [
      "/images/projects/ZPOT/ZPOT1.jpg",
      "/images/projects/ZPOT/ZPOT2.jpg",
      "/images/projects/ZPOT/ZPOT3.jpg",
      "/images/projects/ZPOT/ZPOT4.jpg",
    ],
  },
  {
    id: 9,
    slug: "zpot-ews",
    imageSrc: "/images/project-9.jpg",
    year: "2024",
    title_th: "งานจ้างที่ปรึกษาขับเคลื่อนการประยุกต์ใช้ระบบสารสนเทศสนับสนุนการบริหารความเสี่ยง และควบคุมภายใน ขององค์การสวนสัตว์แห่งประเทศไทย ในพระบรมราชูปถัมภ์",
    title_en: "Consultancy Services for Driving the Application of the Information System Supporting Risk Management and Internal Control of the Zoological Park Organization of Thailand",
    category_th: "RISK Management",
    category_en: "RISK Management",
    description_th: "โครงการเปลี่ยนผ่านระบบบริหารความเสี่ยงสู่ยุคดิจิทัล (Digital Risk Transformation) เพื่อยกระดับธรรมาภิบาลองค์กรตามมาตรฐาน SE-AM เรานำเทคโนโลยี Business Intelligence และระบบเตือนภัยล่วงหน้า (Early Warning System) มาประยุกต์ใช้ เพื่อเปลี่ยนข้อมูลความเสี่ยงที่ซับซ้อน ให้กลายเป็น Dashboard ที่ดูง่ายและแจ้งเตือนได้ทันที ช่วยให้ผู้บริหารองค์การสวนสัตว์ฯ สามารถ 'รู้เท่าทัน' และ 'รับมือ' กับความเสี่ยงได้อย่างแม่นยำและรวดเร็ว",
    description_en: "A Digital Risk Transformation initiative designed to elevate corporate governance in compliance with SE-AM standards. We integrated Business Intelligence and Early Warning Systems (EWS) to transform complex risk data into intuitive Dashboards with instant alerts. This empowers ZPOT executives to 'Anticipate' and 'Mitigate' risks with precision and agility, ensuring organizational resilience.",
    overview_th: "โครงการที่ปรึกษาเชิงกลยุทธ์เพื่อยกระดับระบบบริหารความเสี่ยงและการควบคุมภายในขององค์การสวนสัตว์แห่งประเทศไทยฯ สู่ยุคดิจิทัล โดยมุ่งเน้นการปฏิบัติตามเกณฑ์ประเมินรัฐวิสาหกิจ (SE-AM) ผ่านการออกแบบระบบสารสนเทศอัจฉริยะ (Business Intelligence) และระบบเตือนภัยล่วงหน้า (Early Warning System) เพื่อให้ผู้บริหารสามารถตัดสินใจบนพื้นฐานของข้อมูลความเสี่ยงที่ทันต่อเหตุการณ์",

    overview_en: "A strategic consultancy project aimed at digitally transforming the Risk Management and Internal Control systems of the Zoological Park Organization of Thailand (ZPOT). Focusing on SE-AM compliance, the project involves designing Business Intelligence (BI) dashboards and an Early Warning System (EWS) to empower executives with real-time, data-driven risk insights.",

    scopeOfWork_th: [
      "ศึกษาและวิเคราะห์แนวทางการประยุกต์ใช้ IT สำหรับบริหารความเสี่ยง ตามเกณฑ์ Core Business Enablers และ SE-AM",
      "จัดประชุมประชาพิจารณ์ (Focus Group) อย่างน้อย 4 ครั้ง เพื่อระดมความเห็นและกำหนด Requirement ระบบร่วมกับบุคลากร",
      "ออกแบบระบบเตือนภัยล่วงหน้า (EWS) และจัดทำแบบฟอร์มอิเล็กทรอนิกส์ (E-Forms) สำหรับเก็บข้อมูลความเสี่ยงและระดับความรุนแรง",
      "กำหนดเกณฑ์ Trigger Point และจัดทำ RACI Matrix เพื่อระบุบทบาทหน้าที่และความรับผิดชอบในการจัดการความเสี่ยง",
      "ออกแบบและพัฒนาหน้าจอสรุปผล (BI Dashboard) แสดงสถานะความเสี่ยงแบบ Visualized ตามอัตลักษณ์องค์กร (CI)",
      "ถ่ายทอดองค์ความรู้ (Knowledge Transfer) แบ่งเป็นหลักสูตรสำหรับผู้ปฏิบัติงาน (2 วัน) และผู้บริหาร (1 วัน)"
    ],

    scopeOfWork_en: [
      "Study and analysis of IT application guidelines for Risk Management in alignment with Core Business Enablers and SE-AM standards.",
      "Organization of at least 4 Focus Group sessions to gather requirements and brainstorm with stakeholders.",
      "Design of the Early Warning System (EWS) and development of Electronic Forms (E-Forms) for risk data and severity entry.",
      "Definition of Trigger Points and creation of a RACI Matrix to clarify roles and responsibilities in risk mitigation.",
      "Design and development of Business Intelligence (BI) Dashboards to visualize risk status, adhering to Corporate Identity (CI).",
      "Execution of Knowledge Transfer sessions tailored for Operational Staff (2 days) and Executives (1 day)."
    ],

    problem_th: "การบริหารความเสี่ยงแบบเดิมยังขาดเครื่องมือดิจิทัลที่ช่วยในการติดตามและแจ้งเตือนสถานะความเสี่ยงได้ทันท่วงที (Real-time Monitoring) อีกทั้งต้องเร่งปรับปรุงกระบวนการทำงานให้สอดคล้องกับเกณฑ์ประเมินผลรัฐวิสาหกิจ (SE-AM) ฉบับใหม่ ที่เน้นการใช้ข้อมูลสารสนเทศมาสนับสนุนการตัดสินใจ",

    problem_en: "Traditional risk management lacked digital tools for real-time monitoring and alerting. Furthermore, there was an urgent need to align operational processes with the new State Enterprise Assessment Model (SE-AM), which prioritizes the use of information systems for data-driven decision-making.",

    solution_th: "วางระบบ 'Proactive Risk Intelligence' โดย: 1) เปลี่ยนการรายงานผลเป็นดิจิทัลด้วย E-Forms 2) สร้างระบบ EWS ที่มี Trigger Point เพื่อเตือนภัยก่อนเกิดเหตุ และ 3) แสดงผลผ่าน Dashboard ที่เข้าใจง่าย ช่วยให้เห็นภาพรวมความเสี่ยงทั้งองค์กรได้ในหน้าจอเดียว",

    solution_en: "Implemented a 'Proactive Risk Intelligence' system by: 1) Digitizing reporting via E-Forms. 2) Establishing an EWS with Trigger Points for preemptive alerts. 3) Visualizing data through comprehensive Dashboards, providing a single-pane-of-glass view of organizational risks.",

    outcome_th: "องค์การสวนสัตว์ฯ มีระบบต้นแบบในการบริหารความเสี่ยงที่ทันสมัย มีระบบ EWS ช่วยลดโอกาสเกิดความเสียหาย และมีบุคลากรที่มีความเข้าใจในการใช้เทคโนโลยีมาจัดการความเสี่ยง พร้อมรับการประเมินตามมาตรฐาน SE-AM อย่างมั่นใจ",

    outcome_en: "ZPOT is equipped with a modern risk management system prototype featuring an EWS to mitigate potential damages. Personnel are upskilled in leveraging technology for risk management, ensuring readiness for SE-AM assessment compliance.",
    gallery: [
      "/images/projects/EWS/EWS1.jpg",
      "/images/projects/EWS/EWS2.jpg",
      "/images/projects/EWS/EWS3.jpg",
    ],
  },
  {
    id: 10,
    slug: "sdmx",
    imageSrc: "/images/project-10.jpg",
    year: "2023",
    title_th: "โครงการพัฒนาสารสนเทศยุทธศาสตร์ภาครัฐ",
    title_en: "National Strategy Information Development Project",
    category_th: "Data Analytics · Data Catalog",
    category_en: "Data Analytics · Data Catalog",
    description_th: "โครงการที่เปรียบเสมือนการสร้าง 'ทางด่วนข้อมูล' ให้กับประเทศไทย เรามุ่งแก้ปัญหาข้อมูลภาครัฐที่กระจัดกระจายและคุยกันไม่รู้เรื่อง ด้วยการนำมาตรฐานโลกอย่าง SDMX มาเป็นตัวกลางในการเชื่อมโยงข้อมูลยุทธศาสตร์ชาติเข้าด้วยกัน และเปลี่ยนข้อมูลดิบให้กลายเป็นขุมทรัพย์ทางปัญญาด้วยเทคโนโลยี AI & Machine Learning เพื่อให้ทุกการตัดสินใจในการพัฒนาประเทศ ขับเคลื่อนด้วยข้อมูลที่ถูกต้อง แม่นยำ และทันสมัยที่สุด",
    description_en: "Building Thailand's 'Data Superhighway.' This project addresses the challenge of fragmented government data by implementing SDMX, a global standard for statistical interoperability. We connect the dots of National Strategy data and transform raw figures into actionable intelligence using AI & Machine Learning, ensuring that every policy decision is driven by the most accurate, precise, and up-to-date information available.",
    overview_th: "โครงการยุทธศาสตร์เพื่อยกระดับระบบบัญชีข้อมูลภาครัฐ (Government Data Catalog) จากเพียงสมุดหน้าเหลือง (Directory) สู่ศูนย์กลางการแลกเปลี่ยนข้อมูลสถิติอัจฉริยะ (Statistic Sharing Hub) โดยใช้มาตรฐานสากล SDMX (Statistical Data and Metadata eXchange) เป็นกลไกหลักในการเชื่อมโยงข้อมูลระหว่างหน่วยงาน พร้อมนำข้อมูลมาวิเคราะห์เชิงลึกด้วยเทคโนโลยี AI/Machine Learning เพื่อสนับสนุนการตัดสินใจตามแผนยุทธศาสตร์ชาติ",

    overview_en: "A strategic initiative to elevate the Government Data Catalog from a static directory to an intelligent 'Statistic Sharing Hub.' The project leverages the international SDMX (Statistical Data and Metadata eXchange) standard as the core mechanism for inter-agency data interoperability. It further integrates Advanced Analytics using AI/Machine Learning to generate insights that support National Strategy decision-making.",

    scopeOfWork_th: [
      "ศึกษากรอบมาตรฐาน SDMX และออกแบบโมเดลข้อมูล (Data Model) สำหรับประเด็นนำร่อง (เช่น การศึกษา, คมนาคม, ICT)",
      "ให้คำปรึกษาและจัดประชุมเชิงปฏิบัติการร่วมกับ 5 หน่วยงานนำร่อง เพื่อจัดทำชุดข้อมูลที่มีโครงสร้าง (Structured Data)",
      "รวบรวมข้อมูลเข้าสู่ 'ศูนย์กลางการแบ่งปันสถิติ (Statistic Sharing Hub)' และเชื่อมโยงกับระบบบัญชีข้อมูลภาครัฐ",
      "วิเคราะห์ข้อมูลขั้นสูง (Data Analytics) โดยใช้เทคโนโลยี Machine Learning หรือ AI Simulation เพื่อสร้างแบบจำลองการตัดสินใจ",
      "จัดทำ Dashboard นำเสนอภาพรวมการขับเคลื่อนยุทธศาสตร์ชาติที่เข้าถึงได้ผ่านอินเทอร์เน็ต",
      "จัดฝึกอบรมหลักสูตร SDMX และการใช้เครื่องมือ Fusion Metadata Registry ให้กับบุคลากรภาครัฐกว่า 240 คน",
      "ผลิตสื่อประชาสัมพันธ์ (Video, แผ่นพับ) และรายงานกรณีศึกษา (Case Study) การแลกเปลี่ยนข้อมูล"
    ],

    scopeOfWork_en: [
      "Study of the SDMX framework and design of Data Models for pilot sectors (e.g., Education, Transport, ICT).",
      "Consultancy and workshops with 5 pilot agencies to structure their datasets (Structured Data) according to standards.",
      "Aggregation of data into the 'Statistic Sharing Hub' and integration with the Government Data Catalog.",
      "Execution of Advanced Analytics using Machine Learning or AI Simulation to build decision-making models.",
      "Development of web-accessible Dashboards visualizing progress on National Strategy indicators.",
      "Provision of SDMX training courses (including Fusion Metadata Registry tools) for over 240 government personnel.",
      "Production of PR materials (Videos, Brochures) and Case Study reports on statistical data exchange."
    ],

    problem_th: "ระบบบัญชีข้อมูลภาครัฐในปัจจุบันเปรียบเสมือน 'สมุดหน้าเหลือง' ที่บอกแหล่งที่มา แต่ตัวข้อมูลจริงยังขาดโครงสร้างที่เป็นมาตรฐาน (Unstructured Data) ทำให้ไม่สามารถนำมาประมวลผลร่วมกันหรือแลกเปลี่ยนอัตโนมัติได้ทันที เป็นอุปสรรคต่อการนำข้อมูลไปใช้วิเคราะห์เพื่อขับเคลื่อนยุทธศาสตร์ชาติ",

    problem_en: "The current Government Data Catalog functions like a 'Yellow Pages'—listing sources but lacking standard structures (Unstructured Data). This fragmentation prevents automated data exchange and interoperability, hindering the ability to analyze data effectively for driving the National Strategy.",

    solution_th: "ยกระดับโครงสร้างพื้นฐานข้อมูลโดยใช้มาตรฐาน **SDMX** เพื่อสร้าง 'ภาษากลาง' ในการแลกเปลี่ยนข้อมูลสถิติ ทำให้ข้อมูลจากต่างหน่วยงานสามารถเชื่อมโยงกันได้อัตโนมัติ (Automated Exchange) และต่อยอดด้วยการใช้ **AI/Simulation** มาช่วยวิเคราะห์หาทางเลือกที่คุ้มค่าที่สุดในการแก้ปัญหาประเทศ",

    solution_en: "Upgraded the data infrastructure by adopting the **SDMX** standard to create a 'Common Language' for statistical exchange. This enables Automated Exchange between agencies and facilitates the use of **AI/Simulation** to analyze and identify the most cost-effective solutions for national challenges.",

    outcome_th: "เกิดระบบนิเวศการแลกเปลี่ยนข้อมูลสถิติที่เป็นมาตรฐานสากล (SDMX) เป็นครั้งแรกในหน่วยงานนำร่อง มีชุดข้อมูลยุทธศาสตร์ที่พร้อมใช้งาน (Ready-to-use) และ Dashboard ที่แสดงสถานะการพัฒนาประเทศแบบ Real-time ช่วยให้รัฐบาลมีข้อมูลที่แม่นยำในการกำหนดนโยบาย",

    outcome_en: "Established a pilot ecosystem for international-standard statistical data exchange (SDMX). Delivered ready-to-use strategic datasets and real-time Dashboards monitoring national development, empowering the government with accurate data for precision policy-making.",
    gallery: [

      "/images/projects/SDMX/SDMX1.jpg",
      "/images/projects/SDMX/SDMX2.jpg",
      "/images/projects/SDMX/SDMX3.jpg",


    ],
  },
  {
    id: 11,
    slug: "",
    imageSrc: "",
    year: "",
    title_th: "",
    title_en: "",
    category_th: "·",
    category_en: "·",
    description_th: "",
    description_en: "",
    scopeOfWork_th: [],
    scopeOfWork_en: [],
    problem_th: "",
    problem_en: "",
    solution_th: "",
    solution_en: "",
    outcome_th: "",
    outcome_en: "",
    gallery: [],
  },
  {
    id: 12,
    slug: "",
    imageSrc: "",
    year: "",
    title_th: "",
    title_en: "",
    category_th: "·",
    category_en: "·",
    description_th: "",
    description_en: "",
    scopeOfWork_th: [],
    scopeOfWork_en: [],
    problem_th: "",
    problem_en: "",
    solution_th: "",
    solution_en: "",
    outcome_th: "",
    outcome_en: "",
    gallery: [],
  },
  {
    id: 13,
    slug: "",
    imageSrc: "",
    year: "",
    title_th: "",
    title_en: "",
    category_th: "·",
    category_en: "·",
    description_th: "",
    description_en: "",
    scopeOfWork_th: [],
    scopeOfWork_en: [],
    problem_th: "",
    problem_en: "",
    solution_th: "",
    solution_en: "",
    outcome_th: "",
    outcome_en: "",
    gallery: [],
  }, {
    id: 14,
    slug: "",
    imageSrc: "",
    year: "",
    title_th: "",
    title_en: "",
    category_th: "·",
    category_en: "·",
    description_th: "",
    description_en: "",
    scopeOfWork_th: [],
    scopeOfWork_en: [],
    problem_th: "",
    problem_en: "",
    solution_th: "",
    solution_en: "",
    outcome_th: "",
    outcome_en: "",
    gallery: [],
  },
];
