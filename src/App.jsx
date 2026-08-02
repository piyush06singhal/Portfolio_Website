import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import ScrollProgress from './components/ScrollProgress'
import ParticleBackground from './components/ParticleBackground'
import AmbientBackground from './components/AmbientBackground'
import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import AnimatedRoutes from './components/AnimatedRoutes'
import './App.css'

function App() {
  return (
    <Router>
      <Preloader />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="app">
        <ScrollProgress />
        <AmbientBackground />
        <ParticleBackground />
        <CustomCursor />
        <Navbar />
        <main id="main-content">
          <AnimatedRoutes />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </Router>
  )
}

export default App
