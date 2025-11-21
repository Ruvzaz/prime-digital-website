"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // จำลองเวลาโหลด หรือรอให้หน้าเว็บพร้อม
    // ในโปรเจกต์จริงอาจจะใช้ window.onload หรือรอ asset หลัก
    // แต่สำหรับ splash screen เพื่อความสวยงาม 1.5 - 2 วินาทีกำลังดี
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F5F7FA]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center gap-4">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/prime-logo.png"
                alt="Prime Digital Consultant"
                width={180}
                height={60}
                className="w-48 md:w-56 h-auto object-contain"
                priority
              />
            </motion.div>

            {/* Loading Bar / Text (Optional) */}
            <motion.div
              className="h-1 w-32 bg-gray-200 rounded-full overflow-hidden mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.div
                className="h-full bg-[#0D278A]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
