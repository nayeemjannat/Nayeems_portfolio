'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [messageText, setMessageText] = useState('')

  const infoDetails = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'mdjannatulnayeem001@gmail.com',
      href: 'mailto:mdjannatulnayeem001@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '01760797676',
      href: 'tel:01760797676',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      subValue: 'Open to Remote Work',
    },
  ]

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setLoading(true)
    setStatus('idle')

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_default'
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_default'
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key_default'

    try {
      // Send the email using EmailJS browser library
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )
      setStatus('success')
      setMessageText('Thank you! Your message was sent successfully. I will get back to you soon.')
      formRef.current.reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
      setMessageText('Oops! Something went wrong while sending your message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-bg-page relative border-t border-border-custom/30">
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
            Get In <span className="text-accent">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1.5 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-3xl font-extrabold text-text-main mb-4">
                Let&apos;s discuss something great!
              </h3>
              <p className="text-lg text-text-sub leading-relaxed font-medium">
                I am actively looking for frontend and full-stack opportunities. Feel free to contact me using the form or reach out directly through any channel!
              </p>
            </div>

            <div className="space-y-6">
              {infoDetails.map((detail) => {
                const Icon = detail.icon
                return (
                  <div key={detail.label} className="flex gap-5 items-start">
                    <div className="p-4 rounded-2xl bg-bg-card border border-border-custom/50 text-accent dark:text-accent-light shadow-sm">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-sub uppercase tracking-wider">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-xl font-bold text-text-main hover:text-accent border-b-2 border-transparent hover:border-accent transition-all duration-200"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-xl font-bold text-text-main">
                          {detail.value}
                          {detail.subValue && (
                            <span className="block text-base font-semibold text-accent mt-1">
                              {detail.subValue}
                            </span>
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

          </motion.div>

          {/* Right Column: EmailJS Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-bg-card border border-border-custom p-8 sm:p-10 rounded-3xl shadow-lg relative"
          >
            <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
              {/* Form Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-base font-bold text-text-main mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-2xl bg-bg-page border border-border-custom text-text-main placeholder-text-sub/50 outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all text-base font-semibold"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-base font-bold text-text-main mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 rounded-2xl bg-bg-page border border-border-custom text-text-main placeholder-text-sub/50 outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all text-base font-semibold"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-base font-bold text-text-main mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="What is this regarding?"
                  className="w-full px-5 py-4 rounded-2xl bg-bg-page border border-border-custom text-text-main placeholder-text-sub/50 outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all text-base font-semibold"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-bold text-text-main mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-5 py-4 rounded-2xl bg-bg-page border border-border-custom text-text-main placeholder-text-sub/50 outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all text-base font-semibold resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 bg-accent hover:bg-accent-hover disabled:bg-border-custom/50 text-white font-bold text-lg md:text-xl rounded-2xl shadow-lg shadow-accent/25 transition-all duration-300 disabled:cursor-not-allowed hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
              >
                {loading ? (
                  <>Sending Message...</>
                ) : (
                  <>
                    Send Message <FiSend size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Notification Toast panel */}
            <AnimatePresence>
              {status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`mt-6 p-4 rounded-2xl border flex gap-3 items-start ${
                    status === 'success'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400'
                  }`}
                >
                  <div className="mt-0.5">
                    {status === 'success' ? <FiCheckCircle size={20} /> : <FiAlertCircle size={20} />}
                  </div>
                  <p className="text-base font-bold">{messageText}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
