'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const info = [
    { label: 'Degree', value: 'B.Sc. in CSE' },
    { label: 'University', value: 'UIU, Dhaka' },
    { label: 'Location', value: 'Dhaka, Bangladesh' },
    { label: 'Status', value: '🟢 Available for hire' },
  ]

  return (
    <section id="about" className="py-24 bg-bg-page relative border-t border-border-custom/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-text-main"
          >
            About <span className="text-accent">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1.5 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-accent p-2 shadow-2xl shadow-accent/20 transition-all duration-300 hover:scale-[1.02]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/nayeem-profile-2026.png"
                  alt="MD. Jannatul Nayeem Profile"
                  fill
                  sizes="(max-w-768px) 100vw, 384px"
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-all duration-300" />
            </div>
          </motion.div>

          {/* Right Column: Bio & Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-main mb-6">
              Who is Jannatul Nayeem?
            </h3>
            <div className="text-lg sm:text-xl text-text-sub leading-relaxed mb-8 font-medium space-y-4">
              <p>
                I turn ideas into digital experiences, blending creative design with the power of technology.
              </p>
              <p>
                From crafting intuitive interfaces to building full-stack applications, I enjoy transforming complex ideas into seamless, meaningful solutions using modern web technologies.
              </p>
              <p className="font-bold text-text-main">
                Driven by curiosity. Inspired by creativity. Built to make an impact.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {info.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-bg-card p-5 rounded-2xl border border-border-custom hover:border-accent/40 shadow-sm transition-all duration-200"
                >
                  <p className="text-accent dark:text-accent-light text-base font-bold uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-text-main text-lg font-bold">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
