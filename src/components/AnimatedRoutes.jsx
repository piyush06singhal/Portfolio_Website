import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './PageTransition'
import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Education from '../pages/Education'
import Contact from '../pages/Contact'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/skills', element: <Skills /> },
  { path: '/projects', element: <Projects /> },
  { path: '/education', element: <Education /> },
  { path: '/contact', element: <Contact /> }
]

const NAME = 'Piyush Singhal'

// A single-page app never reloads, so the tab title has to be updated by hand
// on every route change.
const PAGE_TITLES = {
  '/': `${NAME} — Computer Science Engineering Student & Developer`,
  '/about': `About — ${NAME}`,
  '/skills': `Skills — ${NAME}`,
  '/projects': `Projects — ${NAME}`,
  '/education': `Education & Experience — ${NAME}`,
  '/contact': `Contact — ${NAME}`
}

const AnimatedRoutes = () => {
  const location = useLocation()

  useEffect(() => {
    document.title = PAGE_TITLES[location.pathname] || `${NAME} — Portfolio`
  }, [location.pathname])

  // Reset scroll once the outgoing page has faded out, so the jump is hidden
  // behind the transition instead of happening under the user's eyes.
  const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

  return (
    <AnimatePresence mode="wait" onExitComplete={resetScroll}>
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<PageTransition>{element}</PageTransition>}
          />
        ))}
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
