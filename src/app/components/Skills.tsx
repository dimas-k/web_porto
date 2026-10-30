'use client'

import type { IconType } from 'react-icons'
import {
  SiBootstrap, SiCss3, SiTailwindcss, SiJavascript, SiJquery, SiNextdotjs, SiReact, SiTypescript,
  SiLaravel, SiPhp, SiPython, SiFastapi, SiExpress, SiNodedotjs, SiPostgresql, SiMysql, SiMongodb,
  SiGit, SiDocker, SiFigma, SiCucumber, SiInertia, SiFlutter, SiDart, SiPytorch, SiTensorflow, SiOpenai,
  SiFlask, SiStreamlit, SiN8N, SiTelegram, SiGooglecalendar, SiSpotify, SiJira, SiSupabase, SiSelenium, SiLinux,
} from 'react-icons/si'
import { FiCpu, FiSearch, FiTool, FiUsers, FiCreditCard, FiKey, FiEye, FiMic } from 'react-icons/fi'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'
import Tile from './Tile'

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
  return (
    <section id="skills" className="py-24">
      <Reveal className="mb-12">
        <Eyebrow>Tech stack</Eyebrow>
        <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
          Tools I <span className="text-grad">build with</span>.
        </h2>
      </Reveal>

      <div className="space-y-12">
        {groups.map((g) => (
          <div key={g.title}>
            <Reveal className="mb-4 flex items-baseline justify-between border-b border-edge pb-3">
              <h3 className="text-xl font-bold tracking-tight">{g.title}</h3>
              <span className="mono text-xs text-muted">{g.hint}</span>
            </Reveal>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {g.items.map(({ name, icon: Icon }) => (
                <Tile key={name} className="group flex items-center gap-4 rounded-2xl p-4">
                  <Icon size={28} className="relative z-[2] shrink-0 text-muted transition-all duration-300 group-hover:scale-110 group-hover:text-a1" />
                  <span className="relative z-[2] text-sm font-semibold">{name}</span>
                </Tile>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
