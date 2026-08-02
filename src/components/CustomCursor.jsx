import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './CustomCursor.css'

const HOVER_SELECTOR = 'a, button, [role="button"], .project-card, [data-cursor="hover"]'
const TEXT_SELECTOR = 'input, textarea, select'

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false)
  const [mode, setMode] = useState('default')
  const [pressed, setPressed] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  // The ring lags behind the dot, which is what sells the effect.
  const ringSpring = { stiffness: 260, damping: 26, mass: 0.5 }
  const ringX = useSpring(x, ringSpring)
  const ringY = useSpring(y, ringSpring)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!finePointer.matches || reducedMotion.matches) return

    setEnabled(true)
    document.body.classList.add('has-custom-cursor')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }

    const over = (e) => {
      if (!(e.target instanceof Element)) return
      if (e.target.closest(TEXT_SELECTOR)) setMode('text')
      else if (e.target.closest(HOVER_SELECTOR)) setMode('hover')
      else setMode('default')
    }

    const leave = () => setVisible(false)
    const down = () => setPressed(true)
    const up = () => setPressed(false)

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', over)
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    document.addEventListener('mouseleave', leave)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
      document.removeEventListener('mouseleave', leave)
    }
  }, [x, y])

  if (!enabled) return null

  const ringScale = mode === 'hover' ? 1.9 : mode === 'text' ? 0.5 : 1
  const dotScale = mode === 'hover' ? 0 : 1

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x, y }}
        animate={{ scale: pressed ? 0.6 : dotScale, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.18 }}
      />
      <motion.div
        className={`cursor-ring ${mode}`}
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: pressed ? ringScale * 0.8 : ringScale,
          opacity: visible ? 1 : 0
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  )
}

export default CustomCursor
