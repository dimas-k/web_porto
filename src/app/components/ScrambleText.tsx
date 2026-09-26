// app/components/ScrambleText.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

const CHARS = '!<>-_\\/[]{}=+*^?#01'

interface ScrambleTextProps {
  words: string[]
  className?: string
  speed?: number
  holdMs?: number
}

/**
 * Cycles through `words` on a loop, scrambling random characters before
 * each one resolves, holding briefly, then moving to the next — wrapping
 * back to the first word after the last one, forever.
 */
const ScrambleText = ({ words, className = '', speed = 32, holdMs = 700 }: ScrambleTextProps) => {
  const [display, setDisplay] = useState(words[0] ?? '')
  const frame = useRef(0)
  const wordIndex = useRef(0)

  useEffect(() => {
    let raf: ReturnType<typeof setTimeout>

    const tick = () => {
      const target = words[wordIndex.current]
      const revealCount = Math.min(target.length, Math.floor(frame.current / 1.6))

      const next = target
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' '
          if (i < revealCount) return char
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        .join('')

      setDisplay(next)
      frame.current += 1

      if (revealCount >= target.length) {
        const isLastWord = wordIndex.current === words.length - 1
        raf = setTimeout(() => {
          wordIndex.current = (wordIndex.current + 1) % words.length
          frame.current = 0
          tick()
        }, isLastWord ? holdMs * 2.5 : holdMs)
        return
      }

      raf = setTimeout(tick, speed)
    }

    tick()
    return () => clearTimeout(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <span className={className}>
      {display}
      <span className="inline-block w-[0.5ch] animate-pulse text-lime">_</span>
    </span>
  )
}

export default ScrambleText
