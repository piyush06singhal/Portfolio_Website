import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setIsDark(savedTheme === 'dark')
    document.documentElement.setAttribute('data-theme', savedTheme)

    return () => clearTimeout(timeoutRef.current)
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)

    // Enable the global colour transition just for the duration of the flip,
    // then take it back off so it stops interfering with other animations.
    const root = document.documentElement
    root.classList.add('theme-transition')
    root.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)

    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      root.classList.remove('theme-transition')
    }, 400)
  }

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        className="toggle-icon"
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {isDark ? '🌙' : '☀️'}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
