"use client"

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import type { PointerEvent, ReactNode } from "react"
import { cn } from "@/lib/utils"

const MAX_TILT = 5
const MAX_GLARE = 0.2
const spring = { stiffness: 260, damping: 26 }

// Reproduces the original vanilla-tilt setup (max 5°, glare 0.2, perspective 1000px).
export function Tilt({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion()
  const rotateX = useSpring(0, spring)
  const rotateY = useSpring(0, spring)
  const glareOpacity = useSpring(0, spring)
  const glareAngle = useMotionValue(0)
  const glare = useMotionTemplate`linear-gradient(${glareAngle}deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 100%)`

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || e.pointerType === "touch") return
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    rotateX.set(py * MAX_TILT * 2 - MAX_TILT)
    rotateY.set(MAX_TILT - px * MAX_TILT * 2)
    glareOpacity.set(py * MAX_GLARE)
    glareAngle.set((Math.atan2(px - 0.5, -(py - 0.5)) * 180) / Math.PI)
  }

  function onPointerLeave() {
    rotateX.set(0)
    rotateY.set(0)
    glareOpacity.set(0)
  }

  return (
    <motion.div
      className={cn("relative", className)}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 rounded-card"
        style={{ backgroundImage: glare, opacity: glareOpacity }}
      />
    </motion.div>
  )
}
