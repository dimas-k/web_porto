'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiLoader, FiMaximize2, FiShield } from 'react-icons/fi'
import Tile from './Tile'
import Page, { PageTitle } from './Page'
import Lightbox from './Lightbox'
import { ipItems, type IPItem } from '@/data/ip'

export default function IntellectualProperty() {
  const [open, setOpen] = useState<IPItem | null>(null)
  const registered = ipItems.filter((i) => i.status === 'registered')
  const pending = ipItems.filter((i) => i.status === 'pending')

  return (
    <Page>
      <PageTitle
        eyebrow="Intellectual Property"
        aside={
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Programs I helped build that are officially recorded as copyright by Indonesia&apos;s Ministry of Law.
          </p>
        }
      >
        Software, <span className="text-grad">registered</span>.
      </PageTitle>

      <div className="mt-5 grid flex-1 gap-3 lg:min-h-0 lg:grid-rows-[minmax(0,1fr)_auto] lg:gap-4">
        {registered.map((item) => (
          <Tile key={item.id} className="flex min-h-0 flex-col" spotlight>
            <div className="relative z-[2] grid min-h-0 flex-1 gap-6 p-5 sm:p-7 lg:grid-cols-12 lg:gap-8">
              {/* the document */}
              {item.image && (
                <button
                  onClick={() => setOpen(item)}
                  aria-label={`Open ${item.title} certificate`}
                  className="group relative mx-auto block aspect-[1131/1599] w-full max-w-[18rem] lg:col-span-3 lg:aspect-auto lg:max-w-none"
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} copyright certificate`}
                    fill
                    sizes="(min-width: 1024px) 300px, 90vw"
                    className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 motion-reduce:transition-none"
                  />
                </button>
              )}

              {/* the record */}
              <div className="scroll-soft flex min-h-0 flex-col overflow-y-auto lg:col-span-9 lg:pr-1">
                <span className="mono inline-flex w-fit items-center gap-2 rounded-full border border-edge px-3 py-1 text-[0.68rem] text-a1">
                  <FiShield /> {item.kind} · Registered
                </span>
                <h2 className="mt-4 text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">{item.title}</h2>
                <p className="mt-1.5 text-sm font-medium text-muted">{item.officialName}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{item.summary}</p>

                <dl className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2 xl:grid-cols-4">
                  {item.details?.map((d) => (
                    <div key={d.k} className="border-t border-edge pt-2">
                      <dt className="mono text-[0.6rem] uppercase tracking-wider text-muted">{d.k}</dt>
                      <dd className="mt-0.5 text-[0.8rem] font-semibold leading-snug">{d.v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="mono rounded-full border border-edge px-3 py-1 text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
                  {item.myRole && (
                    <div className="rounded-2xl border border-edge bg-surface px-4 py-2.5">
                      <p className="mono text-[0.6rem] text-muted">My role</p>
                      <p className="text-sm font-semibold">{item.myRole}</p>
                    </div>
                  )}
                  <div className="flex flex-wrap items-center gap-3">
                    {item.image && (
                      <button
                        onClick={() => setOpen(item)}
                        className="bg-grad inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
                      >
                        View certificate <FiMaximize2 />
                      </button>
                    )}
                    {item.relatedHref && (
                      <Link href={item.relatedHref} className="mono inline-flex items-center gap-1 text-xs text-a2 transition-colors hover:text-a1">
                        See in Experience <FiArrowUpRight />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Tile>
        ))}

        {pending.map((item) => (
          <Tile key={item.id} className="border-dashed p-4 sm:p-5">
            <div className="relative z-[2] flex items-center gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-edge text-a1">
                <FiLoader className="animate-spin [animation-duration:3s] motion-reduce:animate-none" size={18} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-base font-bold tracking-tight">{item.title}</h2>
                  <span className="mono rounded-full border border-edge px-2.5 py-0.5 text-[0.62rem] text-a1">In process</span>
                </div>
                <p className="mt-0.5 text-sm text-muted">
                  {item.officialName} · {item.summary}
                </p>
              </div>
            </div>
          </Tile>
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
    </Page>
  )
}
