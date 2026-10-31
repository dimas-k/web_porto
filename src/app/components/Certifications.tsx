'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { FiAward, FiCheckCircle, FiClock, FiExternalLink, FiMaximize2 } from 'react-icons/fi'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'
import Tile from './Tile'
import Lightbox from './Lightbox'
import { certifications, type CertCategory, type Certification } from '@/data/certifications'

type Open = { id: string; index: number } | null
const filters: ('All' | CertCategory)[] = ['All', 'Program', 'AI & ML', 'Data']

export default function Certifications() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const [open, setOpen] = useState<Open>(null)

  const list = useMemo(() => certifications.filter((c) => filter === 'All' || c.category === filter), [filter])
  const counts = useMemo(() => {
    const m: Record<string, number> = { All: certifications.length }
    for (const c of certifications) m[c.category] = (m[c.category] ?? 0) + 1
    return m
  }, [])
  const active = open ? certifications.find((c) => c.id === open.id) : undefined

  return (
    <section id="certifications" className="py-24">
      <Reveal className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Eyebrow>Certifications</Eyebrow>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
            Learning, <span className="text-grad">verified</span>.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          {counts.All} credentials in machine learning and data, earned through Dicoding and the DBS Foundation Coding Camp. Open a card to see the full certificate.
        </p>
      </Reveal>

      <Reveal delay={0.05} className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`mono inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
              filter === f ? 'border-transparent bg-grad font-semibold text-black' : 'border-edge text-muted hover:border-a1 hover:text-fg'
            }`}
          >
            {f}
            <span className={`rounded-full px-1.5 text-[0.62rem] ${filter === f ? 'bg-black/15' : 'bg-fg/10'}`}>{counts[f] ?? 0}</span>
          </button>
        ))}
      </Reveal>

      <div className="grid grid-cols-12 gap-4">
        <AnimatePresence mode="popLayout">
          {list.map((c) => (
            <motion.div
              key={c.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              className={c.featured ? 'col-span-12' : 'col-span-12 md:col-span-6 lg:col-span-4'}
            >
              {c.featured ? (
                <Featured c={c} onOpen={(index) => setOpen({ id: c.id, index })} />
              ) : (
                <Card c={c} onOpen={() => setOpen({ id: c.id, index: 0 })} />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {open && active && (
          <Lightbox
            title={active.title}
            eyebrow={`${active.issuer} · ${active.date}`}
            images={active.images}
            index={open.index}
            meta={[active.credentialId ? `ID ${active.credentialId}` : '', active.validUntil ? `· valid until ${active.validUntil}` : ''].filter(Boolean)}
            href={active.verifyUrl}
            hrefLabel="Verify on Dicoding"
            onIndex={(index) => setOpen({ id: active.id, index })}
            onClose={() => setOpen(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Featured({ c, onOpen }: { c: Certification; onOpen: (i: number) => void }) {
  const [front, back] = c.images
  return (
    <Tile className="overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="relative z-[2] grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="mono inline-flex items-center gap-2 rounded-full border border-edge px-3 py-1 text-[0.68rem] text-a1">
            <FiAward /> Featured program
          </span>
          <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">{c.title}</h3>
          <p className="mt-2 font-medium text-muted">{c.officialName}</p>
          <p className="mono mt-1 text-xs text-muted">{c.issuer}</p>
          <p className="mt-6 leading-relaxed text-muted">{c.summary}</p>

          <dl className="mt-7 grid grid-cols-2 gap-3">
            {c.highlights?.map((h) => (
              <div key={h.k} className="rounded-2xl border border-edge bg-surface p-4">
                <dt className="mono text-[0.65rem] text-muted">{h.k}</dt>
                <dd className="mt-1 text-sm font-semibold leading-snug">{h.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            {c.skills.map((s) => (
              <span key={s} className="mono rounded-full border border-edge px-3 py-1 text-xs text-muted">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => onOpen(0)}
              className="bg-grad inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              View certificate <FiMaximize2 />
            </button>
            {back && (
              <button
                onClick={() => onOpen(1)}
                className="rounded-2xl border border-edge px-5 py-3 text-sm font-semibold transition-colors hover:bg-fg/10"
              >
                See learning achievement
              </button>
            )}
          </div>
        </div>

        {/* certificate with the transcript peeking out behind it */}
        <div className="lg:col-span-7">
          <div className="group relative mx-auto w-full max-w-[40rem] pb-4 pr-4 pt-4 sm:pr-8">
            {back && (
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 top-8 translate-x-3 rotate-[3deg] overflow-hidden rounded-2xl border border-edge opacity-70 shadow-xl transition-transform duration-500 group-hover:translate-x-6 group-hover:rotate-[5deg] motion-reduce:transition-none sm:translate-x-6 sm:group-hover:translate-x-10"
              >
                <Image src={back.src} alt="" fill sizes="(min-width: 1024px) 560px, 90vw" className="object-cover" />
              </div>
            )}
            <button
              onClick={() => onOpen(0)}
              aria-label={`Open ${c.title} certificate`}
              className="relative block aspect-[1600/1132] w-full overflow-hidden rounded-2xl border border-edge shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:-rotate-[0.6deg] motion-reduce:transition-none"
            >
              <Image src={front.src} alt={`${c.title} certificate`} fill sizes="(min-width: 1024px) 560px, 90vw" className="object-cover" />
            </button>
          </div>
        </div>
      </div>
    </Tile>
  )
}

function Card({ c, onOpen }: { c: Certification; onOpen: () => void }) {
  return (
    <Tile className="flex h-full flex-col overflow-hidden">
      <button
        onClick={onOpen}
        aria-label={`Open ${c.title} certificate`}
        className="group relative block aspect-[1600/1132] w-full overflow-hidden border-b border-edge text-left"
      >
        <Image
          src={c.images[0].src}
          alt={`${c.title} certificate`}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none"
        />
        <span className="mono absolute left-4 top-4 z-[2] rounded-full border border-edge bg-bg/80 px-2.5 py-1 text-[0.62rem] text-muted backdrop-blur">
          {c.category}
        </span>
        <span className="absolute right-4 top-4 z-[2] grid h-9 w-9 place-items-center rounded-full bg-grad text-black opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <FiMaximize2 />
        </span>
      </button>

      <div className="relative z-[2] flex flex-1 flex-col p-6">
        <div className="mono flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.68rem] text-muted">
          <span className="text-a1">{c.date}</span>
          {c.hours && (
            <span className="inline-flex items-center gap-1">
              <FiClock size={11} /> {c.hours} hours
            </span>
          )}
        </div>
        <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight">{c.title}</h3>
        <p className="mt-1 text-sm text-muted">{c.officialName}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{c.summary}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {c.skills.slice(0, 3).map((s) => (
            <span key={s} className="mono rounded-full border border-edge px-2.5 py-1 text-[0.65rem] text-muted">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-edge pt-4">
          <span className="mono inline-flex items-center gap-1.5 text-[0.65rem] text-muted">
            <FiCheckCircle className="text-a1" /> {c.issuer}
          </span>
          {c.verifyUrl && (
            <a
              href={c.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mono inline-flex items-center gap-1 text-[0.68rem] text-a2 transition-colors hover:text-a1"
            >
              Verify <FiExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </Tile>
  )
}
