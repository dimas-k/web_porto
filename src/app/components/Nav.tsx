'use client'

import { useEffect, useState } from 'react'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'

const items = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => setDark(document.documentElement.classList.contains('dark')), [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    setDark(next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch {}
  }

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="brut mx-auto flex max-w-6xl items-center justify-between bg-card px-3 py-2.5 shadow-[4px_4px_0_var(--ink)]">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="pop brut-sm font-display -rotate-3 bg-pop-yellow px-3 py-1.5 text-sm font-extrabold transition-transform hover:rotate-3"
        >
          dimas.dev
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => go(it.id)}
              className={`rounded-lg border-2 px-4 py-1.5 text-sm font-bold transition-colors ${
                active === it.id ? 'pop border-ink bg-pop-pink' : 'border-transparent hover:border-ink'
              }`}
            >
              {it.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle theme" className="brut-btn grid h-10 w-10 place-items-center bg-card">
            {dark ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="brut-btn grid h-10 w-10 place-items-center bg-card md:hidden">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="brut mx-auto mt-3 max-w-6xl bg-card p-2 md:hidden">
          {items.map((it) => (
            <button key={it.id} onClick={() => go(it.id)} className="font-display block w-full rounded-lg px-4 py-3 text-left text-xl font-bold hover:bg-pop-yellow hover:text-[#111]">
              {it.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
