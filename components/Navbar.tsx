'use client'

import { useState, useEffect, useSyncExternalStore } from 'react'
import { useTheme } from 'next-themes'
import { FiSun, FiMoon, FiMenu, FiX, FiUser, FiCpu, FiBriefcase, FiMail } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const links = [
  { name: 'About', href: '#about', icon: FiUser },
  { name: 'Skills', href: '#skills', icon: FiCpu },
  { name: 'Projects', href: '#projects', icon: FiBriefcase },
  { name: 'Contact', href: '#contact', icon: FiMail },
]

const subscribe = () => () => {}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)
  const [activeSection, setActiveSection] = useState('')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Setup dynamic scroll listener to track which section is currently occupying the center of the screen
  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight

      // If at the very top of the page, clear active section
      if (scrollPosition < 120) {
        setActiveSection('')
        return
      }

      // Check which section occupies the main center of the screen
      let currentSection = ''
      let maxVisibleHeight = 0

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()

          // Calculate intersection of the section with the middle 60% of viewport
          const topBound = viewportHeight * 0.2
          const bottomBound = viewportHeight * 0.8

          const visibleTop = Math.max(rect.top, topBound)
          const visibleBottom = Math.min(rect.bottom, bottomBound)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)

          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight
            currentSection = id
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    // Initialize immediately on mount
    handleScroll()

    // Listen to scroll and resize events
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [mounted])

  const toggleMenu = () => setIsOpen(!isOpen)

  // Custom smooth scroll handler that calculates precise positions and handles mobile collapse animations safely
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isMobile = false) => {
    e.preventDefault()

    if (isMobile) {
      setIsOpen(false)
    }

    const targetId = href.replace('#', '')

    // Smooth scroll to top for home
    if (targetId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      return
    }

    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      // Small timeout for mobile to let collapse transition begin safely, avoiding scroll interruption
      setTimeout(() => {
        const offset = scrolled ? 80 : 92 // Height of navbar depending on shrunk vs full state
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }, isMobile ? 120 : 0)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg-card/80 dark:bg-bg-page/75 backdrop-blur-xl shadow-lg border-b border-border-custom/50 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#home"
          onClick={(e) => handleScrollToSection(e, '#home')}
          className="flex items-center gap-4 text-2xl md:text-3xl font-extrabold tracking-tight group"
        >
          <motion.div
            whileHover={{ rotate: 8, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="relative w-14 h-14 flex items-center justify-center bg-bg-card border border-border-custom group-hover:border-accent/40 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg group-hover:shadow-accent/25 transition-all duration-300 p-1.5"
          >
            <Image
              src="/logo_nav.png"
              alt="Nayeem Brand Logo"
              width={42}
              height={48}
              className="object-contain"
              priority
            />
          </motion.div>
          <span className="text-accent dark:text-accent-light group-hover:text-accent-hover transition-colors duration-300 select-none">
            Nayeem
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <ul className="flex gap-1 lg:gap-2 p-1 lg:p-1.5 bg-bg-page/40 dark:bg-bg-card/30 border border-border-custom/40 rounded-2xl backdrop-blur-md relative">
            {links.map((link, idx) => {
              const isActive = activeSection === link.name.toLowerCase()
              return (
                <li key={link.name} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className={`relative px-3.5 py-2 lg:px-5 lg:py-2.5 rounded-xl text-sm lg:text-base font-extrabold transition-all duration-300 select-none block z-10 ${
                      isActive
                        ? 'text-white'
                        : 'text-text-sub hover:text-text-main dark:hover:text-white'
                    }`}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {link.name}

                    {/* Active section sliding pill background */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-pill"
                        className="absolute inset-0 bg-accent shadow-md shadow-accent/35 dark:shadow-accent/20 rounded-xl -z-10"
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      />
                    )}

                    {/* Hover sliding pill background (under active pill) */}
                    {hoveredIndex === idx && !isActive && (
                      <motion.div
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 bg-accent/10 dark:bg-accent/15 rounded-xl -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Theme Toggle Desktop */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-3 rounded-xl bg-bg-card dark:bg-bg-page/55 border border-border-custom text-text-main hover:bg-accent hover:border-accent hover:text-white dark:hover:text-white transition-all duration-300 shadow-sm cursor-pointer hover:shadow-md hover:shadow-accent/15"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          )}
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center gap-3.5 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-3 rounded-xl bg-bg-card border border-border-custom text-text-main hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          )}
          <button
            onClick={toggleMenu}
            className="p-3 rounded-xl bg-bg-card border border-border-custom text-text-main hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Open Menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu with beautiful, animated cards */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden w-full bg-bg-card/95 dark:bg-bg-page/95 backdrop-blur-xl border-b border-border-custom/80 shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)] custom-scrollbar"
          >
            <ul className="px-6 py-8 flex flex-col gap-3.5">
              {links.map((link, idx) => {
                const Icon = link.icon
                const isActive = activeSection === link.name.toLowerCase()
                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06, type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-full"
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleScrollToSection(e, link.href, true)}
                      className={`w-full flex items-center justify-between p-4.5 rounded-2xl border transition-all duration-300 font-extrabold text-lg sm:text-xl ${
                        isActive
                          ? 'bg-accent/10 border-accent/40 text-accent dark:bg-accent/15 dark:border-accent/30'
                          : 'bg-bg-page/50 border-border-custom/40 dark:bg-bg-card/30 text-text-sub hover:text-text-main dark:hover:text-white hover:bg-bg-page dark:hover:bg-bg-card hover:border-accent/35'
                      }`}
                    >
                      <div className="flex items-center gap-4.5">
                        <span className={`p-3 rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'bg-accent text-white shadow-md shadow-accent/25'
                            : 'bg-bg-card dark:bg-bg-page border border-border-custom text-text-sub'
                        }`}>
                          <Icon size={20} />
                        </span>
                        <span>{link.name}</span>
                      </div>
                      <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        isActive ? 'bg-accent scale-100 shadow-[0_0_8px_rgba(99,102,241,0.6)]' : 'bg-transparent scale-0'
                      }`} />
                    </a>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
