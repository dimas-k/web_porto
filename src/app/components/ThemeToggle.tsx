'use client'

import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="grid h-9 w-9 place-items-center rounded-full sm:h-10 sm:w-10 text-muted transition-all hover:bg-fg/10 hover:text-fg"
    >
      {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  )
}
