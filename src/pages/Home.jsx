import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import SplitText from '../components/SplitText'
import MagneticButton from '../components/MagneticButton'
import './Home.css'

const Home = () => {
  const heroRef = useRef(null)

  // Hero drifts and fades as you scroll past it; the portrait moves the other
  // way so the two layers separate.
  //
  // Scroll values live on the outer elements and entrance animations on the
  // inner ones — putting both on one node makes framer fight itself over the
  // same opacity/y.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  return (
    <div className="home" ref={heroRef}>
      <div className="hero-section">
        <motion.div
          className="hero-content"
          style={{ y: contentY, opacity: heroOpacity }}
        >
          <h1 className="hero-title">
            <SplitText text="Hi, I'm" delay={0.25} />{' '}
            <SplitText text="Piyush Singhal" gradient delay={0.52} />
          </h1>

          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Computer Science Engineering Student
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I am a skilled and creative software developer with a passion for designing and building beautiful, responsive, and user-friendly websites. My focus is on delivering seamless experiences that combine functionality with aesthetics.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <MagneticButton as={Link} to="/projects" className="btn btn-primary">
              View Projects
            </MagneticButton>
            <MagneticButton as={Link} to="/contact" className="btn btn-secondary">
              Get In Touch
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          style={{ y: imageY, opacity: heroOpacity }}
        >
          <motion.div
            className="image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <img
              src="/hero-portrait.webp"
              alt="Piyush Singhal"
              className="profile-image"
              width="400"
              height="400"
              fetchPriority="high"
            />
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="scroll-indicator" style={{ opacity: indicatorOpacity }}>
        <motion.button
          type="button"
          className="scroll-indicator-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
          }
          aria-label="Scroll to content"
        >
          <span className="mouse"></span>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Home
