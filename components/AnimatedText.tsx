"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
  once?: boolean;
}

export function AnimatedText({
  text,
  className,
  once = false,
}: AnimatedTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textArray = Array.isArray(text) ? text : [text];

  useEffect(() => {
    if (Array.isArray(text) && !once) {
      const interval = setInterval(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [text, textArray.length, once]);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.05 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "inline-block" }}
      variants={container}
      initial="hidden"
      animate="visible"
      key={currentTextIndex}
      className={cn("inline-block", className)}
    >
      {textArray[currentTextIndex].split("").map((char, index) => (
        <motion.span key={`${char}-${index}`} variants={child} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}