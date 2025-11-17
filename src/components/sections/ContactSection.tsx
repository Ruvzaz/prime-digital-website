"use client";

// 1) Component หลักของ Contact Section
export function ContactSection() {
  return (
    // 2) พื้นหลัง section ใช้สีเทาอ่อน ให้ตัดกับ card ขาว
    <section className="bg-[#F5F7FA] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* 3) หัวข้อ Section */}
        <div className="mb-8 text-center md:text-left">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5A73C3] uppercase">
            CONTACT
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#111827] mt-1">
            ติดต่อทีม Prime Digital Consultant
          </h2>
          <p className="mt-2 text-sm text-[#4B5563] max-w-2xl md:max-w-xl md:text-left mx-auto md:mx-0">
            หากคุณต้องการที่ปรึกษาด้านกลยุทธ์ดิจิทัล การออกแบบระบบ หรือแดชบอร์ดด้านข้อมูล
            สามารถส่งรายละเอียดเบื้องต้นถึงเราได้ ทีมงานจะติดต่อกลับโดยเร็วที่สุด.
          </p>
        </div>

        {/* 4) การ์ดติดต่อ: แบ่งเป็น 2 คอลัมน์ */}
        <div className="bg-white rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.08)] border border-[#E5E7EB] p-6 md:p-8 grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-8">
          {/* 4.1) ฝั่งซ้าย: ข้อมูลติดต่อ + reassurance text */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#111827]">
                เล่าให้เราฟังสั้น ๆ ว่าต้องการความช่วยเหลือด้านไหน
              </h3>
              <p className="mt-2 text-sm text-[#4B5563]">
                คุณไม่จำเป็นต้องมี requirement ที่สมบูรณ์แล้ว
                แค่บอกปัญหาและเป้าหมายหลัก ๆ ของคุณ
                เราจะช่วยออกแบบแนวทางที่เหมาะสมให้.
              </p>
            </div>

            <div className="space-y-3 text-sm text-[#4B5563]">
              <div>
                <p className="font-semibold text-[#111827]">ช่องทางติดต่ออื่น</p>
                <p>อีเมล: <span className="font-medium">contact@primedigital.co</span></p>
                <p>โทร: <span className="font-medium">02-123-4567</span></p>
              </div>
              <div className="text-xs text-[#6B7280]">
                * ข้อมูลที่คุณส่งจะถูกเก็บรักษาอย่างปลอดภัย และใช้เพื่อการติดต่อกลับเท่านั้น.
              </div>
            </div>
          </div>

          {/* 4.2) ฝั่งขวา: ฟอร์มติดต่อ */}
          <div>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                // ป้องกันไม่ให้ reload หน้าเมื่อกด submit (เพราะเรายังไม่ได้เชื่อม backend)
                e.preventDefault();
                alert("ตอนนี้เป็นแบบฟอร์มตัวอย่าง (ยังไม่เชื่อมระบบส่งจริง).");
              }}
            >
              {/* ชื่อ-นามสกุล */}
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1">
                  ชื่อ-นามสกุล
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="เช่น คุณสมชาย ดิจิทัลดี"
                  className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#5A73C3] focus:border-transparent"
                  required
                />
              </div>

              {/* อีเมล */}
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1">
                  อีเมลสำหรับติดต่อกลับ
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#5A73C3] focus:border-transparent"
                  required
                />
              </div>

              {/* องค์กร (ไม่บังคับ) */}
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1">
                  องค์กร / หน่วยงาน (ถ้ามี)
                </label>
                <input
                  type="text"
                  name="organization"
                  placeholder="เช่น Prime Digital Consultant / หน่วยงานภาครัฐ ฯลฯ"
                  className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#5A73C3] focus:border-transparent"
                />
              </div>

              {/* ข้อความ / ความต้องการ */}
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1">
                  เล่าโจทย์ / ความต้องการของคุณ
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="อธิบายปัญหา เป้าหมาย หรือระบบที่คุณอยากให้เราช่วยดู..."
                  className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#5A73C3] focus:border-transparent resize-none"
                  required
                />
              </div>

              {/* ปุ่มส่ง */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-full bg-[#0D278A] text-white text-sm font-semibold shadow-md hover:bg-[#0A1E6A] hover:shadow-lg transition"
                >
                  ส่งข้อความถึงทีมงาน
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
