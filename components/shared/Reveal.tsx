"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Start offset in px; 0 for a pure fade (the original's tilt cards only fade). */
  y?: number
}

// Mirrors the original `.reveal` (IntersectionObserver, threshold .15, -50px bottom margin).
// CSS in globals.css forces [data-reveal] visible for no-JS and prefers-reduced-motion.
export function Reveal({ children, className, delay = 0, y = 40 }: RevealProps) {
  return (
    <motion.div
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
