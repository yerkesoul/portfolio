'use client'

import { useEffect, useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/50 z-10" />
      </div>
      
      <motion.div 
        className="relative z-20 text-center space-y-6 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio_photo-errqhuAcOp8zYAuerKSeX2Yd4baQdd.png"
            alt="Yerkezhan Abdullayeva"
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Yerkezhan Abdullayeva
        </motion.h1>
        
        <motion.h2 
          className="text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          NLP Data Analyst | Machine Learning Engineer | AI Researcher
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-6 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="mailto:yerkezhan.abdullayeva@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <FaEnvelope /> yerkezhan.abdullayeva@gmail.com
          </a>
          <a href="tel:+4915752668911" className="flex items-center gap-2 hover:text-primary transition-colors">
            <FaPhone /> +49 157 5266 8911
          </a>
          <a href="https://www.linkedin.com/in/yerkesoul" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <FaLinkedin /> Yerkezhan
          </a>
          <a href="https://github.com/Yerkesoul" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <FaGithub /> Yerkesoul
          </a>
        </motion.div>
        
        <motion.p 
          className="flex items-center justify-center gap-2 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <FaMapMarkerAlt /> Berlin, Germany
        </motion.p>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

