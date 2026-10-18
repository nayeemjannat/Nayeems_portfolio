'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 15 } },
  }

  return (
    <section id="projects" className="py-24 bg-bg-page border-t border-border-custom/30">
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
            My Featured <span className="text-accent">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1.5 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-bg-card rounded-2xl border border-border-custom hover:border-accent/40 shadow-md hover:shadow-xl hover:shadow-accent/5 overflow-hidden flex flex-col h-full group"
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden bg-bg-page border-b border-border-custom/40">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 384px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-accent/5 text-accent font-black text-2xl">
                    {project.title[0]}
                  </div>
                )}

                {/* Progress Status overlay */}
                {project.inProgress && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-white font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    In Progress
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold px-3 py-1.5 rounded-lg bg-bg-page border border-border-custom text-text-sub uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-extrabold text-text-main mb-3 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Project Description (concise - 2 sentences max) */}
                <p className="text-base text-text-sub leading-relaxed mb-6 font-medium flex-grow">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border-custom/50">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 bg-accent hover:bg-accent-hover text-white text-base font-bold rounded-xl shadow-md transition-all duration-200 inline-flex items-center justify-center gap-2"
                    >
                      Live Demo <FiExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="flex-1 py-3 px-4 bg-border-custom/30 text-text-sub text-base font-bold rounded-xl inline-flex items-center justify-center gap-2 cursor-not-allowed">
                      In Development
                    </span>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-5 border border-border-custom hover:border-accent hover:text-accent dark:hover:text-accent-light text-text-sub text-base font-bold rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2"
                    aria-label="View Code on GitHub"
                  >
                    <FiGithub size={18} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
