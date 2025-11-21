"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">


      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3">
        {/* เม็ดแคปซูลหลัก */}
        <div className="bg-white/90 backdrop-blur-md rounded-full border border-white/20 shadow-sm flex items-center justify-between gap-2 px-4 md:px-6 h-14 md:h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/prime-logo.png"
              alt="Prime Digital Consultant"
              width={120}
              height={40}
              className="h-16 md:h-24 w-auto object-contain"
            />
          </Link>

          {/* NAV LINKS – เฉพาะจอใหญ่ */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4B5563]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#0D278A] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button – เฉพาะจอใหญ่ */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-[#0D278A] to-[#2563EB] text-white text-xs md:text-sm font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition"
            >
              นัดหมายปรึกษา
            </Link>
          </div>

          {/* HAMBURGER – เฉพาะมือถือ */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#E5E7EB] text-[#111827] hover:bg-[#F3F4F6] transition"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle navigation</span>
            {/* ไอคอน 3 ขีดง่าย ๆ */}
            <div className="space-y-[5px]">
              <span
                className={`block h-[2px] w-5 rounded-full bg-[#111827] transition-transform ${
                  open ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-[#111827] transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-[#111827] transition-transform ${
                  open ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU แบบกล่องเล็กมุมขวา */}
      {open && (
        <div className="md:hidden fixed inset-0 z-30" onClick={() => setOpen(false)}>
          {/* คลิกพื้นหลังปิดเมนู */}
          <div className="absolute inset-0 bg-black/20" />

          {/* กล่องเมนูมุมขวาบน */}
          <div
            className="absolute top-16 right-4 w-56 bg-white rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.18)] border border-[#E5E7EB] p-4 space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-2 text-sm text-[#111827]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-1 hover:text-[#0D278A] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <hr className="border-[#E5E7EB]" />

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center w-full px-4 py-2 rounded-full bg-gradient-to-r from-[#0D278A] to-[#2563EB] text-white text-xs font-semibold shadow-md"
            >
              นัดหมายปรึกษา
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
