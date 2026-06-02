"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollFadeIn({ children, className = "", delay = 0 }: ScrollFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
