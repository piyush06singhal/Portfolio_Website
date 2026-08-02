import { motion } from 'framer-motion'
import Timeline from '../components/Timeline'
import TiltCard from '../components/TiltCard'
import {
  fadeFromLeft,
  fadeFromSide,
  fadeUp,
  staggerContainer,
  viewportOnce
} from '../utils/motion'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'BTech - Computer Science Engineering',
      institution: 'Nims University, Rajasthan',
      period: '2023 - 2027',
      description: 'Currently pursuing Bachelor of Technology in Computer Science Engineering with a CGPA of 9.0. Focusing on advanced programming, data structures, algorithms, AI/ML, and software development.',
      grade: 'CGPA: 9.0',
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

  const achievements = [
    {
      icon: '🏆',
      badge: 'AIR 83',
      title: 'CodeChef Starters 184 (2025)',
      description:
        'Secured AIR 83 among 20,000+ participants in CodeChef Starter 184 (2025).'
    },
    {
      icon: '📈',
      title: 'Competitive Programming Ratings',
      description:
        '1700+ rating on CodeChef, 1350+ rating on Codeforces and 1700+ rating on Leetcode.',
      ratings: [
        { platform: 'CodeChef', rating: '1700+' },
        { platform: 'Codeforces', rating: '1350+' },
        { platform: 'LeetCode', rating: '1700+' }
      ]
    },
    {
      icon: '🧩',
      badge: '500+',
      title: 'DSA Problems Solved',
      description:
        'Solved 500+ DSA problems on platforms like CodeChef and LeetCode, strengthening core coding skills.'
    },
    {
      icon: '🌐',
      badge: 'GSoC 2026',
      title: 'Open Source — EduAid @ AOSSIE',
      description:
        'Contributed to the EduAid project under AOSSIE while preparing a GSoC 2026 proposal, gaining experience with bug fixing, feature enhancements, code reviews, and collaborative Git workflows in a large open-source codebase.'
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
          variants={fadeFromLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          📚 Education
        </motion.h2>
        <Timeline>
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={fadeFromSide(index % 2 === 0)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
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
        </Timeline>
      </div>

      <div className="timeline-section">
        <motion.h2
          className="section-heading"
          variants={fadeFromLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          🏅 Achievements
        </motion.h2>

        <motion.div
          className="achievement-grid"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {achievements.map((item) => (
            <TiltCard
              key={item.title}
              className="achievement-card"
              max={8}
              variants={fadeUp}
              whileHover={{ y: -6 }}
            >
              <div className="achievement-head tilt-layer-sm">
                <span className="achievement-icon" aria-hidden="true">
                  {item.icon}
                </span>
                {item.badge && (
                  <span className="achievement-badge">{item.badge}</span>
                )}
              </div>

              <h3 className="achievement-title tilt-layer-sm">{item.title}</h3>

              {item.ratings ? (
                <ul className="rating-list tilt-layer-sm">
                  {item.ratings.map((entry) => (
                    <li key={entry.platform} className="rating-item">
                      <span className="rating-platform">{entry.platform}</span>
                      <span className="rating-value">{entry.rating}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="achievement-description tilt-layer-sm">
                  {item.description}
                </p>
              )}
            </TiltCard>
          ))}
        </motion.div>
      </div>

      <div className="timeline-section">
        <motion.h2
          className="section-heading"
          variants={fadeFromLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          💼 Internships
        </motion.h2>
        <Timeline>
          {internships.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={fadeFromSide(index % 2 === 0)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
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
        </Timeline>
      </div>
    </div>
  )
}

export default Education
