import { motion } from 'framer-motion'
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
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="about-image">
            <img 
              src="/WhatsApp Image 2024-12-25 at 22.22.12_7de2bc6e.png" 
              alt="About Profile" 
              className="about-profile-image"
            />
            <div className="image-bg-overlay"></div>
          </div>
        </motion.div>

        <motion.div
          className="about-text-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
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
          
          <motion.a
            href="/Piyush_Singhal_Resume.pdf"
            download="Piyush_Singhal_Resume.pdf"
            className="resume-btn"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="btn-icon">📄</span>
            <span>Download Resume</span>
            <span className="btn-arrow">↓</span>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="stats-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default About
