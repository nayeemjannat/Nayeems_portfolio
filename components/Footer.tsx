'use client'

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-bg-page border-t border-border-custom/50 py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Info */}
        <p className="text-lg text-text-sub text-center md:text-left">
          © {currentYear} <span className="font-semibold text-text-main">MD. Jannatul Nayeem</span>. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/nayeemjannat"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-bg-card border border-border-custom/50 text-text-sub hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-200 shadow-sm"
            aria-label="GitHub Profile"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/md-jannatul-nayeem-5750523a5"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-bg-card border border-border-custom/50 text-text-sub hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-200 shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="mailto:mdjannatulnayeem001@gmail.com"
            className="p-3 rounded-xl bg-bg-card border border-border-custom/50 text-text-sub hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-200 shadow-sm"
            aria-label="Send Email"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
