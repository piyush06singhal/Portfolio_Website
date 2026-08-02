import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

// Wraps a timeline and draws its connecting line downward as the section
// scrolls through the viewport. The line is split into a dim static track and
// a gradient fill scaled from the top.
const Timeline = ({ children }) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 65%']
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    restDelta: 0.001
  })

  return (
    <div className="timeline" ref={ref}>
      <div className="timeline-track" aria-hidden="true" />
      <motion.div
        className="timeline-line"
        style={{ scaleY }}
        aria-hidden="true"
      />
      {children}
    </div>
  )
}

export default Timeline
