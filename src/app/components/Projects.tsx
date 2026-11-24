'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUpRight, FiCalendar, FiChevronLeft, FiChevronRight, FiUsers, FiUser, FiX } from 'react-icons/fi'
import { projects, projectMeta, type Tag } from '@/data/projects'
import Tile from './Tile'
import Page, { PageTitle } from './Page'

const filters: ('All' | Tag)[] = ['All', 'Web', 'AI/ML', 'Mobile']

export default function Projects() {
  const [filter, setFilter] = useState<'All' | Tag>('All')
  const [sel, setSel] = useState(0)
  const [open, setOpen] = useState<number | null>(null)

  const visible = projects
    .map((p, i) => ({ p, m: projectMeta[i], i }))
    .filter(({ m }) => filter === 'All' || m.tags.includes(filter))

  const at = Math.min(sel, visible.length - 1)
  const { p, m, i: curIndex } = visible[at]
  const go = (d: number) => setSel((at + d + visible.length) % visible.length)

  // modal: lock body, Esc to close
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

  // arrow keys switch project while the modal is closed
  useEffect(() => {
    if (open !== null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <Page>
      <PageTitle
        eyebrow="Selected work"
        aside={
          <div className="flex w-fit gap-1 rounded-2xl border border-edge bg-surface p-1 backdrop-blur">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f)
                  setSel(0)
                }}
                className="relative rounded-xl px-4 py-1.5 text-sm font-semibold"
              >
                {filter === f && (
                  <motion.span layoutId="filter-pill" className="bg-grad absolute inset-0 rounded-xl" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />
                )}
                <span className={`relative ${filter === f ? 'text-black' : 'text-muted'}`}>{f}</span>
              </button>
            ))}
          </div>
        }
      >
        Projects that <span className="text-grad">ship</span>.
      </PageTitle>

      <div className="mt-4 grid flex-1 gap-4 lg:min-h-0 lg:grid-cols-12 lg:grid-rows-[minmax(0,1fr)_auto]">
        {/* big preview */}
        <Tile className="group relative aspect-[16/10] lg:col-span-7 lg:aspect-auto" spotlight={false}>
          <AnimatePresence mode="popLayout">
            <motion.button
              key={p.title}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setOpen(curIndex)}
              aria-label={`Open details: ${m.short}`}
              className="absolute inset-0 block"
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                priority
                sizes="(min-width: 1024px) 720px, 100vw"
                className="object-cover"
                style={{ objectPosition: m.focus ?? 'top' }}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
            </motion.button>
          </AnimatePresence>

          <span className="mono absolute left-4 top-4 z-[2] rounded-full bg-bg/70 px-3 py-1 text-[0.65rem] backdrop-blur">
            {String(at + 1).padStart(2, '0')} / {String(visible.length).padStart(2, '0')}
          </span>

          {visible.length > 1 && (
            <div className="absolute bottom-4 right-4 z-[2] flex gap-2">
              {[
                { d: -1, label: 'Previous project', Icon: FiChevronLeft },
                { d: 1, label: 'Next project', Icon: FiChevronRight },
              ].map(({ d, label, Icon }) => (
                <button
                  key={label}
                  onClick={() => go(d)}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-edge bg-bg/80 backdrop-blur transition-colors hover:border-a1"
                >
                  <Icon />
                </button>
              ))}
            </div>
          )}
        </Tile>

        {/* info */}
        <Tile className="flex flex-col lg:col-span-5" spotlight>
          <AnimatePresence mode="wait">
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="scroll-soft relative z-[2] flex flex-1 flex-col overflow-y-auto p-5 sm:p-7"
            >
              <div className="mono flex items-center justify-between text-[0.7rem]">
                <span className="text-a1">{m.category}</span>
                <span className="text-muted">{m.year}</span>
              </div>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">{m.short}</h2>
              <p className="mt-4 line-clamp-5 text-sm leading-relaxed text-muted">{p.fullDescription}</p>

              <p className="mono mt-4 text-xs text-muted">
                <FiUser className="mr-1.5 inline text-a1" />
                {p.role}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.technologies.slice(0, 6).map((t) => (
                  <span key={t} className="mono rounded-full border border-edge px-2.5 py-1 text-[0.68rem] text-muted">
                    {t}
                  </span>
                ))}
                {p.technologies.length > 6 && <span className="mono px-1 py-1 text-[0.68rem] text-muted">+{p.technologies.length - 6}</span>}
              </div>

              <button
                onClick={() => setOpen(curIndex)}
                className="bg-grad group mt-auto inline-flex w-fit items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
              >
                View details
                <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </motion.div>
          </AnimatePresence>
        </Tile>

        {/* thumbnails */}
        <div className="scroll-soft -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:col-span-12">
          {visible.map(({ p: q, m: n }, k) => (
            <button
              key={q.title}
              onClick={() => setSel(k)}
              aria-label={n.short}
              aria-pressed={k === at}
              className={`group relative h-16 w-28 shrink-0 overflow-hidden rounded-xl border transition-all sm:h-[4.5rem] sm:w-36 ${
                k === at ? 'border-a1 ring-2 ring-a1/30' : 'border-edge opacity-60 hover:opacity-100'
              }`}
            >
              <Image src={q.image} alt="" fill sizes="144px" className="object-cover" style={{ objectPosition: n.focus ?? 'top' }} />
              <span className="mono absolute inset-x-0 bottom-0 truncate bg-gradient-to-t from-black/80 to-transparent px-2 pb-1 pt-4 text-left text-[0.6rem] text-white">
                {n.short}
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && <Modal key="modal" i={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </Page>
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
