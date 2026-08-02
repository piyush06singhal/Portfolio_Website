import { useEffect, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import './AmbientBackground.css'

// Drifting gradient blobs + a spotlight that trails the pointer, sitting behind
// the particle canvas. Purely decorative, never interactive.
const AmbientBackground = () => {
  const [spotlight, setSpotlight] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const config = { stiffness: 45, damping: 22, mass: 1 }
  const sx = useSpring(x, config)
  const sy = useSpring(y, config)

  const background = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, rgba(99, 102, 241, 0.18), transparent 65%)`

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!finePointer.matches || reducedMotion.matches) return

    x.set(window.innerWidth / 2)
    y.set(window.innerHeight / 3)
    setSpotlight(true)

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient-blob blob-1" />
      <div className="ambient-blob blob-2" />
      <div className="ambient-blob blob-3" />
      {spotlight && <motion.div className="ambient-spotlight" style={{ background }} />}
      <div className="ambient-grain" />
    </div>
  )
}

export default AmbientBackground
