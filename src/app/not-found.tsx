import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 404 Number */}
        <h1 className="text-[120px] md:text-[180px] font-bold text-[#0D278A] leading-none opacity-20">
          404
        </h1>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            ไม่พบหน้าที่คุณต้องการ
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto">
            หน้าที่คุณกำลังมองหาอาจถูกย้ายหรือไม่มีอยู่อีกต่อไปแล้ว
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#0D278A] text-white text-sm font-semibold hover:bg-[#0A1E6A] transition-colors"
          >
            ← กลับหน้าแรก
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition-colors"
          >
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </main>
  );
}
