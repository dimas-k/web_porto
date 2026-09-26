// app/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import ScrambleText from './ScrambleText'

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-0 relative overflow-hidden">
      <div className="absolute inset-0 field-grid pointer-events-none" />
      <div className="px-6 md:px-10 relative">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-mono)] text-ink-dim text-sm mb-6"
        >
          <span className="text-lime">$</span> who am i —{' '}
          <span className="text-ink">Dimas Arya Ramadhan Setiawan</span>
        </motion.p>

        <h1 className="font-[family-name:var(--font-mono)] font-bold text-ink text-[10vw] md:text-[6.5vw] leading-[1.05] tracking-tight mb-10 min-h-[2.3em] md:min-h-[1.2em]">
          <ScrambleText
            words={['SOFTWARE_ENGINEER', 'ML/AI_ENGINEER', 'DIMAS ARYA RAMADHAN SETIAWAN']}
            speed={28}
            holdMs={650}
          />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end pb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-ink-dim max-w-xl"
          >
            Full-stack developer and applied deep learning researcher. Latest work: fusing computer vision
            with live IoT sensor data to classify rice leaf disease.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() => window.open('/file/Dimas_Arya_Ramadhan_Setiawan.pdf', '_blank')}
              className="px-6 py-3 bg-lime text-bg font-[family-name:var(--font-display)] font-semibold flex items-center gap-2 hover:bg-ink transition-colors"
            >
              Download CV <FaArrowRight />
            </button>
            <div className="flex items-center gap-4 text-xl text-ink-dim">
              <a href="https://github.com/dimas-k" aria-label="GitHub" className="hover:text-lime transition-colors"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/dimas-arya-ramadhan-setiawan-4544362aa/" aria-label="LinkedIn" className="hover:text-lime transition-colors"><FaLinkedin /></a>
              <a href="https://www.instagram.com/dimasarya880/" aria-label="Instagram" className="hover:text-lime transition-colors"><FaInstagram /></a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 border-t border-line"
      >
        <div className="relative h-56 md:h-72 bg-bg-panel border-r border-line overflow-hidden col-span-2 md:col-span-1">
          <Image
            src="/images/gambar-dimas.jpg"
            alt="Dimas Arya Ramadhan Setiawan"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-6 md:p-8 bg-moss border-r border-line flex flex-col justify-between">
          <span className="text-ink/70 text-sm">GPA</span>
          <span className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl text-ink">3.89</span>
        </div>
        <div className="p-6 md:p-8 bg-bg-panel border-r border-line flex flex-col justify-between">
          <span className="text-ink-dim text-sm">Shipped projects</span>
          <span className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl text-lime">6+</span>
        </div>
        <div className="p-6 md:p-8 bg-clay flex flex-col justify-between">
          <span className="text-bg/70 text-sm">DL models compared</span>
          <span className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl text-bg">5</span>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
