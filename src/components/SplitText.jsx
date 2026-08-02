import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './SplitText.css'

const EASE = [0.22, 1, 0.36, 1]

// Splits a line into per-character spans that flip up into place one by one.
//
// For the `gradient` variant each character carries its own slice of the
// gradient (background sized to the full line, offset by character index), so
// the colour still runs continuously across the whole word while every letter
// stays independently transformable. Putting the gradient on a shared parent
// instead would break: `background-clip: text` doesn't survive transformed
// children.
const SplitText = ({
  text,
  gradient = false,
  delay = 0,
  stagger = 0.045,
  className = ''
}) => {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  const words = text.split(' ')
  const totalChars = text.replace(/ /g, '').length

  if (reduced) {
    return (
      <span className={`split-text ${gradient ? 'split-static' : ''} ${className}`}>
        {text}
      </span>
    )
  }

  let index = -1

  return (
    <span className={`split-text ${className}`}>
      {/* Screen readers get the real line once; the animated letters are
          hidden so they aren't spelled out one character at a time. */}
      <span className="sr-only">{text}</span>
      {words.map((word, wordIndex) => (
        <span className="split-word" key={wordIndex} aria-hidden="true">
          {[...word].map((char) => {
            index += 1
            const at = index

            return (
              <motion.span
                key={at}
                className={`split-char ${gradient ? 'split-char-gradient' : ''}`}
                aria-hidden="true"
                initial={{ opacity: 0, y: '0.6em', rotateX: -80 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.55,
                  ease: EASE,
                  delay: delay + at * stagger
                }}
                style={
                  gradient
                    ? {
                        backgroundSize: `${totalChars * 100}% 100%`,
                        backgroundPosition: `${
                          totalChars > 1 ? (at / (totalChars - 1)) * 100 : 0
                        }% 0`
                      }
                    : undefined
                }
              >
                {char}
              </motion.span>
            )
          })}
          {wordIndex < words.length - 1 && (
            <span className="split-space" aria-hidden="true">
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </span>
  )
}

export default SplitText
