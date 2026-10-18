'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/skills'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

// Map of icon names to components for complete safety
const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; className?: string }>> = {
  FaHtml5,
  FaCss3Alt,
  SiJavascript,
  FaReact,
  SiNextdotjs,
  SiTailwindcss,
  FaNodeJs,
  SiMongodb,
  SiExpress,
  FaGitAlt,
  FaGithub,
  VscVscode,
}

const categories = ['Frontend', 'Learning', 'Tools'] as const

export default function Skills() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 15 } },
  }

  return (
    <section id="skills" className="py-24 bg-bg-page border-t border-border-custom/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-text-main"
          >
            My <span className="text-accent">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1.5 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories Grouping */}
        <div className="flex flex-col gap-16">
          {categories.map((category) => {
            const filteredSkills = skills.filter((s) => s.category === category)
            const titleLabel =
              category === 'Frontend'
                ? 'Frontend Core'
                : category === 'Learning'
                ? 'Learning / Backend'
                : 'Tools & Ecosystem'

            return (
              <div key={category} className="flex flex-col">
                {/* Category Header */}
                <h3 className="text-2xl font-black text-text-main mb-8 border-l-4 border-accent pl-4">
                  {titleLabel}
                </h3>

                {/* Grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-50px' }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
                >
                  {filteredSkills.map((skill) => {
                    const IconComponent = iconMap[skill.icon]

                    return (
                      <motion.div
                        key={skill.name}
                        variants={cardVariants}
                        whileHover={{ y: -8, scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          '--hover-glow': `${skill.color}15`,
                          '--border-glow': `${skill.color}40`,
                        } as React.CSSProperties}
                        className="bg-bg-card border border-border-custom hover:border-[var(--border-glow)] hover:shadow-lg hover:shadow-[var(--hover-glow)] p-6 rounded-2xl flex flex-col items-center justify-between text-center transition-all duration-200"
                      >
                        {/* Skill Icon */}
                        <div
                          className="w-16 h-16 flex items-center justify-center rounded-2xl bg-bg-page border border-border-custom/50 mb-4 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: skill.color }}
                        >
                          {IconComponent ? (
                            <IconComponent size={32} />
                          ) : (
                            <span className="text-sm font-semibold">{skill.name[0]}</span>
                          )}
                        </div>

                        {/* Skill Name */}
                        <p className="text-lg font-bold text-text-main mt-2">
                          {skill.name}
                        </p>

                        {/* Skill Badge */}
                        <span
                          className={`text-xs font-extrabold px-3 py-1 rounded-full mt-3 uppercase tracking-wider ${
                            skill.category === 'Frontend'
                              ? 'bg-blue-500/10 text-blue-500'
                              : skill.category === 'Learning'
                              ? 'bg-amber-500/10 text-amber-500'
                              : 'bg-emerald-500/10 text-emerald-500'
                          }`}
                        >
                          {skill.category}
                        </span>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
