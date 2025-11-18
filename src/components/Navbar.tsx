"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[#E5E7EB]">
      {/* แถวบน: โลโก้ + เมนู (desktop) + ปุ่ม hamburger (mobile) */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        {/* LOGO / BRAND */}
        <Link href="/" className="text-base md:text-lg font-semibold tracking-wide text-[#0D278A]">
          <Image
          src="/images/prime-logo.png"         // 👉 เปลี่ยนเป็น path ของโลโก้คุณ
    alt="Prime Digital Consultant Logo"
    width={120}             // 👉 ปรับขนาดตามต้องการ
    height={40}
    className="object-contain"
          />
        </Link>

        {/* เมนูปกติ (แสดงเฉพาะ >= md) */}
        <div className="hidden md:flex items-center gap-6 text-sm text-[#4B5563]">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-[#0D278A] transition ${
                  isActive ? "text-[#0D278A] font-semibold" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* ปุ่ม Hamburger (แสดงเฉพาะ < md) */}
        <button
          type="button"
          className="md:hidden inline-flex flex-col justify-center items-center w-9 h-9 rounded-full border border-[#D1D5DB] bg-white shadow-sm"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-4 h-0.5 rounded-full bg-[#111827] transition-transform ${
              isOpen ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-4 h-0.5 rounded-full bg-[#111827] my-0.5 transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-4 h-0.5 rounded-full bg-[#111827] transition-transform ${
              isOpen ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Overlay Menu */}
{isOpen && (
  <div className="absolute right-0 top-14 md:hidden z-40">
    <div className="w-48 rounded-2xl bg-white/95 shadow-[0_18px_40px_rgba(15,23,42,0.18)] border border-[#E5E7EB] py-2">
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-2.5 text-sm text-left rounded-xl ${
              isActive
                ? "bg-[#EEF2FF] text-[#0D278A] font-semibold"
                : "text-[#4B5563] hover:bg-[#F3F4F6]"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  </div>
)}
    </nav>
  );
}
