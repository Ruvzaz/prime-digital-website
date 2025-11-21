import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0D278A] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-12">
          {/* 1) Brand / Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 bg-white/10 w-fit px-4 py-2 rounded-xl backdrop-blur-sm">
               {/* Note: Using a white version of logo or filter if needed. 
                   For now, using text or assuming the image works on dark if it's transparent. 
                   Ideally, use a white-text logo variant. */}
              <span className="text-xl font-bold tracking-wide">PRIME DIGITAL</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              พาร์ตเนอร์ด้านดิจิทัลที่ช่วยองค์กรวางกลยุทธ์ ออกแบบ และพัฒนาระบบ
              พร้อมทีมงานมืออาชีพที่เข้าใจทั้งธุรกิจ การตลาด และเทคโนโลยี
            </p>
          </div>

          {/* 2) Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">เมนู</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  หน้าแรก (Home)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  บริการของเรา (Services)
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  ผลงาน (Portfolio)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  เกี่ยวกับเรา (About)
                </Link>
              </li>
            </ul>
          </div>

          {/* 3) Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">ติดต่อเรา</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <span className="opacity-70">Email:</span>
                <a href="mailto:contact@primedigital.co.th" className="hover:text-white transition-colors">
                  contact@primedigital.co.th
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="opacity-70">Tel:</span>
                <a href="tel:02-123-4567" className="hover:text-white transition-colors">
                  02-123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="opacity-70">Address:</span>
                <span>
                  123 Prime Tower, Sukhumvit Road,
                  <br />
                  Bangkok, Thailand 10110
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Prime Digital Consultant Co., Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
