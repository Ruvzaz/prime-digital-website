"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { TRANSITION_DURATION } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState(pathname);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const { isTransitioning: isLangTransitioning } = useLanguage();

  // Detect route change synchronously during render before browser paint
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setIsPageTransitioning(true);
  }

  useEffect(() => {
    if (isPageTransitioning) {
      const timer = setTimeout(() => {
        setIsPageTransitioning(false);
      }, TRANSITION_DURATION);

      return () => clearTimeout(timer);
    }
  }, [isPageTransitioning, pathname]);

  const showOverlay = isPageTransitioning || isLangTransitioning;

  return (
    <>
      {/* Transition Overlay - Immediate opacity 1 to prevent target page flash */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="fixed inset-0 z-[9998] flex items-center justify-center bg-[#F5F7FA]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="relative flex flex-col items-center gap-4">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Image
                  src="/images/prime-logo.png"
                  alt="Prime Digital Consultant"
                  width={120}
                  height={40}
                  className="w-32 md:w-40 h-auto object-contain"
                  priority
                />
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                className="h-1 w-24 bg-slate-200 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.15 }}
              >
                <motion.div
                  className="h-full bg-[#0D278A]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: TRANSITION_DURATION / 1000,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content - Hidden while overlay is active to prevent flash */}
      <div
        className={`transition-opacity duration-300 ${
          showOverlay ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
