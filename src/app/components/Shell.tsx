'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiMoon, FiSearch, FiSun, FiX } from 'react-icons/fi'
import { VscSourceControl, VscCheck } from 'react-icons/vsc'
import { projectMeta } from '@/data/projects'
import Explorer from './Explorer'
import CommandPalette, { type Command } from './CommandPalette'

const sections = ['home', 'about', 'projects', 'skills', 'contact']
const EMAIL = 'dimasarya81821@gmail.com'

export default function Shell({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState('home')
  const [dark, setDark] = useState(false)
  const [menu, setMenu] = useState(false)
  const [palette, setPalette] = useState(false)
  const [pct, setPct] = useState(0)

  useEffect(() => setDark(document.documentElement.classList.contains('dark')), [])

  const toggleTheme = useCallback(() => {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    setDark(next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch {}
  }, [])

  const go = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenu(false)
  }, [])

  const openProject = useCallback((i: number) => {
    setMenu(false)
    window.dispatchEvent(new CustomEvent('open-project', { detail: i }))
  }, [])

  // active section
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  // scroll progress
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setPct(max > 0 ? Math.round((window.scrollY / max) * 100) : 0)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ctrl/Cmd + K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPalette((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const commands: Command[] = useMemo(
    () => [
      { id: 'home', label: 'Go to home.tsx', hint: 'section', run: () => go('home') },
      { id: 'about', label: 'Go to about.md', hint: 'section', run: () => go('about') },
      { id: 'projects', label: 'Go to projects/', hint: 'section', run: () => go('projects') },
      ...projectMeta.map((m, i) => ({ id: m.file, label: `Open ${m.short}`, hint: m.file, run: () => openProject(i) })),
      { id: 'skills', label: 'Go to skills.json', hint: 'section', run: () => go('skills') },
      { id: 'contact', label: 'Go to contact.sh', hint: 'section', run: () => go('contact') },
      { id: 'cv', label: 'Download CV', hint: 'pdf', run: () => window.open('/file/Dimas_Arya_Ramadhan_Setiawan.pdf', '_blank') },
      { id: 'email', label: 'Copy email address', hint: EMAIL, run: () => navigator.clipboard?.writeText(EMAIL) },
      { id: 'theme', label: 'Toggle light / dark theme', hint: 'theme', run: toggleTheme },
    ],
    [go, openProject, toggleTheme]
  )

  return (
    <div>
      {/* title bar */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-11 items-center justify-between border-b border-line bg-panel/90 px-3 backdrop-blur">
        <div className="flex items-center gap-3">
          <button onClick={() => setMenu(!menu)} aria-label="Toggle explorer" className="grid h-8 w-8 place-items-center rounded-md hover:bg-panel2 lg:hidden">
            {menu ? <FiX /> : <FiMenu />}
          </button>
          <div className="hidden items-center gap-1.5 lg:flex" aria-hidden>
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
        </div>

        <button
          onClick={() => setPalette(true)}
          className="mono flex w-[min(24rem,52vw)] items-center justify-between gap-2 rounded-md border border-line bg-bg px-3 py-1.5 text-xs text-muted transition-colors hover:text-fg"
        >
          <span className="flex items-center gap-2 truncate"><FiSearch /> dimas-arya / portfolio</span>
          <span className="hidden sm:inline"><span className="kbd">Ctrl</span> <span className="kbd">K</span></span>
        </button>

        <button onClick={toggleTheme} aria-label="Toggle theme" className="grid h-8 w-8 place-items-center rounded-md hover:bg-panel2">
          {dark ? <FiSun /> : <FiMoon />}
        </button>
      </header>

      {/* desktop sidebar */}
      <aside className="fixed bottom-7 left-0 top-11 z-40 hidden w-64 overflow-y-auto border-r border-line bg-panel lg:block">
        <Explorer active={active} onGo={go} onProject={openProject} />
      </aside>

      {/* mobile drawer */}
      <AnimatePresence>
        {menu && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMenu(false)} className="fixed inset-0 z-40 bg-black/40 lg:hidden" />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
              className="fixed bottom-7 left-0 top-11 z-50 w-72 overflow-y-auto border-r border-line bg-panel lg:hidden"
            >
              <Explorer active={active} onGo={go} onProject={openProject} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main className="pb-16 pt-11 lg:pl-64">{children}</main>

      {/* status bar */}
      <footer className="mono fixed inset-x-0 bottom-0 z-50 flex h-7 items-center justify-between bg-accent px-3 text-[0.68rem] text-accent-fg">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><VscSourceControl /> main</span>
          <span className="flex items-center gap-1.5"><VscCheck /> open to work</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Indramayu, ID</span>
          <span>{pct}%</span>
          <span className="hidden sm:inline">UTF-8</span>
          <span className="hidden md:inline">TypeScript React</span>
        </div>
      </footer>

      <CommandPalette open={palette} onClose={() => setPalette(false)} commands={commands} />
    </div>
  )
}
