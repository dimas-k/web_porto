'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiHome, FiUser, FiBriefcase, FiLayers, FiCpu, FiAward, FiMail } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const items = [
  { id: 'home', label: 'Home', icon: FiHome },
  { id: 'about', label: 'About', icon: FiUser },
  { id: 'experience', label: 'Experience', icon: FiBriefcase },
  { id: 'projects', label: 'Work', icon: FiLayers },
  { id: 'skills', label: 'Stack', icon: FiCpu },
  { id: 'certifications', label: 'Certificates', icon: FiAward },
  { id: 'contact', label: 'Contact', icon: FiMail },
]

export default function Dock() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2"
      aria-label="Primary"
    >
      <div className="flex items-center gap-0.5 rounded-3xl sm:gap-1 border border-edge bg-bg/70 p-1.5 shadow-2xl shadow-black/20 backdrop-blur-2xl">
        {items.map(({ id, label, icon: Icon }) => {
          const on = active === id
          return (
            <button
              key={id}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              aria-label={label}
              className="group relative grid h-10 w-10 place-items-center rounded-2xl sm:h-11 sm:w-11"
            >
              {on && (
                <motion.span
                  layoutId="dock-active"
                  className="absolute inset-0 rounded-2xl bg-grad"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <Icon size={18} className={`relative transition-colors ${on ? 'text-black' : 'text-muted group-hover:text-fg'}`} />
              <span className="mono pointer-events-none absolute -top-9 rounded-lg border border-edge bg-bg px-2 py-1 text-[0.65rem] opacity-0 transition-all group-hover:-top-10 group-hover:opacity-100">
                {label}
              </span>
            </button>
          )
        })}
        <span className="mx-1 h-6 w-px bg-edge" />
        <ThemeToggle />
      </div>
    </motion.nav>
  )
}
