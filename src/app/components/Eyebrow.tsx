export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mono inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-3 py-1 text-xs text-muted backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-grad" />
      {children}
    </span>
  )
}
