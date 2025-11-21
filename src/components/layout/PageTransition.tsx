"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type PageTransitionProps = {
  children: ReactNode;
};

import { TRANSITION_DURATION } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const { isTransitioning: isLangTransitioning } = useLanguage();
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  useEffect(() => {
    // เมื่อ pathname เปลี่ยน แสดงหน้าจอ transition
    setIsPageTransitioning(true);
    
    const timer = setTimeout(() => {
      setIsPageTransitioning(false);
    }, TRANSITION_DURATION);

    return () => clearTimeout(timer);
  }, [pathname]);

  const showOverlay = isPageTransitioning || isLangTransitioning;

  return (
    <>
      {/* Transition Overlay (คล้าย Preloader) */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="fixed inset-0 z-[9998] flex items-center justify-center bg-[#F5F7FA]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="relative flex flex-col items-center gap-4">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Image
                  src="/images/prime-logo.png"
                  alt="Prime Digital Consultant"
                  width={120}
                  height={40}
                  className="w-32 md:w-40 h-auto object-contain"
                />
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                className="h-1 w-24 bg-gray-200 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                <motion.div
                  className="h-full bg-[#0D278A]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          className={pathname === "/" ? "" : "pt-10 md:pt-12"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
