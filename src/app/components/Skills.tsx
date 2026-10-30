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

<<<<<<< Updated upstream
const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Bootstrap', level: 97 },
        { name: 'CSS', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Javascript', level: 90 },
        { name: 'Jquery', level: 87 },
        { name: 'Next.js', level: 77 },
        { name: 'React js', level: 77 },
        { name: 'TypeScript', level: 70 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Laravel', level: 97 },
        { name: 'PHP', level: 90 },
        { name: 'Python', level: 90 },
        { name: 'Fast API', level: 90 },
        { name: 'Express', level: 80 },
        { name: 'Node.js', level: 80 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'Mysql', level: 90 },
        { name: 'MongoDB', level: 80 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Figma', level: 70 },
        { name: 'Cucumber', level: 70 },
      ]
    }
  ]
=======
type Skill = { name: string; icon: IconType }
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">My Skills</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I continuously develop my skills and learn new technologies to stay relevant
            in an ever-evolving industry.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
=======
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
>>>>>>> Stashed changes
      </div>
    </section>
  )
}
<<<<<<< Updated upstream

export default Skills
=======
>>>>>>> Stashed changes
