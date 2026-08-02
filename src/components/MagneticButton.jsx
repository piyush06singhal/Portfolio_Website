import { useMemo, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useInteractiveMotion } from '../hooks/useReducedMotion'

const SPRING = { stiffness: 220, damping: 18, mass: 0.35 }

// Leans toward the cursor while it's nearby, then springs back on exit.
// `as` lets it wrap a Link, an <a> or a <button> without changing semantics.
const MagneticButton = ({
  children,
  as: Component = 'button',
  strength = 0.35,
  className = '',
  ...rest
}) => {
  const ref = useRef(null)
  const enabled = useInteractiveMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, SPRING)
  const sy = useSpring(y, SPRING)

  // The label drifts a little further than the button for a parallax feel.
  const labelX = useTransform(sx, (v) => v * 0.35)
  const labelY = useTransform(sy, (v) => v * 0.35)

  // Memoised: building this during render would create a new component type
  // every pass and remount the button on each state change.
  const MotionComponent = useMemo(
    () => (typeof Component === 'string' ? motion[Component] : motion(Component)),
    [Component]
  )

  const handleMove = (e) => {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <MotionComponent
      ref={ref}
      className={className}
      style={enabled ? { x: sx, y: sy } : undefined}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      whileTap={{ scale: 0.96 }}
      {...rest}
    >
      {enabled ? (
        <motion.span style={{ x: labelX, y: labelY, display: 'inline-block' }}>
          {children}
        </motion.span>
      ) : (
        children
      )}
    </MotionComponent>
  )
}

export default MagneticButton
