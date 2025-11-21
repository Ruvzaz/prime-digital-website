import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20">
      {/* 1) Header / Hero Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 mb-16 md:mb-24 text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-[#0D278A] uppercase mb-4">
          ABOUT US
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Prime Digital Consultant Co., Ltd.
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          พาร์ตเนอร์ด้านดิจิทัลที่ช่วยองค์กรวางกลยุทธ์ ออกแบบ และพัฒนาระบบ
          พร้อมทีมงานมืออาชีพที่เข้าใจทั้งธุรกิจ การตลาด และเทคโนโลยี
        </p>
      </section>

      {/* 2) About Company & Services */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              เราคือที่ปรึกษาด้านดิจิทัลแบบครบวงจร
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Prime Digital Consultant Co., Ltd. เป็นบริษัทที่ให้คำปรึกษาด้านดิจิทัลแบบครบวงจร
                ตั้งแต่การวางกลยุทธ์ดิจิทัล การตลาดออนไลน์ การพัฒนาระบบแอปและเว็บไซต์
                จัดการสื่อโซเชียล ไปจนถึงการวิเคราะห์ข้อมูลเชิงลึกเพื่อขับเคลื่อนองค์กร.
              </p>
              <p>
                เรามุ่งเน้นการนำเทคโนโลยีที่เหมาะสมมาปรับใช้จริง ไม่ขายของเกินจำเป็น
                และเน้นการปรับให้เข้ากับบริบทของแต่ละองค์กร.
              </p>
            </div>
          </div>

          {/* Right Box (Card Style) */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100">
            <h3 className="text-lg font-bold text-[#0D278A] mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#0D278A] rounded-full"></span>
              เราช่วยองค์กรแบบไหน?
            </h3>
            <ul className="space-y-4">
              {[
                "องค์กรที่ต้องการวางกลยุทธ์ดิจิทัล",
                "หน่วยงานที่กำลังพัฒนาระบบใหม่",
                "ทีมที่ต้องการใช้ข้อมูลและ Dashboard",
                "ธุรกิจที่ต้องการยกระดับการตลาดออนไลน์",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <svg
                    className="w-5 h-5 text-[#0D278A] mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3) จุดเด่น (Highlights) */}
      <section className="bg-white py-20 mb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              จุดเด่นของ Prime Digital Consultant
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "ทีมงานมืออาชีพ",
                desc: "เชี่ยวชาญทั้งด้านการตลาด เทคโนโลยี และข้อมูล พร้อมประสบการณ์ทำงานกับองค์กรรัฐบาลและเอกชน.",
              },
              {
                title: "การบริการใกล้ชิด ยืดหยุ่น",
                desc: "ดูแลแบบพาร์ตเนอร์ เข้าใจบริบทจริงของลูกค้า และปรับแผนงานให้สอดคล้องกับสถานการณ์.",
              },
              {
                title: "เทคโนโลยีและนวัตกรรมที่เหมาะสม",
                desc: "เลือกใช้เฉพาะเทคโนโลยีที่ตอบโจทย์และยั่งยืน ไม่เน้นขายของ ไม่เน้นของเกินจำเป็น.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#F5F7FA] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-[#0D278A] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Mindset & Team */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mindset */}
          <div className="bg-gradient-to-br from-[#0D278A] to-[#06154B] rounded-3xl p-8 md:p-10 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-6">วิธีคิดในการทำงานของเรา</h2>
            <div className="space-y-6 text-white/90 leading-relaxed">
              <p>
                "เราเชื่อว่าดิจิทัลคือเครื่องมือ ไม่ใช่คำตอบทั้งหมด
                แต่หากใช้อย่างถูกวิธีจะช่วยให้องค์กรเดินไปข้างหน้าอย่างมั่นคง"
              </p>
              <p>
                ทุกโปรเจกต์ของเรามีพื้นฐานจากข้อมูลจริง การทดลอง
                และการปรับปรุงอย่างต่อเนื่อง เพื่อให้ระบบอยู่ได้ในระยะยาว
              </p>
            </div>
          </div>

          {/* Team */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">ทีมของเรา</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              ทีมงานประกอบด้วยที่ปรึกษา นักวิเคราะห์ และฝ่ายเทคนิค
              พร้อมประสบการณ์จากหลากหลายอุตสาหกรรมและภาครัฐ
            </p>
            <p className="text-sm text-gray-400 italic">
              * ส่วนนี้สามารถเพิ่มภาพทีม บทบาท หรือโปรไฟล์สมาชิกภายหลังได้
              เพื่อให้ลูกค้ามองเห็นภาพมากขึ้น
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
