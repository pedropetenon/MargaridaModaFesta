"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  className?: string;
}

export function Reveal({ 
  children, 
  width = "100%", 
  delay = 0.2, 
  duration = 0.8,
  y = 40,
  x = 0,
  className = ""
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={className} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y, x },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ 
            duration, 
            delay, 
            ease: [0.19, 1, 0.22, 1] // Custom luxury ease
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
