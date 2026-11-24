'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'
import Tile from './Tile'
import Page, { PageTitle } from './Page'
import { experiences, type Experience as Exp, type ExperienceType } from '@/data/experience'

const filters: ('All' | ExperienceType)[] = ['All', 'Startup', 'Internship', 'Research', 'Lead', 'Program', 'Project']
const keyOf = (e: Exp) => `${e.org}-${e.role}`
const start = (e: Exp) => e.period.split(/\s[–-]\s/)[0]
const shortOrg = (e: Exp) => e.org.split(',')[0]

export default function Experience() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const [sel, setSel] = useState<string>(keyOf(experiences[0]))

  const list = useMemo(() => experiences.filter((e) => filter === 'All' || e.type === filter), [filter])
  const cur = list.find((e) => keyOf(e) === sel) ?? list[0]

  return (
    <Page>
      <PageTitle
        eyebrow="Experience"
        aside={
          <div className="flex flex-wrap gap-1.5 sm:max-w-md sm:justify-end">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`mono rounded-full border px-3 py-1 text-xs transition-colors ${
                  filter === f ? 'border-transparent bg-grad font-semibold text-black' : 'border-edge text-muted hover:border-a1 hover:text-fg'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        }
      >
        Where I&apos;ve <span className="text-grad">built things</span>.
      </PageTitle>

      {/* timeline rail */}
      <ol className="scroll-soft mt-5 flex shrink-0 overflow-x-auto pb-1 lg:grid lg:auto-cols-fr lg:grid-flow-col lg:overflow-visible">
        {list.map((e) => {
          const on = cur && keyOf(e) === keyOf(cur)
          return (
            <li key={keyOf(e)} className="min-w-[8.5rem] flex-1 lg:min-w-0">
              <button onClick={() => setSel(keyOf(e))} aria-pressed={on} className="group flex w-full flex-col items-center px-1 text-center">
                <span className={`mono text-[0.68rem] transition-colors ${on ? 'text-a1' : 'text-muted group-hover:text-fg'}`}>{start(e)}</span>
                <span className="relative my-2 flex h-5 w-full items-center justify-center">
                  <span aria-hidden className="absolute inset-x-0 top-1/2 h-px bg-edge" />
                  <motion.span
                    animate={{ scale: on ? 1.35 : 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    className={`relative h-3.5 w-3.5 rounded-full border-2 border-bg ${on ? 'bg-grad ring-4 ring-a1/25' : 'group-hover:bg-a1'}`}
                    style={on ? undefined : { backgroundColor: 'var(--muted)' }}
                  />
                </span>
                <span className={`line-clamp-2 text-xs font-semibold leading-tight transition-colors ${on ? 'text-fg' : 'text-muted group-hover:text-fg'}`}>
                  {shortOrg(e)}
                </span>
              </button>
            </li>
          )
        })}
      </ol>

      {/* detail */}
      {cur && (
        <Tile className="mt-4 flex min-h-[22rem] flex-1 flex-col lg:min-h-0" spotlight={false}>
          <AnimatePresence mode="wait">
            <motion.div
              key={keyOf(cur)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="scroll-soft relative z-[2] grid flex-1 gap-8 overflow-y-auto p-6 sm:p-9 lg:grid-cols-12 lg:gap-12"
            >
              {/* who / when */}
              <div className="flex flex-col lg:col-span-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="mono rounded-full bg-a1/15 px-3 py-1 text-xs text-a1">{cur.period}</span>
                  {cur.current && <span className="mono rounded-full border border-a1/40 px-2.5 py-1 text-[0.65rem] text-a1">Ongoing</span>}
                  <span className="mono rounded-full border border-edge px-2.5 py-1 text-[0.65rem] text-muted">{cur.type}</span>
                </div>

                <h2 className="mt-5 text-[clamp(1.6rem,min(3vw,5vh),2.6rem)] font-extrabold leading-[1.05] tracking-tight">{cur.role}</h2>
                <p className="mt-2 text-lg font-medium text-muted">{cur.org}</p>
                {cur.periodNote && <p className="mono mt-1 text-xs text-muted">{cur.periodNote}</p>}
                {cur.location && (
                  <p className="mono mt-2 inline-flex items-center gap-1.5 text-xs text-muted">
                    <FiMapPin size={12} /> {cur.location}
                  </p>
                )}

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {cur.tech.map((t, k) => (
                    <span
                      key={t}
                      className={`mono border border-edge bg-surface px-3 py-1 text-xs text-muted ${k % 2 ? 'rounded-[0.9rem_0.3rem_0.9rem_0.3rem]' : 'rounded-[0.3rem_0.9rem_0.3rem_0.9rem]'}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* what I did */}
              <ul className="flex flex-col justify-center gap-3 lg:col-span-7">
                {cur.bullets.map((b, k) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * k, duration: 0.35 }}
                    className="flex gap-4 rounded-2xl border border-edge bg-surface p-4"
                  >
                    <span className="mono text-grad pt-0.5 text-sm font-bold">{String(k + 1).padStart(2, '0')}</span>
                    <span className="text-[0.95rem] leading-relaxed text-muted">{b}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </Tile>
      )}
    </Page>
  )
}
