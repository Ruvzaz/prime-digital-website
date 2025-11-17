"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

type SmoothScrollProps = {
  children: ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // สร้าง instance ของ Lenis
    const lenis = new Lenis({
      // ระยะเวลาความลื่น (ลองเล่นได้ 0.8–1.4)
      duration: 1.2,
      // เปิดให้ล้อเมาส์ลื่น
      smoothWheel: true,
      
    });

    // loop ให้ Lenis ทำงานทุก frame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // cleanup เวลา component ถูก unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
