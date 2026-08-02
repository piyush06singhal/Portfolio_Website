import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

// Wraps each route so AnimatePresence can cross-fade between pages.
const PageTransition = ({ children }) => (
  <motion.div
    className="page-transition"
    initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
    animate={{
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.55, ease: EASE }
    }}
    exit={{
      opacity: 0,
      y: -16,
      filter: 'blur(6px)',
      transition: { duration: 0.3, ease: 'easeIn' }
    }}
  >
    {children}
  </motion.div>
)

export default PageTransition
