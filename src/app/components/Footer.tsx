// app/components/Footer.tsx
'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin, } from 'react-icons/fa'

const Footer = () => {
  

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-2">Dimas Arya Ramadhan Setiawan</h3>
            <p className="text-gray-400">Full Stack Developer & Machine Learning Enthusiast</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6 text-xl mb-6 md:mb-0"
          >
            <a href="https://github.com/dimas-k" className="text-gray-400 hover:text-purple-400 transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/dimas-arya-ramadhan-setiawan-4544362aa/" className="text-gray-400 hover:text-purple-400 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/dimasarya880/" className="text-gray-400 hover:text-purple-400 transition-colors">
              <FaInstagram />
            </a>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 flex items-center"
          >
            <span>© {currentYear} Made with</span>
            <FaHeart className="text-red-500 mx-1" />
            <span>by John Doe</span>
          </motion.div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer