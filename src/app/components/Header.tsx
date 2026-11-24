'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { pages } from './nav'

export default function Header() {
  const pathname = usePathname()
  const i = Math.max(0, pages.findIndex((p) => p.href === pathname))
  const prev = pages[i - 1]
  const next = pages[i + 1]
  const btn = 'grid h-8 w-8 place-items-center rounded-full border border-edge transition-colors'

  return (
    <header className="mx-auto flex h-14 w-full max-w-[1280px] shrink-0 items-center justify-between px-4 sm:px-6">
      <Link href="/" className="mono text-sm font-semibold tracking-tight" aria-label="Home">
        dimas<span className="text-grad">.dev</span>
      </Link>

      <div className="mono flex items-center gap-3 text-xs text-muted">
        <span className="hidden sm:inline">
          {String(i + 1).padStart(2, '0')} / {String(pages.length).padStart(2, '0')} · {pages[i].label}
        </span>
        <div className="flex gap-1.5">
          {prev ? (
            <Link href={prev.href} aria-label={`Previous: ${prev.label}`} className={`${btn} hover:border-a1 hover:text-fg`}><FiChevronLeft /></Link>
          ) : (
            <span aria-hidden className={`${btn} opacity-30`}><FiChevronLeft /></span>
          )}
          {next ? (
            <Link href={next.href} aria-label={`Next: ${next.label}`} className={`${btn} hover:border-a1 hover:text-fg`}><FiChevronRight /></Link>
          ) : (
            <span aria-hidden className={`${btn} opacity-30`}><FiChevronRight /></span>
          )}
        </div>
      </div>
    </header>
  )
}
