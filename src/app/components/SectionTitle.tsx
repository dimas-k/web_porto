import Pop from './Pop'

export default function SectionTitle({ tag, children }: { tag: string; children: React.ReactNode }) {
  return (
    <Pop className="mb-12">
      <span className="pop brut-sm inline-block -rotate-2 bg-pop-green px-3 py-1 text-xs font-extrabold uppercase tracking-widest">
        {tag}
      </span>
      <h2 className="font-display mt-5 text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-[1.02] tracking-tight">{children}</h2>
    </Pop>
  )
}
