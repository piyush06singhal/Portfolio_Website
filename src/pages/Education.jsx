import { motion } from 'framer-motion'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'BTech - Computer Science Engineering',
      institution: 'Nims University, Rajasthan',
      period: '2023 - 2027',
      description: 'Currently pursuing Bachelor of Technology in Computer Science Engineering with a CGPA of 9.20. Focusing on advanced programming, data structures, algorithms, AI/ML, and software development.',
      grade: 'CGPA: 9.20',
      icon: '🎓'
    },
    {
      degree: 'Class 12th - Senior Secondary',
      institution: 'Step By Step Senior Secondary School, Alwar, Rajasthan',
      period: '2021 - 2022',
      description: 'Completed higher secondary education with distinction, focusing on Science stream with Mathematics and Computer Science.',
      grade: '90%',
      icon: '📚'
    },
    {
      degree: 'Class 10th - Secondary',
      institution: 'Step By Step Senior Secondary School, Alwar, Rajasthan',
      period: '2019 - 2020',
      description: 'Completed secondary education with strong performance in Mathematics, Science, and Computer Applications.',
      grade: '86%',
      icon: '📖'
    }
  ]

  const internships = [
    {
      role: 'Web Development Intern',
      company: 'Sparks Foundation',
      period: 'June 2024',
      description: 'Developed a secure and user-friendly basic banking system website. Implemented key functionalities like customer management, transaction tracking, and balance updates using modern web technologies.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      icon: '💻'
    }
  ]

  return (
    <div className="page education-page">
      <motion.h1
        className="page-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education & Experience
      </motion.h1>
      <motion.p
        className="page-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        My academic background and professional journey
      </motion.p>

      <div className="timeline-section">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          📚 Education
        </motion.h2>
        <div className="timeline">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
            >
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <h3 className="timeline-title">{item.degree}</h3>
                <h4 className="timeline-subtitle">{item.institution}</h4>
                <span className="timeline-period">{item.period}</span>
                {item.grade && (
                  <div className="grade-badge">{item.grade}</div>
                )}
                <p className="timeline-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="timeline-section">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          💼 Internships
        </motion.h2>
        <div className="timeline">
          {internships.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.2, duration: 0.6 }}
            >
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <h3 className="timeline-title">{item.role}</h3>
                <h4 className="timeline-subtitle">{item.company}</h4>
                <span className="timeline-period">{item.period}</span>
                <p className="timeline-description">{item.description}</p>
                <div className="timeline-tech">
                  {item.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
