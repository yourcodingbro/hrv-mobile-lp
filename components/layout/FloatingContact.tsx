"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Phone } from "lucide-react"
import { useState } from "react"
import { site } from "@/lib/site"

const item =
  "flex items-center gap-2 rounded-full border border-black/5 bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none dark:border-white/10 dark:bg-graphite dark:text-white dark:shadow-black/40"

export function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed right-8 bottom-8 z-50 flex flex-col items-end gap-4">
      <motion.div
        id="fab-menu"
        className="invisible flex flex-col gap-2.5"
        initial={false}
        animate={open ? { opacity: 1, y: 0, visibility: "visible" } : { opacity: 0, y: 20, transitionEnd: { visibility: "hidden" } }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <a href={site.phone.href} className={item}>
          <Phone aria-hidden="true" className="size-4" /> Hívás
        </a>
        <a href={site.email.href} className={item}>
          <Mail aria-hidden="true" className="size-4" /> E-mail
        </a>
      </motion.div>
      <button
        type="button"
        aria-label="Kapcsolat"
        aria-expanded={open}
        aria-controls="fab-menu"
        onClick={() => setOpen((o) => !o)}
        className="flex size-14 cursor-pointer items-center justify-center rounded-full bg-black text-white shadow-xl transition-transform duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-white dark:text-black"
      >
        <MessageCircle aria-hidden="true" className="size-6" />
      </button>
    </div>
  )
}
