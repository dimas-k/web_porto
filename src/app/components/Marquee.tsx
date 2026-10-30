const words = [
  'Laravel', 'Flutter', 'FastAPI', 'Next.js', 'TensorFlow', 'PostgreSQL',
  'Swin Transformer', 'LLM Agents', 'Docker', 'React', 'IoT',
]

export default function Marquee() {
  const row = [...words, ...words]
  return (
    <div className="marquee relative -rotate-1 overflow-hidden border-y border-ink bg-ink py-4 text-paper">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
            {row.map((w, i) => (
              <span key={`${k}-${i}`} className="flex items-center">
                <span className="px-6 font-display text-3xl font-medium tracking-tight md:text-5xl">{w}</span>
                <span className="text-2xl text-accent md:text-4xl">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
