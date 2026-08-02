import { motion } from 'framer-motion'
import CountUp from '../components/CountUp'
import MagneticButton from '../components/MagneticButton'
import {
  fadeFromLeft,
  fadeFromRight,
  popIn,
  staggerContainer,
  viewportOnce
} from '../utils/motion'
import './About.css'

const About = () => {
  const stats = [
    { number: '0', label: 'Years Experience' },
    { number: '8+', label: 'Projects Completed' },
    { number: '10+', label: 'Technologies' },
    { number: '5+', label: 'Certifications' }
  ]

  return (
    <div className="page about-page">
      <motion.h1
        className="page-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>
      <motion.p
        className="page-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Get to know me better
      </motion.p>

      <div className="about-content">
        <motion.div
          className="about-image-section"
          variants={fadeFromLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="about-image">
            <img
              src="/about-portrait.webp"
              alt="Piyush Singhal"
              className="about-profile-image"
              width="500"
              height="600"
              loading="lazy"
              decoding="async"
            />
            <div className="image-bg-overlay"></div>
          </div>
        </motion.div>

        <motion.div
          className="about-text-section"
          variants={fadeFromRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h2 className="section-title">Who Am I?</h2>
          <p className="about-description">
            As a passionate software developer, I craft innovative solutions to complex challenges. 
            With expertise in Web development, C++, AI/ML, NLP, Java, Python, and Back-end Design, 
            I blend creativity with technical precision to deliver impactful results.
          </p>
          <p className="about-description">
            Committed to continuous learning, I thrive in dynamic environments and stay ahead in the 
            evolving tech landscape. My approach combines strong problem-solving skills with a deep 
            understanding of modern technologies to create scalable and efficient solutions.
          </p>
          <p className="about-description">
            Whether it's building intelligent AI systems, developing robust web applications, or 
            designing efficient backend architectures, I bring dedication and innovation to every project. 
            Let's connect and bring ideas to life!
          </p>
          
          <MagneticButton
            as="a"
            href="/Piyush_Singhal_Resume.pdf"
            download="Piyush_Singhal_Resume.pdf"
            className="resume-btn"
            strength={0.25}
          >
            <span className="btn-icon">📄</span>
            <span>Download Resume</span>
            <span className="btn-arrow">↓</span>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        className="stats-grid"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-card"
            variants={popIn}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <h3 className="stat-number">
              <CountUp value={stat.number} />
            </h3>
            <p className="stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default About
