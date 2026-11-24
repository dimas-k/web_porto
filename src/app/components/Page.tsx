import Eyebrow from './Eyebrow'

/** Root of every page. On desktop it fills the screen exactly (no page scroll);
 *  on small screens it flows naturally and the shell scrolls as a fallback. */
export default function Page({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`flex flex-col py-3 lg:min-h-[30rem] lg:flex-1 ${className}`}>{children}</section>
}

export function PageTitle({ eyebrow, children, aside }: { eyebrow: string; children: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <div className="flex shrink-0 flex-col justify-between gap-3 sm:flex-row sm:items-end">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 text-[clamp(1.8rem,min(4vw,6.2vh),3.2rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">{children}</h1>
      </div>
      {aside}
    </div>
  )
}
