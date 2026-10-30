import type { IconType } from 'react-icons'

export default function FileTab({ icon: Icon, name, color, path }: { icon: IconType; name: string; color: string; path?: string }) {
  return (
    <div className="flex items-end justify-between border-b border-line">
      <div className="mono -mb-px inline-flex items-center gap-2 border border-b-bg border-line bg-bg px-4 py-2 text-xs">
        <Icon className={color} />
        {name}
      </div>
      {path && <span className="mono hidden pb-2 text-xs text-muted sm:block">{path}</span>}
    </div>
  )
}
