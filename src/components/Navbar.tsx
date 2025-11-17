import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

        {/* Logo (คุณสามารถใช้ next/image ที่หลังได้) */}
        <Link href="/" className="font-bold text-[#0D278A]">
          PDC
        </Link>

        <nav className="flex items-center gap-6 text-sm text-[#4B5563]">
          <Link href="/" className="hover:text-[#0D278A]">
            Home
          </Link>
          <Link href="/services" className="hover:text-[#0D278A]">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-[#0D278A]">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-[#0D278A]">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#0D278A]">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
