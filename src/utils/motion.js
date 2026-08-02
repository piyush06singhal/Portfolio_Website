// Shared framer-motion variants so every section reveals with the same rhythm.
// Pages use these with `initial="hidden" whileInView="show" viewport={viewportOnce}`
// instead of `animate`, so content assembles as you scroll to it.

const EASE = [0.22, 1, 0.36, 1]

export const viewportOnce = { once: true, amount: 0.2 }
export const viewportEarly = { once: true, amount: 0.1 }

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } }
}

export const fadeFromLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } }
}

export const fadeFromRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } }
}

export const popIn = {
  hidden: { opacity: 0, scale: 0.4 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } }
}

// Alternates direction per item — used by the education timeline.
export const fadeFromSide = (fromLeft) => (fromLeft ? fadeFromLeft : fadeFromRight)

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } }
})
