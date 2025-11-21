"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className={pathname === "/" ? "" : "pt-10 md:pt-12"}
        // ฉากใหม่เริ่มแบบเบลอ + scale เล็กน้อย
        initial={{ opacity: 1, scale: 1,filter: "blur(0.5px)" }}
        // แล้วค่อย ๆ ชัด + ขยายเต็ม
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        // ตอนออกให้ละลายเบา ๆ เหมือนผ่านกระจก
        exit={{ opacity: 1, scale: 1, filter: "blur(0.6px)" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
