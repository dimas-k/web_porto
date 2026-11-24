'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { pages } from './nav'

const track = (e: React.MouseEvent<HTMLElement>) => {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function Dock() {
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 160, damping: 16, delay: 0.2 }}
      className="fixed left-1/2 top-3 z-50 -translate-x-1/2 sm:top-4"
      aria-label="Primary"
    >
      <div onMouseMove={track} className="glow flex items-center rounded-full border border-edge bg-bg/70 p-1 shadow-xl shadow-black/10 backdrop-blur-2xl sm:gap-0.5 sm:p-1.5">
        {pages.map(({ href, label, icon: Icon }) => {
          const on = pathname === href
          return (
            <Link
              key={href}
              href={href}
              aria-label={label}
              aria-current={on ? 'page' : undefined}
              onMouseMove={track}
              className="glow glow-sm group relative flex h-9 items-center justify-center rounded-full px-2.5 md:h-10 md:px-4"
            >
              {on && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-grad"
                  transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                />
              )}
              <Icon size={17} className={`relative transition-transform group-hover:scale-110 md:hidden ${on ? 'text-black' : 'text-muted group-hover:text-fg'}`} />
              <span className={`relative hidden text-sm font-semibold transition-colors md:inline ${on ? 'text-black' : 'text-muted group-hover:text-fg'}`}>{label}</span>
            </Link>
          )
        })}
        <span className="mx-0.5 h-5 w-px bg-edge sm:mx-1" />
        <ThemeToggle />
      </div>
    </motion.nav>
  )
}
