'use client'

<<<<<<< Updated upstream
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowDown, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-12">
      <div className="container mx-auto px-4 z-10 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Foto Profile - Bulat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 flex-shrink-0"
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl mx-auto">
                <Image
                  src="/images/gambar-dimas.jpg" // Ganti dengan path foto kamu
                  alt="John Doe"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Efek gradient circle */}
              {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div> */}
            </div>
          </motion.div>

          {/* Teks Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-1 lg:order-2 max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Dimas Arya Ramadhan Setiawan
            </h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300"
            >
              Full Stack Developer & Machine Learning Enthusiast
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl mb-10 max-w-2xl text-gray-600 dark:text-gray-400 mx-auto lg:mx-0"
            >
              I create scalable web and mobile applications, AI-driven systems, and deep learning solutions with a focus on real-world impact.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14"
            >
              <button
                onClick={() => window.open('/file/Dimas_Arya_Ramadhan_Setiawan.pdf', '_blank')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                CV
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center lg:justify-start space-x-6 text-2xl"
            >
              <a href="https://github.com/dimas-k" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/dimas-arya-ramadhan-setiawan-4544362aa/" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/dimasarya880/" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <FaInstagram />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-2 rounded-full border-2 border-gray-400 dark:border-gray-600 text-gray-400 dark:text-gray-600"
          >
            <FaArrowDown />
          </button>
        </motion.div>
=======
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUpRight, FiMapPin, FiDownload } from 'react-icons/fi'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import {
  SiLaravel, SiFlutter, SiFastapi, SiNextdotjs, SiReact, SiTensorflow, SiPostgresql, SiDocker, SiPython, SiTypescript,
} from 'react-icons/si'
import Tile from './Tile'

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
    <section id="home" className="pt-8 pb-24 sm:pt-12">
      <div className="grid auto-rows-[minmax(11rem,auto)] grid-cols-12 gap-4">
        {/* headline */}
        <Tile className="col-span-12 row-span-2 flex flex-col justify-between p-7 sm:p-10 lg:col-span-8" spotlight>
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

          <div className="my-10">
            <p className="mono mb-4 text-sm text-muted">Hi, I&apos;m</p>
            <h1 className="text-[clamp(2.4rem,6vw,5.2rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
              Dimas Arya <br />
              <span className="text-grad">Ramadhan Setiawan</span>
            </h1>

            <div className="mt-6 h-9 overflow-hidden text-xl font-medium sm:text-2xl">
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
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              I build AI agents, automation systems, and full stack web and mobile applications end-to-end, with a
              focus on real, usable impact.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-grad group inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-semibold text-black transition-transform hover:scale-[1.03]"
              >
                View my work
                <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-2xl border border-edge px-6 py-3.5 font-semibold transition-colors hover:bg-fg/10"
              >
                Contact me
              </button>
            </div>
          </div>
        </Tile>

        {/* photo */}
        <Tile className="col-span-12 row-span-3 min-h-[26rem] p-0 sm:col-span-6 lg:col-span-4" spotlight={false}>
          <Image
            src="/images/dimas.jpg"
            alt="Dimas Arya Ramadhan Setiawan"
            fill
            priority
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-black/70 to-transparent p-5 pt-16 text-white">
            <p className="font-semibold">Dimas Arya</p>
            <p className="mono flex items-center gap-1.5 text-xs text-white/70">
              <FiMapPin /> Indramayu, West Java
            </p>
          </div>
        </Tile>

        {/* stack marquee */}
        <Tile className="marquee col-span-12 flex flex-col justify-between p-6 sm:col-span-6 lg:col-span-8" spotlight={false}>
          <span className="mono text-xs text-muted">Daily drivers</span>
          <div
            className="overflow-hidden"
            style={{ maskImage: 'linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent)' }}
          >
            <div className="marquee-track flex w-max gap-8">
              {[...stackIcons, ...stackIcons].map((Icon, k) => (
                <Icon key={k} size={34} className="shrink-0 text-muted" />
              ))}
            </div>
          </div>
        </Tile>

        {/* stats */}
        <Tile className="col-span-12 grid grid-cols-3 divide-x divide-edge p-0 sm:col-span-6 lg:col-span-5">
          {[
            ['07', 'Projects'],
            ['05', 'DL models compared'],
            ['02', 'Internships'],
          ].map(([n, l]) => (
            <div key={l} className="flex flex-col justify-between p-5">
              <span className="text-4xl font-extrabold tracking-tight text-grad sm:text-5xl">{n}</span>
              <span className="mono text-[0.68rem] leading-tight text-muted">{l}</span>
            </div>
          ))}
        </Tile>

        {/* CV */}
        <motion.a
          href="/file/Dimas_Arya_Ramadhan_Setiawan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group bg-grad col-span-6 flex flex-col justify-between rounded-[1.75rem] p-6 text-black sm:col-span-3 lg:col-span-3"
        >
          <FiDownload size={22} />
          <div className="flex items-end justify-between">
            <span className="text-xl font-bold leading-tight">Download<br />CV</span>
            <FiArrowUpRight size={22} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </motion.a>

        {/* socials */}
        <Tile className="col-span-6 flex flex-col justify-between p-5 sm:col-span-3 lg:col-span-4">
          <span className="mono text-xs text-muted">Find me</span>
          <div className="flex gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="relative z-[2] grid h-11 w-11 place-items-center rounded-xl border border-edge text-lg transition-colors hover:border-a1 hover:text-a1"
              >
                <Icon />
              </a>
            ))}
          </div>
        </Tile>
>>>>>>> Stashed changes
      </div>
    </section>
  )
}
<<<<<<< Updated upstream

export default Hero
=======
>>>>>>> Stashed changes
