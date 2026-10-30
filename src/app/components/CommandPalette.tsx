'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiSearch } from 'react-icons/fi'

export type Command = { id: string; label: string; hint: string; run: () => void }

export default function CommandPalette({ open, onClose, commands }: { open: boolean; onClose: () => void; commands: Command[] }) {
  const [q, setQ] = useState('')
  const [idx, setIdx] = useState(0)
  const input = useRef<HTMLInputElement>(null)

  const list = useMemo(() => {
    const s = q.trim().toLowerCase()
    return s ? commands.filter((c) => (c.label + c.hint).toLowerCase().includes(s)) : commands
  }, [q, commands])

  useEffect(() => {
    if (open) {
      setQ('')
      setIdx(0)
      setTimeout(() => input.current?.focus(), 30)
    }
  }, [open])

  useEffect(() => setIdx(0), [q])

  const run = (c?: Command) => {
    if (!c) return
    onClose()
    setTimeout(c.run, 60)
  }

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setIdx((i) => Math.min(i + 1, list.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)) }
    else if (e.key === 'Enter') { e.preventDefault(); run(list[idx]) }
    else if (e.key === 'Escape') onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[14vh]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
          <motion.div
            role="dialog"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="relative w-full max-w-xl overflow-hidden rounded-xl border border-line bg-panel shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <FiSearch className="text-muted" />
              <input
                ref={input}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={onKey}
                placeholder="Type a command or search…"
                className="mono w-full bg-transparent py-4 text-sm outline-none placeholder:text-muted"
              />
              <span className="kbd">esc</span>
            </div>
            <ul className="max-h-[50vh] overflow-y-auto p-2">
              {list.length === 0 && <li className="mono px-3 py-6 text-center text-sm text-muted">No results</li>}
              {list.map((c, i) => (
                <li key={c.id}>
                  <button
                    onMouseEnter={() => setIdx(i)}
                    onClick={() => run(c)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm ${i === idx ? 'bg-accent text-accent-fg' : ''}`}
                  >
                    <span>{c.label}</span>
                    <span className={`mono text-xs ${i === idx ? 'opacity-80' : 'text-muted'}`}>{c.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
