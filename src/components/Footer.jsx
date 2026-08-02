import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { socialLinks, SocialIcon } from '../data/socialLinks'
import { supabaseInsert } from '../config/services'
import './Footer.css'

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/education', label: 'Education' },
  { path: '/contact', label: 'Contact' }
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle') // idle | sending | done | error
  const resetTimer = useRef(null)

  useEffect(() => () => clearTimeout(resetTimer.current), [])

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email.trim() || state === 'sending') return

    setState('sending')

    try {
      await supabaseInsert('newsletter_subscribers', {
        email: email.trim(),
        created_at: new Date().toISOString()
      })
      setEmail('')
      setState('done')
    } catch (error) {
      console.error('Newsletter signup failed:', error)
      setState('error')
    }

    clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setState('idle'), 5000)
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">Portfolio</h3>
          <p className="footer-description">
            Building digital experiences that make a difference. Let's create something amazing together.
          </p>
          <div className="footer-social">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
                title={social.name}
              >
                <SocialIcon path={social.path} size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Contact Info</h4>
          <ul className="footer-contact">
            <li>
              <span className="contact-icon">📧</span>
              <a href="mailto:piyush.singhal.2004@gmail.com">piyush.singhal.2004@gmail.com</a>
            </li>
            <li>
              <span className="contact-icon">📱</span>
              <a href="tel:+919694984312">+91 9694984312</a>
            </li>
            <li>
              <span className="contact-icon">📍</span>
              <span>Rajasthan, India</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Newsletter</h4>
          <p className="newsletter-text">Subscribe to get updates on my latest projects</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
            <button type="submit" disabled={state === 'sending'}>
              {state === 'sending' ? 'Joining…' : 'Subscribe'}
            </button>
          </form>

          <div className="newsletter-status" role="status" aria-live="polite">
            <AnimatePresence>
              {state === 'done' && (
                <motion.p
                  className="newsletter-msg success"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  ✅ You're on the list — thanks!
                </motion.p>
              )}
              {state === 'error' && (
                <motion.p
                  className="newsletter-msg error"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  ❌ Couldn't subscribe right now. Try again later.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © {currentYear} Piyush Singhal. All rights reserved.
        </p>
        <div className="footer-bottom-links">
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <a
            href="https://github.com/piyush06singhal"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
