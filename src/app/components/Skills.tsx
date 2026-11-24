'use client'

import { useState } from 'react'
import type { IconType } from 'react-icons'
import {
  SiBootstrap, SiCss3, SiTailwindcss, SiJavascript, SiJquery, SiNextdotjs, SiReact, SiTypescript,
  SiLaravel, SiPhp, SiPython, SiFastapi, SiExpress, SiNodedotjs, SiPostgresql, SiMysql, SiMongodb,
  SiGit, SiDocker, SiFigma, SiCucumber, SiInertia, SiFlutter, SiDart, SiPytorch, SiTensorflow, SiOpenai,
  SiFlask, SiStreamlit, SiN8N, SiTelegram, SiGooglecalendar, SiSpotify, SiJira, SiSupabase, SiSelenium, SiLinux,
} from 'react-icons/si'
import { FiCpu, FiSearch, FiTool, FiUsers, FiCreditCard, FiKey, FiEye, FiMic } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'
import Tile from './Tile'
import Page, { PageTitle } from './Page'

type Skill = { name: string; icon: IconType }

const groups: { title: string; hint: string; items: Skill[] }[] = [
  {
    title: 'Frontend',
    hint: 'Interfaces',
    items: [
      { name: 'Bootstrap', icon: SiBootstrap }, { name: 'CSS', icon: SiCss3 }, { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'JavaScript', icon: SiJavascript }, { name: 'jQuery', icon: SiJquery }, { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact }, { name: 'TypeScript', icon: SiTypescript }, { name: 'Inertia.js', icon: SiInertia },
    ],
  },
  {
    title: 'Backend & Data',
    hint: 'APIs & storage',
    items: [
      { name: 'Laravel', icon: SiLaravel }, { name: 'PHP', icon: SiPhp }, { name: 'Python', icon: SiPython },
      { name: 'FastAPI', icon: SiFastapi }, { name: 'Express', icon: SiExpress }, { name: 'Node.js', icon: SiNodedotjs }, { name: 'Flask', icon: SiFlask },
      { name: 'PostgreSQL', icon: SiPostgresql }, { name: 'MySQL', icon: SiMysql }, { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    title: 'Mobile',
    hint: 'Apps',
    items: [{ name: 'Flutter', icon: SiFlutter }, { name: 'Dart', icon: SiDart }],
  },
  {
    title: 'AI & Machine Learning',
    hint: 'Models & agents',
    items: [
      { name: 'PyTorch', icon: SiPytorch }, { name: 'TensorFlow', icon: SiTensorflow }, { name: 'Computer Vision', icon: FiEye },
      { name: 'RAG (FAISS)', icon: FiSearch }, { name: 'LLM Tool Calling', icon: FiTool }, { name: 'Agentic AI', icon: FiCpu },
      { name: 'Whisper (STT)', icon: SiOpenai }, { name: 'Text-to-Speech', icon: FiMic },
    ],
  },
  {
    title: 'Automation & Integrations',
    hint: 'Connecting systems',
    items: [
      { name: 'n8n (learning)', icon: SiN8N }, { name: 'Telegram Bot API', icon: SiTelegram },
      { name: 'Google Calendar API', icon: SiGooglecalendar }, { name: 'Spotify API', icon: SiSpotify },
      { name: 'OAuth 2.0', icon: FiKey }, { name: 'Midtrans', icon: FiCreditCard }, { name: 'Jira', icon: SiJira },
    ],
  },
  {
    title: 'Tools & Others',
    hint: 'Workflow',
    items: [
      { name: 'Git', icon: SiGit }, { name: 'Docker', icon: SiDocker }, { name: 'Supabase', icon: SiSupabase },
      { name: 'Linux (WSL)', icon: SiLinux }, { name: 'Selenium', icon: SiSelenium }, { name: 'Streamlit', icon: SiStreamlit },
      { name: 'Figma', icon: SiFigma }, { name: 'Cucumber', icon: SiCucumber }, { name: 'RBAC', icon: FiUsers },
    ],
  },
]

export default function Skills() {
  const [tab, setTab] = useState(0)
  const g = groups[tab]

  return (
    <Page>
      <PageTitle
        eyebrow="Tech stack"
        aside={
          <div role="tablist" className="scroll-soft -mx-1 flex max-w-full gap-1.5 overflow-x-auto px-1 pb-1 sm:max-w-[46rem] sm:flex-wrap sm:justify-end sm:overflow-visible">
            {groups.map((x, i) => {
              const on = tab === i
              return (
                <button
                  key={x.title}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setTab(i)}
                  className={`relative shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    on ? 'border-transparent text-black' : 'border-edge text-muted hover:border-a1/60 hover:text-fg'
                  }`}
                >
                  {on && <motion.span layoutId="skills-pill" className="bg-grad absolute inset-0 rounded-full" transition={{ type: 'spring', stiffness: 380, damping: 28 }} />}
                  <span className="relative inline-flex items-center gap-2">
                    {x.title}
                    <span className={`mono rounded-full px-1.5 text-[0.62rem] ${on ? 'bg-black/15' : 'bg-fg/10'}`}>{x.items.length}</span>
                  </span>
                </button>
              )
            })}
          </div>
        }
      >
        Tools I <span className="text-grad">build with</span>.
      </PageTitle>

      <Tile className="relative mt-5 flex min-h-[20rem] flex-1 flex-col lg:min-h-0" spotlight={false}>
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-a1 opacity-15 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-a2 opacity-10 blur-[90px]" />

        <div className="relative z-[2] flex items-end justify-between gap-4 px-6 pt-6 sm:px-9 sm:pt-8">
          <div>
            <p className="mono text-xs text-a1">{g.hint}</p>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">{g.title}</h2>
          </div>
          <span className="text-grad text-5xl font-extrabold leading-none tracking-tight sm:text-6xl">{String(g.items.length).padStart(2, '0')}</span>
        </div>

        <div className="scroll-soft relative z-[2] flex flex-1 items-center overflow-y-auto px-6 py-6 sm:px-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={g.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex w-full flex-wrap justify-center gap-3 sm:gap-4"
            >
              {g.items.map(({ name, icon: Icon }, k) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 16, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -6, rotate: k % 2 ? 2 : -2 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: k * 0.035 }}
                  className={`group flex h-28 w-[calc(50%-0.375rem)] flex-col items-center justify-center gap-3 border border-edge bg-surface p-3 text-center backdrop-blur transition-colors hover:border-a1/60 sm:h-32 sm:w-36 lg:h-36 lg:w-40 ${
                    k % 2 ? 'rounded-[2rem_0.8rem_2rem_0.8rem]' : 'rounded-[0.8rem_2rem_0.8rem_2rem]'
                  }`}
                >
                  <Icon size={36} className="text-muted transition-colors duration-300 group-hover:text-a1" />
                  <span className="text-sm font-semibold leading-tight">{name}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Tile>
    </Page>
  )
}
