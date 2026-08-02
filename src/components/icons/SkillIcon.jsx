import { brandIcons } from './brandIcons'
import { customIcons } from './customIcons'

// Maps each skill name from the Skills page to its mark. Keys must match the
// skill names exactly — the skills data itself is never touched.
const SKILL_ICONS = {
  // Programming Languages
  C: { brand: 'c' },
  'C++': { brand: 'cpp' },
  Python: { brand: 'python' },
  Java: { brand: 'java' },
  JavaScript: { brand: 'javascript' },
  SQL: { brand: 'sql' },

  // Web Development
  React: { brand: 'react' },
  'Node.js': { brand: 'node' },
  'HTML/CSS': { brand: 'html' },
  'Express.js': { brand: 'express' },
  MongoDB: { brand: 'mongodb' },
  'REST APIs': { custom: 'restApi' },

  // AI/ML & Data Science
  'Machine Learning': { custom: 'machineLearning' },
  'Artificial Intelligence': { custom: 'artificialIntelligence' },
  NLP: { custom: 'nlp' },
  TensorFlow: { brand: 'tensorflow' },
  'Data Analysis': { custom: 'dataAnalysis' },
  'Deep Learning': { custom: 'deepLearning' },

  // Tools & Technologies
  'Git & GitHub': { brand: 'git' },
  'VS Code': { custom: 'vscode' },
  Docker: { brand: 'docker' },
  Linux: { brand: 'linux' },
  Postman: { brand: 'postman' },
  Firebase: { brand: 'firebase' }
}

const resolve = (name) => {
  const entry = SKILL_ICONS[name]
  if (!entry) return null
  return entry.brand ? brandIcons[entry.brand] : customIcons[entry.custom]
}

// Brands whose mark is near-black fall back to the theme text colour so they
// stay visible in both light and dark mode.
export const getSkillColor = (name) => {
  const icon = resolve(name)
  if (!icon) return 'var(--primary)'
  return icon.color === 'currentColor' ? 'var(--text)' : icon.color
}

const SkillIcon = ({ name, className }) => {
  const entry = SKILL_ICONS[name]
  const icon = resolve(name)
  if (!icon) return null

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {entry.brand ? <path d={icon.path} /> : icon.node}
    </svg>
  )
}

export default SkillIcon
