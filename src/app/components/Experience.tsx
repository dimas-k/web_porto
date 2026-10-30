'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronDown, FiMapPin } from 'react-icons/fi'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'
import Tile from './Tile'
import { experiences, type ExperienceType } from '@/data/experience'

const filters: ('All' | ExperienceType)[] = ['All', 'Startup', 'Internship', 'Research', 'Lead', 'Program', 'Project']
const PREVIEW = 2

export default function Experience() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const [open, setOpen] = useState<Set<string>>(new Set())

  const list = experiences.filter((e) => filter === 'All' || e.type === filter)
  const toggle = (key: string) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })

  return (
    <section id="experience" className="py-24">
      <Reveal className="mb-10">
        <Eyebrow>Experience</Eyebrow>
        <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
          Where I&apos;ve <span className="text-grad">built things</span>.
        </h2>
      </Reveal>

      <Reveal delay={0.05} className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`mono rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
              filter === f ? 'border-transparent bg-grad font-semibold text-black' : 'border-edge text-muted hover:border-a1 hover:text-fg'
            }`}
          >
            {f}
          </button>
        ))}
      </Reveal>

      <div className="relative">
        <span aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px bg-edge sm:left-[9px]" />
        <ol className="space-y-5">
          <AnimatePresence mode="popLayout">
            {list.map((e) => {
              const key = `${e.org}-${e.role}`
              const isOpen = open.has(key)
              const shown = isOpen ? e.bullets : e.bullets.slice(0, PREVIEW)
              const hidden = e.bullets.length - PREVIEW

              return (
                <motion.li
                  key={key}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                  className="relative pl-8 sm:pl-11"
                >
                  <span
                    aria-hidden
                    className={`absolute left-0 top-7 h-[15px] w-[15px] rounded-full border-2 border-bg sm:h-[19px] sm:w-[19px] ${
                      e.current ? 'bg-grad ring-4 ring-a1/20' : 'bg-edge ring-1 ring-edge'
                    }`}
                    style={e.current ? undefined : { backgroundColor: 'var(--muted)' }}
                  />
                  <Tile className="p-5 sm:p-7" spotlight>
                    <div className="relative z-[2]">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="mono text-xs text-a1">{e.period}</span>
                        {e.current && (
                          <span className="mono rounded-full bg-a1/15 px-2 py-0.5 text-[0.62rem] text-a1">Ongoing</span>
                        )}
                        <span className="mono rounded-full border border-edge px-2 py-0.5 text-[0.62rem] text-muted">{e.type}</span>
                        {e.location && (
                          <span className="mono inline-flex items-center gap-1 text-[0.68rem] text-muted">
                            <FiMapPin size={11} /> {e.location}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight sm:text-2xl">{e.role}</h3>
                      <p className="mt-1 font-medium text-muted">{e.org}</p>
                      {e.periodNote && <p className="mono mt-1 text-[0.68rem] text-muted">{e.periodNote}</p>}

                      <ul className="mt-5 space-y-2.5 text-[0.95rem] leading-relaxed text-muted">
                        {shown.map((b) => (
                          <li key={b} className="flex gap-3">
                            <span aria-hidden className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-a1" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {hidden > 0 && (
                        <button
                          onClick={() => toggle(key)}
                          aria-expanded={isOpen}
                          className="mono mt-4 inline-flex items-center gap-1.5 text-xs text-a2 transition-colors hover:text-a1"
                        >
                          {isOpen ? 'Show less' : `Show ${hidden} more`}
                          <FiChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                      )}

                      <div className="mt-5 flex flex-wrap gap-2">
                        {e.tech.map((t) => (
                          <span key={t} className="mono rounded-full border border-edge px-3 py-1 text-xs text-muted">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Tile>
                </motion.li>
              )
            })}
          </AnimatePresence>
        </ol>
      </div>
    </section>
  )
}
