// app/components/Hero.tsx
'use client'

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
              I create exceptional digital experiences with a focus on performance, accessibility, and engaging design.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14"
            >
              <button
                onClick={() => window.open('/file/CV_DIMAS_ARYA_RAMADHAN_SETIAWAN.pdf', '_blank')}
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
      </div>
    </section>
  )
}

export default Hero