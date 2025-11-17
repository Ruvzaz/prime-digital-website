export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">

      {/* 1) Header */}
      <section className="bg-gradient-to-br from-[#EEF2FF] to-[#FFFFFF] border-b border-[#D3DAF6]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#5A73C3] uppercase">
            ABOUT
          </p>

          {/* ✔ Title ขนาดตรงหน้า SERVICES */}
          <h1 className="mt-2 text-2xl md:text-3xl font-semibold text-[#000000]">
            Prime Digital Consultant Co., Ltd.
          </h1>

          {/* ✔ Paragraph ตรง */}
          <p className="mt-3 text-sm text-[#4B5563] max-w-2xl">
            พาร์ตเนอร์ด้านดิจิทัลที่ช่วยองค์กรวางกลยุทธ์ ออกแบบ และพัฒนาระบบ
            พร้อมทีมงานมืออาชีพที่เข้าใจทั้งธุรกิจ การตลาด และเทคโนโลยี
          </p>
        </div>
      </section>

      {/* 2) About Company */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-[1.4fr_1fr] gap-10">

          <div className="space-y-5">
            {/* ✔ Section subtitle */}
            <h2 className="text-xl md:text-2xl font-semibold text-[#000000]">
              เราคือที่ปรึกษาด้านดิจิทัลแบบครบวงจร
            </h2>

            {/* ✔ Paragraph */}
            <p className="text-sm md:text-base text-[#4B5563] leading-relaxed">
              Prime Digital Consultant Co., Ltd. เป็นบริษัทที่ให้คำปรึกษาด้านดิจิทัลแบบครบวงจร—
              ตั้งแต่การวางกลยุทธ์ดิจิทัล การตลาดออนไลน์ การพัฒนาระบบแอปและเว็บไซต์
              จัดการสื่อโซเชียล ไปจนถึงการวิเคราะห์ข้อมูลเชิงลึกเพื่อขับเคลื่อนองค์กร.
            </p>

            <p className="text-sm md:text-base text-[#4B5563] leading-relaxed">
              เรามุ่งเน้นการนำเทคโนโลยีที่เหมาะสมมาปรับใช้จริง ไม่ขายของเกินจำเป็น
              และเน้นการปรับให้เข้ากับบริบทของแต่ละองค์กร.
            </p>
          </div>

          {/* right box */}
          <aside className="bg-white rounded-2xl border border-[#B0BBDF] shadow-md p-6">
            <h3 className="text-sm font-semibold text-[#0D278A] mb-3">
              เราช่วยองค์กรแบบไหน?
            </h3>

            <ul className="space-y-2 text-xs md:text-sm text-[#4B5563]">
              <li>• องค์กรที่ต้องการวางกลยุทธ์ดิจิทัล</li>
              <li>• หน่วยงานที่กำลังพัฒนาระบบใหม่</li>
              <li>• ทีมที่ต้องการใช้ข้อมูลและ Dashboard</li>
              <li>• ธุรกิจที่ต้องการยกระดับการตลาดออนไลน์</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* 3) จุดเด่น */}
      <section className="py-12 bg-[#EEF2FF] border-y border-[#D3DAF6]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          {/* ✔ Section Title ต้องเป็น 2xl / 3xl */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#000000] mb-8">
            จุดเด่นของ Prime Digital Consultant
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="bg-white border border-[#B0BBDF] shadow-sm rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-[#0D278A] mb-2">
                ทีมงานมืออาชีพ
              </h3>
              <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                เชี่ยวชาญทั้งด้านการตลาด เทคโนโลยี และข้อมูล
                พร้อมประสบการณ์ทำงานกับองค์กรรัฐบาลและเอกชน.
              </p>
            </article>

            <article className="bg-white border border-[#B0BBDF] shadow-sm rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-[#0D278A] mb-2">
                การบริการใกล้ชิด ยืดหยุ่น
              </h3>
              <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                ดูแลแบบพาร์ตเนอร์ เข้าใจบริบทจริงของลูกค้า
                และปรับแผนงานให้สอดคล้องกับสถานการณ์.
              </p>
            </article>

            <article className="bg-white border border-[#B0BBDF] shadow-sm rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-[#0D278A] mb-2">
                เทคโนโลยีและนวัตกรรมที่เหมาะสม
              </h3>
              <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                เลือกใช้เฉพาะเทคโนโลยีที่ตอบโจทย์และยั่งยืน
                ไม่เน้นขายของ ไม่เน้นของเกินจำเป็น.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 4) Mindset + Team */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-[1.3fr_1.1fr] gap-10">

          <div className="space-y-4">
            {/* ✔ Title ระดับ section */}
            <h2 className="text-xl md:text-2xl font-semibold text-[#000000]">
              วิธีคิดในการทำงานของเรา
            </h2>

            <p className="text-sm md:text-base text-[#4B5563] leading-relaxed">
              เราเชื่อว่าดิจิทัลคือเครื่องมือ ไม่ใช่คำตอบทั้งหมด
              แต่หากใช้อย่างถูกวิธีจะช่วยให้องค์กรเดินไปข้างหน้าอย่างมั่นคง.
            </p>

            <p className="text-sm md:text-base text-[#4B5563] leading-relaxed">
              ทุกโปรเจกต์ของเรามีพื้นฐานจากข้อมูลจริง การทดลอง
              และการปรับปรุงอย่างต่อเนื่อง เพื่อให้ระบบอยู่ได้ในระยะยาว.
            </p>
          </div>

          <div className="bg-white border border-[#B0BBDF] rounded-2xl shadow p-6 space-y-4">
            <h3 className="text-sm font-semibold text-[#0D278A]">ทีมของเรา</h3>

            <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
              ทีมงานประกอบด้วยที่ปรึกษา นักวิเคราะห์ และฝ่ายเทคนิค
              พร้อมประสบการณ์จากหลากหลายอุตสาหกรรมและภาครัฐ.
            </p>

            <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
              ส่วนนี้สามารถเพิ่มภาพทีม บทบาท หรือโปรไฟล์สมาชิกภายหลังได้
              เพื่อให้ลูกค้ามองเห็นภาพมากขึ้น.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
