import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import MagneticButton from '../components/MagneticButton'
import { socialLinks, SocialIcon } from '../data/socialLinks'
import {
  CONTACT_EMAIL,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  supabaseInsert
} from '../config/services'
import {
  fadeFromLeft,
  fadeFromRight,
  fadeUp,
  popIn,
  staggerContainer,
  viewportEarly
} from '../utils/motion'
import './Contact.css'

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' }

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'subject', label: 'Subject', type: 'text', autoComplete: 'off' }
]

const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    value: CONTACT_EMAIL,
    link: `mailto:${CONTACT_EMAIL}`
  },
  {
    icon: '📱',
    title: 'Phone',
    value: '+91 9694984312',
    link: 'tel:+919694984312'
  },
  {
    icon: '📍',
    title: 'Location',
    value: 'Rajasthan, India',
    link: 'https://www.google.com/maps/search/?api=1&query=Rajasthan%2C+India'
  }
]

const Contact = () => {
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Bots fill every field they find; humans never see this one.
  const [honeypot, setHoneypot] = useState('')

  const resetTimer = useRef(null)

  useEffect(() => () => clearTimeout(resetTimer.current), [])

  const scheduleStatusReset = () => {
    clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setStatus(''), 6000)
  }

  const handleChange = (e) => {
    setFormData((current) => ({ ...current, [e.target.name]: e.target.value }))
  }

  // Fired only after the message is safely stored. A failure here is logged
  // but never shown to the user and never navigates them away — they've
  // already been told the message was sent, and it was.
  const sendEmailNotification = async (data) => {
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: CONTACT_EMAIL
        },
        EMAILJS_PUBLIC_KEY
      )
    } catch (error) {
      console.error('Email notification failed (message was still saved):', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Silently succeed for bots so they don't learn to retry.
    if (honeypot) {
      setStatus('success')
      setFormData(EMPTY_FORM)
      scheduleStatusReset()
      return
    }

    setIsSubmitting(true)
    setStatus('')

    const submitted = { ...formData }

    try {
      await supabaseInsert('contact_messages', {
        ...submitted,
        created_at: new Date().toISOString()
      })

      setStatus('success')
      setFormData(EMPTY_FORM)
      await sendEmailNotification(submitted)
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
      scheduleStatusReset()
    }
  }

  return (
    <div className="page contact-page">
      <motion.h1
        className="page-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h1>
      <motion.p
        className="page-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Let's work together on your next project
      </motion.p>

      <div className="contact-container">
        <motion.div
          className="contact-info-section"
          variants={fadeFromLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportEarly}
        >
          <div className="availability-badge">
            <span className="status-dot"></span>
            <span>Available for Work</span>
          </div>

          <h2 className="section-title">Contact Information</h2>
          <p className="section-description">
            Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
          </p>

          <div className="response-time">
            <span className="response-icon">⚡</span>
            <span>Usually responds within 24 hours</span>
          </div>

          <motion.div
            className="contact-info-cards"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportEarly}
          >
            {contactInfo.map((info) => (
              <motion.a
                key={info.title}
                href={info.link}
                className="info-card"
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="info-icon">{info.icon}</span>
                <h3 className="info-title">{info.title}</h3>
                <p className="info-value">{info.value}</p>
              </motion.a>
            ))}
          </motion.div>

          <div className="social-links">
            <h3 className="social-title">Follow Me</h3>
            <motion.div
              className="social-icons"
              variants={staggerContainer(0.09)}
              initial="hidden"
              whileInView="show"
              viewport={viewportEarly}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={popIn}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  aria-label={social.name}
                  title={social.name}
                >
                  <SocialIcon path={social.path} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-section"
          variants={fadeFromRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportEarly}
        >
          <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
            {FIELDS.map((field) => (
              <div className="form-group" key={field.name}>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  className="form-input"
                  value={formData[field.name]}
                  onChange={handleChange}
                  autoComplete={field.autoComplete}
                  required
                  placeholder=" "
                />
                <label htmlFor={field.name} className="floating-label">
                  {field.label}
                </label>
              </div>
            ))}

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                className="form-input"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder=" "
              />
              <label htmlFor="message" className="floating-label">
                Message
              </label>
            </div>

            {/* Honeypot — hidden from people, irresistible to bots. */}
            <div className="honeypot" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <MagneticButton
              type="submit"
              className={`submit-btn ${status === 'success' ? 'is-sent' : ''}`}
              disabled={isSubmitting}
              strength={0.2}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isSubmitting ? (
                  <motion.span
                    key="sending"
                    className="btn-state"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="btn-spinner" />
                    Sending…
                  </motion.span>
                ) : status === 'success' ? (
                  <motion.span
                    key="sent"
                    className="btn-state"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      className="btn-check"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <motion.path
                        d="M4 12.5 9.5 18 20 6.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                      />
                    </svg>
                    Sent
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    className="btn-state"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    Send Message
                  </motion.span>
                )}
              </AnimatePresence>
            </MagneticButton>

            <div className="status-region" role="status" aria-live="polite">
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    className="status-message success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    className="status-message error"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    ❌ Couldn't send that. Please try again, or email me directly at{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
