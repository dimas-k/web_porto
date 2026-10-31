'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiX } from 'react-icons/fi'

export type LightboxImage = { src: string; label: string }

type Props = {
  title: string
  eyebrow: string
  images: LightboxImage[]
  index: number
  meta?: string[]
  href?: string
  hrefLabel?: string
  onIndex: (i: number) => void
  onClose: () => void
}

export default function Lightbox({ title, eyebrow, images, index, meta = [], href, hrefLabel = 'Verify', onIndex, onClose }: Props) {
  const img = images[index]
  const multi = images.length > 1

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (!multi) return
      if (e.key === 'ArrowRight') onIndex((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onIndex((index - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [index, images.length, multi, onClose, onIndex])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md sm:p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-edge bg-bg shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
          <div className="min-w-0">
            <p className="mono text-[0.68rem] text-a1">{eyebrow}</p>
            <h3 className="mt-1 truncate text-lg font-bold tracking-tight sm:text-xl">{title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-edge transition-colors hover:bg-fg/10"
          >
            <FiX />
          </button>
        </div>

        <div className="relative mx-5 h-[58vh] overflow-hidden rounded-xl border border-edge bg-surface sm:mx-6 sm:h-[66vh]">
          <AnimatePresence mode="wait">
            <motion.div key={img.src} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="absolute inset-0">
              <Image src={img.src} alt={`${title} — ${img.label}`} fill sizes="1024px" className="object-contain" />
            </motion.div>
          </AnimatePresence>

          {multi && (
            <>
              <button
                onClick={() => onIndex((index - 1 + images.length) % images.length)}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-edge bg-bg/80 backdrop-blur transition-colors hover:bg-bg"
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={() => onIndex((index + 1) % images.length)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-edge bg-bg/80 backdrop-blur transition-colors hover:bg-bg"
              >
                <FiChevronRight />
              </button>
            </>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            {multi &&
              images.map((im, k) => (
                <button
                  key={im.src}
                  onClick={() => onIndex(k)}
                  aria-pressed={k === index}
                  className={`mono rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                    k === index ? 'border-transparent bg-grad font-semibold text-black' : 'border-edge text-muted hover:text-fg'
                  }`}
                >
                  {im.label}
                </button>
              ))}
            {meta.map((m) => (
              <span key={m} className="mono text-[0.68rem] text-muted">
                {m}
              </span>
            ))}
          </div>
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-edge px-4 py-2 text-sm font-semibold transition-colors hover:bg-fg/10"
            >
              {hrefLabel} <FiExternalLink />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
