'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUpRight, FiMapPin, FiDownload } from 'react-icons/fi'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import {
  SiLaravel, SiFlutter, SiFastapi, SiNextdotjs, SiReact, SiTensorflow, SiPostgresql, SiDocker, SiPython, SiTypescript,
} from 'react-icons/si'
import Tile from './Tile'
import Page from './Page'

const roles = ['Full Stack Developer', 'AI Agent & Automation Builder', 'Machine Learning Engineer']

const stackIcons = [SiLaravel, SiFlutter, SiFastapi, SiNextdotjs, SiReact, SiTensorflow, SiPostgresql, SiDocker, SiPython, SiTypescript]

const socials = [
  { icon: FaGithub, href: 'https://github.com/dimas-k', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/dimas-arya-ramadhan-setiawan-4544362aa/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/dimasarya880/', label: 'Instagram' },
]

export default function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <Page className="lg:py-1">
      <div className="grid flex-1 grid-cols-12 gap-3 lg:grid-rows-[repeat(3,minmax(0,1fr))] lg:gap-4">
        {/* headline */}
        <Tile className="col-span-12 flex flex-col justify-between gap-8 p-6 sm:p-8 lg:col-span-8 lg:row-span-2 lg:gap-4" spotlight>
          <div className="flex items-center justify-between gap-4">
            <span className="mono inline-flex items-center gap-2 rounded-full border border-edge px-3 py-1.5 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-a1 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-a1" />
              </span>
              Open to work
            </span>
            <span className="mono hidden text-xs text-muted sm:block">Portfolio · 2026</span>
          </div>

          <div>
            <p className="mono mb-3 text-sm text-muted">Hi, I&apos;m</p>
            <h1 className="text-[clamp(2.2rem,min(5.6vw,8.6vh),4.8rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
              Dimas Arya <br />
              <span className="text-grad">Ramadhan Setiawan</span>
            </h1>

            <div className="mt-4 h-9 overflow-hidden text-xl font-medium sm:text-2xl">
              <AnimatePresence mode="wait">
                <motion.p
                  key={i}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -28, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {roles[i]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div>
            <p className="max-w-xl text-base leading-relaxed text-muted [@media(min-width:1024px)_and_(max-height:760px)]:hidden sm:text-lg">
              I build AI agents, automation systems, and full stack web and mobile applications end-to-end, with a
              focus on real, usable impact.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="bg-grad group inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold text-black transition-transform hover:scale-[1.03]"
              >
                View my work
                <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link href="/contact" className="rounded-2xl border border-edge px-6 py-3 font-semibold transition-colors hover:bg-fg/10">
                Contact me
              </Link>
              <a
                href="/file/Dimas_Arya_Ramadhan_Setiawan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-edge px-5 py-3 font-semibold transition-colors hover:border-a1 hover:text-a1"
              >
                <FiDownload /> CV
              </a>
            </div>
          </div>
        </Tile>

        {/* photo */}
        <Tile className="col-span-12 min-h-[24rem] p-0 sm:col-span-6 sm:col-start-4 lg:col-span-4 lg:col-start-auto lg:row-span-3 lg:min-h-0 lg:rotate-[1.5deg] lg:hover:rotate-0 transition-[rotate] duration-500" spotlight={false}>
          <Image
            src="/images/dimas.jpg"
            alt="Dimas Arya Ramadhan Setiawan"
            fill
            priority
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 z-[2] flex items-end justify-between gap-3 bg-gradient-to-t from-black/75 to-transparent p-5 pt-16 text-white">
            <div>
              <p className="font-semibold">Dimas Arya</p>
              <p className="mono flex items-center gap-1.5 text-xs text-white/70">
                <FiMapPin /> Indramayu, West Java
              </p>
            </div>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/25 bg-black/30 backdrop-blur transition-colors hover:border-a1 hover:text-a1"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </Tile>

        {/* stats */}
        <Tile className="col-span-12 grid grid-cols-3 divide-x divide-edge p-0 sm:col-span-6 lg:col-span-4" spotlight>
          {[
            ['07', 'Projects'],
            ['05', 'DL models compared'],
            ['02', 'Internships'],
          ].map(([n, l]) => (
            <div key={l} className="flex flex-col justify-between p-4 lg:p-5">
              <span className="text-4xl font-extrabold tracking-tight text-grad xl:text-5xl">{n}</span>
              <span className="mono text-[0.68rem] leading-tight text-muted">{l}</span>
            </div>
          ))}
        </Tile>

        {/* stack marquee */}
        <Tile className="marquee col-span-12 flex flex-col justify-between gap-4 p-5 sm:col-span-6 lg:col-span-4" spotlight={false}>
          <span className="mono text-xs text-muted">Daily drivers</span>
          <div
            className="overflow-hidden"
            style={{ maskImage: 'linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent)' }}
          >
            <div className="marquee-track flex w-max gap-8">
              {[...stackIcons, ...stackIcons].map((Icon, k) => (
                <Icon key={k} size={32} className="shrink-0 text-muted" />
              ))}
            </div>
          </div>
        </Tile>
      </div>
    </Page>
  )
}
