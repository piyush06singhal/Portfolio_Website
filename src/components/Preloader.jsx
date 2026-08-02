import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'
import './Preloader.css'

const NAME = 'PIYUSH SINGHAL'
const EASE = [0.76, 0, 0.24, 1]

// Shows once per browser session: the name types itself in, a progress rail
// fills, then two panels split apart to reveal the site.
const Preloader = () => {
  const reduced = usePrefersReducedMotion()
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    return sessionStorage.getItem('preloaded') !== '1'
  })

  useEffect(() => {
    if (!visible) return

    // Reduced motion still gets the reveal, just immediately.
    const hold = reduced ? 200 : 2100
    const timer = setTimeout(() => {
      sessionStorage.setItem('preloaded', '1')
      setVisible(false)
    }, hold)

    document.body.style.overflow = 'hidden'
    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [visible, reduced])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="preloader" exit={{ pointerEvents: 'none' }}>
          <motion.div
            className="preloader-panel top"
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: EASE }}
          />
          <motion.div
            className="preloader-panel bottom"
            initial={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.8, ease: EASE }}
          />

          <motion.div
            className="preloader-inner"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <div className="preloader-name" aria-label={NAME}>
              {[...NAME].map((char, i) => (
                <motion.span
                  key={i}
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: reduced ? 0 : 0.15 + i * 0.045,
                    ease: EASE
                  }}
                  style={{
                    backgroundSize: `${NAME.length * 100}% 100%`,
                    backgroundPosition: `${(i / (NAME.length - 1)) * 100}% 0`
                  }}
                >
                  {char === ' ' ? ' ' : char}
                </motion.span>
              ))}
            </div>

            <div className="preloader-rail">
              <motion.div
                className="preloader-fill"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: reduced ? 0.2 : 1.8, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
