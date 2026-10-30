'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUpRight, FiCalendar, FiUsers, FiUser, FiX } from 'react-icons/fi'
import { projects, projectMeta, type Tag } from '@/data/projects'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'

const filters: ('All' | Tag)[] = ['All', 'Web', 'AI/ML', 'Mobile']

export default function Projects() {
  const [filter, setFilter] = useState<'All' | Tag>('All')
  const [open, setOpen] = useState<number | null>(null)

  const visible = projects
    .map((p, i) => ({ p, m: projectMeta[i], i }))
    .filter(({ m }) => filter === 'All' || m.tags.includes(filter))

  useEffect(() => {
    if (open === null) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <section id="projects" className="py-24">
      <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
            Projects that <span className="text-grad">ship</span>.
          </h2>
        </div>

        <div className="flex w-fit gap-1 rounded-2xl border border-edge bg-surface p-1 backdrop-blur">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="relative rounded-xl px-4 py-2 text-sm font-semibold"
            >
              {filter === f && (
                <motion.span layoutId="filter-pill" className="bg-grad absolute inset-0 rounded-xl" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />
              )}
              <span className={`relative ${filter === f ? 'text-black' : 'text-muted'}`}>{f}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map(({ p, m, i }, idx) => (
            <motion.button
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              onClick={() => setOpen(i)}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
              }}
              className="tile group flex flex-col text-left"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-edge">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: m.focus ?? 'center' }}
                />
                <div className="absolute inset-0 z-[2] bg-gradient-to-t from-bg/60 to-transparent" />
                <span className="mono absolute left-4 top-4 z-[2] rounded-full bg-bg/70 px-3 py-1 text-[0.65rem] backdrop-blur">
                  {m.year}
                </span>
                <span className="absolute right-4 top-4 z-[2] grid h-9 w-9 place-items-center rounded-full bg-grad text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <FiArrowUpRight />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="mono text-[0.68rem] text-a1">{m.category}</p>
                <h3 className="mt-2 text-xl font-bold leading-tight tracking-tight">{m.short}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {p.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="mono rounded-full border border-edge px-2.5 py-1 text-[0.65rem] text-muted">
                      {t}
                    </span>
                  ))}
                  {p.technologies.length > 3 && (
                    <span className="mono px-1 py-1 text-[0.65rem] text-muted">+{p.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {open !== null && <Modal key="modal" i={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  )
}

function Modal({ i, onClose }: { i: number; onClose: () => void }) {
  const p = projects[i]
  const m = projectMeta[i]

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center p-3 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={p.title}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-edge bg-bg shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="sticky top-4 z-10 float-right mr-4 mt-4 grid h-10 w-10 place-items-center rounded-full border border-edge bg-bg/80 backdrop-blur transition-colors hover:bg-fg/10"
        >
          <FiX />
        </button>

        <div className="relative -mt-14 aspect-[16/8] w-full overflow-hidden">
          <Image src={p.image} alt={p.title} fill sizes="900px" className="object-cover" style={{ objectPosition: m.focus ?? 'center' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
        </div>

        <div className="-mt-16 relative px-6 pb-10 sm:px-10">
          <p className="mono text-xs text-a1">{m.category}</p>
          <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">{p.title}</h2>

          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {[
              [FiCalendar, p.date],
              [FiUser, p.role],
              [FiUsers, p.teamSize],
            ].map(([Icon, text], k) => {
              const I = Icon as typeof FiCalendar
              return (
                <span key={k} className="inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-4 py-2 text-muted">
                  <I className="text-a1" /> {text as string}
                </span>
              )
            })}
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-5">
            <div className="space-y-8 md:col-span-3">
              <Section title="Overview"><p className="leading-relaxed text-muted">{p.fullDescription}</p></Section>
              <Section title="My role"><p className="leading-relaxed text-muted">{p.myTask}</p></Section>
            </div>
            <div className="space-y-8 md:col-span-2">
              <Section title="Key features">
                <ul className="space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="bg-grad mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Section>
            </div>
          </div>

          <Section title="Challenge → Solution" className="mt-10">
            <div className="space-y-3">
              {p.challenges.map((c, k) => (
                <div key={c} className="grid overflow-hidden rounded-2xl border border-edge sm:grid-cols-2">
                  <div className="bg-surface p-4 text-sm">
                    <span className="mono mb-1 block text-[0.65rem] text-a3">Challenge</span>
                    {c}
                  </div>
                  <div className="border-t border-edge p-4 text-sm sm:border-l sm:border-t-0" style={{ background: 'color-mix(in srgb, var(--a1) 10%, transparent)' }}>
                    <span className="mono mb-1 block text-[0.65rem] text-a1">Solution</span>
                    {p.solutions[k]}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Tech stack" className="mt-10">
            <div className="flex flex-wrap gap-2">
              {p.technologies.map((t) => (
                <span key={t} className="mono rounded-full border border-edge bg-surface px-3 py-1.5 text-xs">{t}</span>
              ))}
            </div>
          </Section>
        </div>
      </motion.div>
    </div>
  )
}

function Section({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h3 className="mono mb-3 text-xs uppercase tracking-wider text-muted">{title}</h3>
      {children}
    </div>
  )
}
