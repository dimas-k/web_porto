import Reveal from './Reveal'

export default function SectionHead({ no, title, aside }: { no: string; title: string; aside?: string }) {
  return (
    <Reveal className="flex items-center justify-between border-t border-ink pt-4 mb-12 md:mb-20">
      <span className="label">({no}) — {title}</span>
      {aside && <span className="label text-muted">{aside}</span>}
    </Reveal>
  )
}
