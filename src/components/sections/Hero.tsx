// 1) ประกาศฟังก์ชัน Hero เป็น React Component
//    ไม่มี props ตอนนี้ เพราะเรายังไม่ส่งอะไรจากข้างนอกเข้ามา
export function Hero() {
  return (
    // 2) ใช้ <section> เพื่อบอก semantic ว่านี่คือส่วนหนึ่งของหน้า
    //    เราใส่พื้นหลังเป็น gradient จากขาว → ฟ้า → น้ำเงิน
    <section className="bg-linear-to-br from-[#FCFCFD] via-[#B0BBDF] to-[#0D278A]">
      {/* 3) กล่อง Container ภายใน (จำ pattern เดียวกับหน้า Home ได้เลย) */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* 4) ฝั่งซ้าย: ข้อความหลัก */}
        <div className="text-white space-y-6">
          {/* 4.1) แท็กเล็กด้านบน ชื่อบริษัท */}
          <p className="text-xs font-semibold tracking-[0.25em] uppercase opacity-80">
            PRIME DIGITAL CONSULTANT
          </p>

          {/* 4.2) หัวข้อใหญ่ (Hero Title) */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Digital Consulting for Modern{" "}
            <span className="block">&amp; Data-Driven Business.</span>
          </h1>

          {/* 4.3) คำอธิบายสั้น ๆ */}
          <p className="text-sm md:text-base max-w-xl opacity-90">
            เราช่วยออกแบบ วางแผน และพัฒนาระบบดิจิทัลให้ธุรกิจของคุณ
            ตั้งแต่ระดับกลยุทธ์จนถึงการพัฒนาโซลูชันจริง
            ด้วยทีมที่เข้าใจทั้งเทคโนโลยีและบริบทขององค์กร.
          </p>

          {/* 4.4) ปุ่ม CTA 2 ปุ่ม */}
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0D278A] text-sm font-semibold shadow-lg hover:bg-[#F5F7FA] transition">
              นัดหมายปรึกษา
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/70 text-white text-sm font-semibold bg-transparent hover:bg-white/10 transition">
              ดูผลงานของเรา
            </button>
          </div>

          {/* 4.5) ตัวเลขเล็ก ๆ ใต้ปุ่ม (เหมือน badge สร้างความน่าเชื่อถือ) */}
          <div className="flex flex-wrap gap-6 text-xs md:text-sm opacity-90">
            <div>
              <div className="font-semibold">20+ Projects</div>
              <div>องค์กรที่ไว้ใจให้เราดูแล</div>
            </div>
            <div>
              <div className="font-semibold">FinTech · GovTech · EduTech</div>
              <div>อุตสาหกรรมที่เชี่ยวชาญ</div>
            </div>
          </div>
        </div>

        {/* 5) ฝั่งขวา: Card แสดง "Digital Transformation Snapshot" */}
        <div className="md:justify-self-end">
          <div className="bg-white/90 backdrop-blur rounded-2xl p-6 md:p-8 shadow-2xl max-w-md mx-auto">
            <h3 className="text-[#0D278A] font-semibold text-lg mb-4">
              Digital Transformation Snapshot
            </h3>

            {/* 5.1) รายการ bullet สั้น ๆ */}
            <ul className="space-y-2 text-sm text-[#4B5563]">
              <li>• System Audit &amp; Digital Readiness</li>
              <li>• Cloud &amp; Backend Architecture Design</li>
              <li>• Dashboard &amp; Data Insights สำหรับผู้บริหาร</li>
            </ul>

            {/* 5.2) ข้อความเล็กด้านล่าง card */}
            <p className="mt-4 text-xs text-[#6B7280]">
              เราออกแบบแนวทางให้เหมาะกับสภาพแวดล้อมจริงขององค์กร
              ไม่ใช่โซลูชันสำเร็จรูปที่ใช้ได้กับทุกแห่ง.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
