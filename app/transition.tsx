"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        className="md:p-0 md:h-auto md:pt-20 overflow-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
