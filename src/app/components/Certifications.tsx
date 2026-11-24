'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
import { FiAward, FiCheckCircle, FiExternalLink, FiMaximize2 } from 'react-icons/fi'
import Tile from './Tile'
import Page, { PageTitle } from './Page'
import Lightbox from './Lightbox'
import { certifications, type Certification } from '@/data/certifications'

type Open = { id: string; index: number } | null

export default function Certifications() {
  const [open, setOpen] = useState<Open>(null)

  const featured = certifications.find((c) => c.featured)
  const rest = certifications.filter((c) => !c.featured)
  const active = open ? certifications.find((c) => c.id === open.id) : undefined

  return (
    <Page>
      <PageTitle
        eyebrow="Certifications"
        aside={
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            {certifications.length} credentials in machine learning and data, from Dicoding and the DBS Foundation Coding Camp. Open a card to see the full certificate.
          </p>
        }
      >
        Learning, <span className="text-grad">verified</span>.
      </PageTitle>

      <div className="mt-5 grid flex-1 gap-3 lg:min-h-0 lg:grid-cols-12 lg:grid-rows-[minmax(0,1fr)] lg:gap-4">
        {featured && (
          <div className="lg:col-span-5 lg:min-h-0">
            <Featured c={featured} onOpen={(index) => setOpen({ id: featured.id, index })} />
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7 lg:min-h-0 lg:grid-rows-2 lg:gap-4">
          {rest.map((c) => (
            <Card key={c.id} c={c} onOpen={() => setOpen({ id: c.id, index: 0 })} />
          ))}
        </div>
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
    </Page>
  )
}

/* ------------------------------------------------------------------ */

function Featured({ c, onOpen }: { c: Certification; onOpen: (i: number) => void }) {
  const [front, back] = c.images
  return (
    <Tile className="flex h-full flex-col p-5 sm:p-6">
      <div className="relative z-[2] flex min-h-0 flex-1 flex-col gap-4">
        {/* certificate with the transcript peeking out behind it */}
        <div className="group relative min-h-[11rem] flex-1">
          {back && (
            <div
              aria-hidden
              className="absolute inset-y-3 left-3 right-0 translate-x-1 rotate-[3deg] overflow-hidden rounded-xl border border-edge opacity-60 transition-transform duration-500 group-hover:translate-x-3 group-hover:rotate-[5deg] motion-reduce:transition-none"
            >
              <Image src={back.src} alt="" fill sizes="480px" className="object-cover" />
            </div>
          )}
          <button
            onClick={() => onOpen(0)}
            aria-label={`Open ${c.title} certificate`}
            className="absolute inset-y-0 left-0 right-4 block overflow-hidden rounded-xl border border-edge shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 motion-reduce:transition-none"
          >
            <Image src={front.src} alt={`${c.title} certificate`} fill sizes="480px" className="object-cover object-top" />
          </button>
        </div>

        <div className="shrink-0">
          <span className="mono inline-flex items-center gap-2 rounded-full border border-edge px-2.5 py-0.5 text-[0.65rem] text-a1">
            <FiAward /> Featured program
          </span>
          <h2 className="mt-2.5 text-lg font-extrabold leading-tight tracking-tight sm:text-xl">{c.title}</h2>
          <p className="mt-0.5 text-sm font-medium text-muted">{c.officialName}</p>
          <p className="mono mt-0.5 text-[0.68rem] text-muted">{c.issuer}</p>

          <dl className="mt-3 grid grid-cols-4 gap-2">
            {c.highlights?.map((h) => (
              <div key={h.k} className="rounded-xl border border-edge bg-surface p-2">
                <dt className="mono text-[0.58rem] text-muted">{h.k}</dt>
                <dd className="mt-0.5 text-[0.72rem] font-semibold leading-tight">{h.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => onOpen(0)}
              className="bg-grad inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              View certificate <FiMaximize2 />
            </button>
            {back && (
              <button onClick={() => onOpen(1)} className="rounded-xl border border-edge px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-fg/10">
                Learning achievement
              </button>
            )}
          </div>
        </div>
      </div>
    </Tile>
  )
}

function Card({ c, onOpen }: { c: Certification; onOpen: () => void }) {
  return (
    <Tile className="flex h-full min-h-0 flex-col">
      <button
        onClick={onOpen}
        aria-label={`Open ${c.title} certificate`}
        className="group relative block aspect-[1600/1132] w-full shrink-0 overflow-hidden border-b border-edge text-left"
      >
        <Image
          src={c.images[0].src}
          alt={`${c.title} certificate`}
          fill
          sizes="(min-width: 1024px) 260px, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none"
        />
        <span className="mono absolute left-2.5 top-2.5 z-[2] rounded-full border border-edge bg-bg/80 px-2 py-0.5 text-[0.58rem] text-muted backdrop-blur">
          {c.category}
        </span>
        <span className="absolute right-2.5 top-2.5 z-[2] grid h-8 w-8 place-items-center rounded-full bg-grad text-black opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <FiMaximize2 size={14} />
        </span>
      </button>

      <div className="relative z-[2] flex min-h-0 flex-1 flex-col p-3.5 lg:p-4">
        <span className="mono text-[0.65rem] text-a1">{c.date}</span>
        <h2 className="mt-1 line-clamp-2 text-sm font-bold leading-tight tracking-tight lg:text-[0.95rem]">{c.title}</h2>
        <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-muted [@media(max-height:820px)]:hidden max-lg:hidden">{c.summary}</p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <span className="mono inline-flex items-center gap-1 truncate text-[0.6rem] text-muted">
            <FiCheckCircle className="shrink-0 text-a1" /> {c.issuer}
          </span>
          {c.verifyUrl && (
            <a
              href={c.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mono inline-flex shrink-0 items-center gap-1 text-[0.65rem] text-a2 transition-colors hover:text-a1"
            >
              Verify <FiExternalLink size={11} />
            </a>
          )}
        </div>
      </div>
    </Tile>
  )
}
