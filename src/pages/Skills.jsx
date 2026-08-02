import { motion } from 'framer-motion'
import SkillTile from '../components/SkillTile'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion'
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
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.h2 className="category-title" variants={fadeUp}>
              {category.title}
            </motion.h2>
            <div className="skill-tiles">
              {category.skills.map((skill) => (
                <SkillTile
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
