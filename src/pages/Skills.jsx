import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', level: 85 },
        { name: 'C++', level: 90 },
        { name: 'Python', level: 92 },
        { name: 'Java', level: 88 },
        { name: 'JavaScript', level: 90 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React', level: 88 },
        { name: 'Node.js', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Express.js', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 88 }
      ]
    },
    {
      title: 'AI/ML & Data Science',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'Artificial Intelligence', level: 82 },
        { name: 'NLP', level: 80 },
        { name: 'TensorFlow', level: 75 },
        { name: 'Data Analysis', level: 85 },
        { name: 'Deep Learning', level: 78 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'VS Code', level: 95 },
        { name: 'Docker', level: 70 },
        { name: 'Linux', level: 85 },
        { name: 'Postman', level: 88 },
        { name: 'Firebase', level: 80 }
      ]
    }
  ]

  return (
    <div className="page skills-page">
      <motion.h1
        className="page-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Expertise
      </motion.h1>
      <motion.p
        className="page-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Technologies I work with
      </motion.p>

      <div className="skills-grid">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className="skill-category"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + catIndex * 0.2, duration: 0.6 }}
          >
            <h2 className="category-title">{category.title}</h2>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="skill-item"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + catIndex * 0.2 + skillIndex * 0.1, duration: 0.5 }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.5 + catIndex * 0.2 + skillIndex * 0.1, duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
