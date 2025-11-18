import { SERVICES, type Service } from "@/lib/services";

// หน้า /services เป็น Server Component (ไม่มี onClick/onSubmit)
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      {/* ส่วนหัวของหน้า Services */}
      <section className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5A73C3] uppercase">
            SERVICES
          </p>
          <h1 className="mt-2 text-2xl md:text-3xl font-semibold text-[#111827]">
            บริการด้านดิจิทัลที่เราเชี่ยวชาญ
          </h1>
          <p className="mt-3 text-sm text-[#4B5563] max-w-2xl">
            เราโฟกัสการช่วยองค์กรออกแบบและพัฒนาระบบดิจิทัลในส่วนที่มีความซับซ้อนสูง
            ทั้งด้านกลยุทธ์ สถาปัตยกรรมระบบ และการใช้ข้อมูลให้เกิดประโยชน์สูงสุด
            โดยเชื่อมโยงกับเป้าหมายทางธุรกิจเป็นหลัก.
          </p>
        </div>
      </section>

      {/* รายการบริการทั้งหมด */}
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-6 md:space-y-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}

// type ของ props สำหรับ component ย่อย
type ServiceCardProps = {
  service: Service;
};

// การ์ดบริการ 1 รายการ
function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_14px_32px_rgba(15,23,42,0.06)] p-6 md:p-8">
      {/* หัวการ์ด: ชื่อ service และ shortTitle */}
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-[#111827]">
            {service.name}
          </h2>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5A73C3] mt-1">
            {service.description}
          </p>
        </div>

        {/* กลุ่มเป้าหมาย */}
        <div className="text-xs text-[#4B5563] bg-[#EEF2FF] text-[#0D278A] px-3 py-1 rounded-full">
          กลุ่มเป้าหมายหลัก: {service.target}
        </div>
      </div>

      {/* คำอธิบายย่อ */}
      <p className="mt-4 text-sm text-[#4B5563] leading-relaxed">
        {service.description}
      </p>

      {/* bullet รายละเอียด */}
      <ul className="mt-4 space-y-1.5 text-xs text-[#6B7280]">
        {service.details.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>

      {/* ข้อความท้ายการ์ด */}
      <p className="mt-5 text-xs text-[#9CA3AF]">
        * รายละเอียด scope งานและรูปแบบการทำงาน
        สามารถปรับให้เหมาะกับบริบทของแต่ละองค์กรในขั้นตอนการพูดคุย.
      </p>
    </article>
  );
}
