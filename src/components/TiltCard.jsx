import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform
} from 'framer-motion'
import './TiltCard.css'

const SPRING = { stiffness: 190, damping: 20, mass: 0.4 }

// Cursor-reactive 3D tilt with a glare highlight that tracks the pointer.
// Falls back to a completely static card on touch devices and when the user
// asks for reduced motion. Any extra motion props (variants, whileInView,
// whileHover…) are forwarded to the underlying motion.div.
const TiltCard = ({
  children,
  className = '',
  max = 9,
  glare = true,
  glareStrength = 0.22,
  style,
  ...motionProps
}) => {
  const ref = useRef(null)
  const [enabled, setEnabled] = useState(false)
  const [hovered, setHovered] = useState(false)

  // Pointer position within the card, normalised to 0..1.
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), SPRING)
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), SPRING)

  const glareX = useTransform(useSpring(px, SPRING), (v) => `${v * 100}%`)
  const glareY = useTransform(useSpring(py, SPRING), (v) => `${v * 100}%`)
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, ${glareStrength}), transparent 55%)`

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    setEnabled(finePointer.matches && !reducedMotion.matches)
  }, [])

  const handleMove = (e) => {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  const reset = () => {
    setHovered(false)
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      className={`tilt-card ${className}`}
      style={
        enabled
          ? { ...style, rotateX, rotateY, transformStyle: 'preserve-3d' }
          : style
      }
      onPointerMove={handleMove}
      onPointerEnter={() => enabled && setHovered(true)}
      onPointerLeave={reset}
      {...motionProps}
    >
      {children}
      {glare && enabled && (
        <motion.span
          className="tilt-glare"
          style={{ background: glareBackground }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />
      )}
    </motion.div>
  )
}

export default TiltCard
