'use client'

import { SiReact } from 'react-icons/si'
import { VscChevronDown, VscFolderOpened, VscJson, VscMarkdown, VscTerminal, VscFile } from 'react-icons/vsc'
import { projectMeta } from '@/data/projects'

type Props = {
  active: string
  onGo: (id: string) => void
  onProject: (i: number) => void
}

export default function Explorer({ active, onGo, onProject }: Props) {
  const row = (on: boolean) =>
    `flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-[0.8rem] transition-colors ${
      on ? 'bg-panel2 text-fg' : 'text-muted hover:bg-panel2/70 hover:text-fg'
    }`

  return (
    <div className="mono select-none text-sm">
      <p className="px-3 pb-3 pt-4 text-[0.65rem] tracking-[0.18em] text-muted">EXPLORER</p>
      <div className="px-2">
        <div className="flex items-center gap-1.5 px-1 pb-1 text-[0.72rem] font-semibold text-fg">
          <VscChevronDown /> PORTFOLIO
        </div>

        <div className="ml-2 border-l border-line pl-1.5">
          <button className={row(active === 'home')} onClick={() => onGo('home')}>
            <SiReact className="text-s-blue" /> home.tsx
          </button>
          <button className={row(active === 'about')} onClick={() => onGo('about')}>
            <VscMarkdown className="text-s-cyan" /> about.md
          </button>

          <button className={row(active === 'projects')} onClick={() => onGo('projects')}>
            <VscFolderOpened className="text-s-yellow" /> projects/
          </button>
          <div className="ml-3 border-l border-line pl-1.5">
            {projectMeta.map((m, i) => (
              <button key={m.file} className={row(false)} onClick={() => onProject(i)}>
                <VscFile className="shrink-0 text-s-orange" />
                <span className="truncate">{m.file}</span>
              </button>
            ))}
          </div>

          <button className={row(active === 'skills')} onClick={() => onGo('skills')}>
            <VscJson className="text-s-yellow" /> skills.json
          </button>
          <button className={row(active === 'contact')} onClick={() => onGo('contact')}>
            <VscTerminal className="text-s-green" /> contact.sh
          </button>
        </div>
      </div>

      <div className="mx-3 mt-8 rounded-lg border border-line p-3 text-[0.7rem] leading-relaxed text-muted">
        <p className="mb-1 text-fg">Tip</p>
        Press <span className="kbd">Ctrl</span> <span className="kbd">K</span> to jump anywhere.
      </div>
    </div>
  )
}
