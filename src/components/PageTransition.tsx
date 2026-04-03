"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Force scroll to top on route change to fix the heading visibility issue
    // Next.js scroll restoration can conflict with smooth scrolling CSS
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex-1 flex flex-col w-full h-full"
    >
      {children}
    </motion.div>
  );
}
