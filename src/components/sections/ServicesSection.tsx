import Link from "next/link";

// 1) เราสร้าง type สำหรับ service เพื่อให้ TypeScript ช่วยเช็คให้ว่าเราใช้ข้อมูลถูกต้อง
type Service = {
  id: number;
  title: string;
  description: string;
  points: string[];
  icon: string; // ใช้ emoji ง่าย ๆ ก่อนในขั้นนี้
};

// 2) สร้าง array ของ services ที่เราจะเอาไปแสดงเป็นการ์ด
const SERVICES: Service[] = [
  {
    id: 1,
    title: "Digital Strategy & Roadmap",
    description:
      "วิเคราะห์สภาพองค์กรปัจจุบัน และออกแบบเส้นทางการทรานสฟอร์มด้านดิจิทัลให้สอดคล้องกับเป้าหมายธุรกิจ.",
    points: [
      "System & Process Audit",
      "Technology Stack Recommendation",
      "Data & Analytics Direction",
    ],
    icon: "🔍",
  },
  {
    id: 2,
    title: "System Architecture & Backend",
    description:
      "ออกแบบสถาปัตยกรรมระบบให้รองรับการเติบโต ปลอดภัย และรองรับการเชื่อมต่อบริการต่าง ๆ ได้ในอนาคต.",
    points: [
      "Microservices / APIs",
      "Cloud-native Design",
      "Performance & Scalability",
    ],
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Dashboard & Data Solutions",
    description:
      "ออกแบบและพัฒนาแดชบอร์ดเพื่อช่วยผู้บริหารตัดสินใจบนข้อมูลจริง ไม่ใช่แค่รายงานเชิงทฤษฎี.",
    points: [
      "Data Pipeline & ETL",
      "BI Dashboard (Power BI, Looker Studio)",
      "KPI & Insight Design",
    ],
    icon: "📊",
  },
  {
    id: 4,
    title: "TEST",
    description:
      "ทดสอบ",
    points: [
      "ทดสอบ",
      "ทดสอบ",
      "ทดสอบ",
    ],
    icon: "📊",
  },
];

// 3) ประกาศ component หลักของ section นี้
export function ServicesSection() {
  return (
    // 4) พื้นหลัง section นี้ใช้สีเทาอ่อน ให้ตัดกับการ์ดสีขาว
    <section className="bg-[#F5F7FA] py-16 md:py-20">
      {/* 5) Container กลางหน้า เหมือน pattern เดิม */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* 6) ส่วนหัวของ section: title + description + ปุ่ม (optional) */}
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#5A73C3] uppercase">
              SERVICES
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#111827]">
              บริการหลักของเรา
            </h2>
            <p className="mt-2 text-sm text-[#4B5563] max-w-xl">
              ครอบคลุมตั้งแต่การวางกลยุทธ์ดิจิทัล การออกแบบสถาปัตยกรรมระบบ
              ไปจนถึงการพัฒนาและส่งมอบโซลูชันที่ใช้งานได้จริงในองค์กรของคุณ.
            </p>
          </div>

          {/* ปุ่มด้านขวา (เฉพาะบนหน้าจอใหญ่) */}
          <Link
  href="/services"
  className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full border border-[#5A73C3] text-[#0D278A] text-xs font-semibold bg-white hover:bg-[#EEF2FF] transition"
>
  ดูรายละเอียดบริการ
</Link>
        </div>

        {/* 7) ตรงนี้คือส่วนสำคัญ: แสดงการ์ดด้วย grid + map SERVICES */}
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            // 7.1) key สำคัญมากสำหรับ React เวลา render list
            <article
              key={service.id}
              className="bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:shadow-xl hover:border-[#B0BBDF] hover:-translate-y-1 transition-all"
            >
              {/* 7.2) icon ในกล่องเล็กข้างบน */}
              <div className="w-10 h-10 rounded-xl bg-[#E3E7F8] flex items-center justify-center mb-4">
                <span className="text-[#0D278A] text-lg">{service.icon}</span>
              </div>

              {/* 7.3) ชื่อ service */}
              <h3 className="text-lg font-semibold text-[#111827] mb-2">
                {service.title}
              </h3>

              {/* 7.4) คำอธิบายย่อ */}
              <p className="text-sm text-[#4B5563] mb-4">
                {service.description}
              </p>

              {/* 7.5) bullet points ย่อย */}
              <ul className="text-xs text-[#6B7280] space-y-1 mb-4">
                {service.points.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>

              {/* 7.6) ลิงก์ "รายละเอียดเพิ่มเติม" เล็กๆ */}
              <button className="text-xs font-semibold text-[#0D278A] hover:underline">
                รายละเอียดเพิ่มเติม →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
