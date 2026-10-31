'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiLoader, FiMaximize2, FiShield } from 'react-icons/fi'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'
import Tile from './Tile'
import Lightbox from './Lightbox'
import { ipItems, type IPItem } from '@/data/ip'

export default function IntellectualProperty() {
  const [open, setOpen] = useState<IPItem | null>(null)
  const registered = ipItems.filter((i) => i.status === 'registered')
  const pending = ipItems.filter((i) => i.status === 'pending')

  return (
    <section id="intellectual-property" className="py-24">
      <Reveal className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Eyebrow>Intellectual Property</Eyebrow>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
            Software, <span className="text-grad">registered</span>.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Programs I helped build that are officially recorded as copyright by Indonesia&apos;s Ministry of Law.
        </p>
      </Reveal>

      <div className="space-y-4">
        {registered.map((item) => (
          <Reveal key={item.id}>
            <Tile className="overflow-hidden p-6 sm:p-8 lg:p-10">
              <div className="relative z-[2] grid gap-10 lg:grid-cols-12">
                {/* the document */}
                {item.image && (
                  <div className="lg:col-span-4">
                    <button
                      onClick={() => setOpen(item)}
                      aria-label={`Open ${item.title} certificate`}
                      className="group relative mx-auto block aspect-[1131/1599] w-full max-w-[22rem] overflow-hidden rounded-2xl border border-edge shadow-2xl transition-transform duration-500 hover:-translate-y-1 motion-reduce:transition-none"
                    >
                      <Image src={item.image} alt={`${item.title} copyright certificate`} fill sizes="(min-width: 1024px) 352px, 90vw" className="object-cover" />
                      <span className="absolute inset-x-0 bottom-0 z-[2] flex items-center justify-center gap-2 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-12 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                        <FiMaximize2 /> View certificate
                      </span>
                    </button>
                  </div>
                )}

                {/* the record */}
                <div className="lg:col-span-8">
                  <span className="mono inline-flex items-center gap-2 rounded-full border border-edge px-3 py-1 text-[0.68rem] text-a1">
                    <FiShield /> {item.kind} · Registered
                  </span>
                  <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">{item.title}</h3>
                  <p className="mt-2 font-medium text-muted">{item.officialName}</p>
                  <p className="mt-5 max-w-2xl leading-relaxed text-muted">{item.summary}</p>

                  <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                    {item.details?.map((d) => (
                      <div key={d.k} className="border-t border-edge pt-3">
                        <dt className="mono text-[0.65rem] uppercase tracking-wider text-muted">{d.k}</dt>
                        <dd className="mt-1 text-sm font-semibold leading-snug">{d.v}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="mono rounded-full border border-edge px-3 py-1 text-xs text-muted">
                        {t}
                      </span>
                    ))}
                  </div>

                  {item.myRole && (
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-edge bg-surface p-4">
                      <div>
                        <p className="mono text-[0.65rem] text-muted">My role</p>
                        <p className="mt-0.5 text-sm font-semibold">{item.myRole}</p>
                      </div>
                      {item.relatedHref && (
                        <a href={item.relatedHref} className="mono inline-flex items-center gap-1 text-xs text-a2 transition-colors hover:text-a1">
                          See in Experience <FiArrowUpRight />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Tile>
          </Reveal>
        ))}

        {pending.map((item) => (
          <Reveal key={item.id} delay={0.05}>
            <Tile className="border-dashed p-6 sm:p-7">
              <div className="relative z-[2] flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-edge text-a1">
                  <FiLoader className="animate-spin [animation-duration:3s] motion-reduce:animate-none" size={20} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
                    <span className="mono rounded-full border border-edge px-2.5 py-0.5 text-[0.62rem] text-a1">In process</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {item.officialName} · {item.summary}
                  </p>
                </div>
              </div>
            </Tile>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {open?.image && (
          <Lightbox
            title={open.title}
            eyebrow="Ministry of Law, Republic of Indonesia · 20 Dec 2024"
            images={[{ src: open.image, label: 'Certificate' }]}
            index={0}
            meta={['No. 000829823', '· Home addresses hidden for privacy']}
            onIndex={() => {}}
            onClose={() => setOpen(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
