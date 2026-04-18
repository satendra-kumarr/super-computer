"use client";

import { motion } from 'framer-motion';
import { ReactNode, ElementType } from 'react';

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "header";
}) {
  const Component = as === "section" ? motion.section : as === "header" ? motion.header : motion.div;
  return (
    <Component
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Component>
  );
}
