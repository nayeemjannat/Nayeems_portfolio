'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-bg-page py-20"
    >
      {/* Dynamic Floating Glow Blobs — Lightweight GPU Accelerated */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -80, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-10 -left-10 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-accent/15 dark:bg-accent/10 blur-[80px] md:blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 50, 0],
            y: [0, 80, -40, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-20 -right-20 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-purple-500/15 dark:bg-purple-500/10 blur-[80px] md:blur-[120px]"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        {/* Small greeting */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent dark:text-accent-light text-xl md:text-2xl font-bold mb-6 tracking-widest uppercase"
        >
          Hello, I am
        </motion.p>

        {/* Huge Name - optimized for high-readability */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black text-text-main mb-6 leading-[1.1] tracking-tight"
        >
          MD. Jannatul <span className="text-accent">Nayeem</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-16 flex items-center justify-center mb-8"
        >
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              2000,
              'React.js Developer',
              2000,
              'MERN Stack Developer',
              2000,
              'Next.js Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-accent-light dark:text-accent-hover tracking-wide border-b-2 border-accent/20 pb-1"
          />
        </motion.div>

        {/* Small confident statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-text-sub max-w-2xl leading-relaxed mb-12 font-medium"
        >
          Building highly-performant, responsive web applications with pixel-perfect design and smooth interactive user experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-5 justify-center items-center mb-16"
        >
          <a
            href="#projects"
            className="px-10 py-4 bg-accent hover:bg-accent-hover text-white text-lg md:text-xl font-bold rounded-2xl shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2 cursor-pointer"
          >
            View My Work <FiArrowDown className="animate-bounce" />
          </a>
          <a
            href="/Nayeem_CV.pdf"
            download="Nayeem_CV.pdf"
            className="px-10 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-white dark:border-accent-light dark:text-accent-light dark:hover:bg-accent dark:hover:text-white text-lg md:text-xl font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            Download CV
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/nayeemjannat"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-bg-card border border-border-custom text-text-sub hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-200 shadow-md"
            aria-label="GitHub Profile"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/md-jannatul-nayeem-5750523a5"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-bg-card border border-border-custom text-text-sub hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-200 shadow-md"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
