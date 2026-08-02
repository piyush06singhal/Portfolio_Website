import { useEffect, useMemo, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

// Counts from 0 to `value` when scrolled into view, preserving any prefix or
// suffix on the original label (so "8+" stays "8+" and "10+" stays "10+").
const CountUp = ({ value, duration = 1.6, className = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduced = usePrefersReducedMotion()

  // Memoised on `value`. Parsing inline made this a brand-new object on every
  // render — and since each animation frame calls setDisplay (which renders),
  // the effect below saw changed deps ~60x/sec, tore down the animation and
  // restarted it from 0 every frame. The number never got past 1.
  const parsed = useMemo(() => {
    const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/)
    if (!match) return null
    return {
      prefix: match[1],
      target: Number(match[2]),
      suffix: match[3],
      decimals: match[2].includes('.') ? 1 : 0
    }
  }, [value])

  const target = parsed ? parsed.target : 0
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!parsed) return

    if (reduced) {
      setDisplay(target)
      return
    }

    if (!inView) return

    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(latest)
    })

    return () => controls.stop()
  }, [inView, target, duration, reduced, parsed])

  // The ref stays attached in every branch, otherwise useInView never fires.
  if (!parsed) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    )
  }

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {display.toFixed(parsed.decimals)}
      {parsed.suffix}
    </span>
  )
}

export default CountUp
