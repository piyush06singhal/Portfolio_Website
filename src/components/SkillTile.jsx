import { motion } from 'framer-motion'
import TiltCard from './TiltCard'
import SkillIcon, { getSkillColor } from './icons/SkillIcon'
import './SkillTile.css'

const RADIUS = 44

const tileVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

// The percentage is drawn as a ring sweeping around the logo.
const ringVariants = (level) => ({
  hidden: { pathLength: 0 },
  show: {
    pathLength: level / 100,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }
  }
})

const SkillTile = ({ name, level }) => (
  <TiltCard
    className="skill-tile"
    max={12}
    glareStrength={0.16}
    variants={tileVariants}
    whileHover={{ y: -6 }}
    style={{ '--accent': getSkillColor(name) }}
  >
    <div className="tile-ring-wrap tilt-layer">
      <svg className="tile-ring" viewBox="0 0 100 100" aria-hidden="true">
        <circle className="ring-track" cx="50" cy="50" r={RADIUS} />
        <motion.circle
          className="ring-value"
          cx="50"
          cy="50"
          r={RADIUS}
          variants={ringVariants(level)}
        />
      </svg>
      <SkillIcon name={name} className="tile-icon" />
    </div>

    <span className="tile-name tilt-layer-sm">{name}</span>
    <span className="tile-level tilt-layer-sm">{level}%</span>
  </TiltCard>
)

export default SkillTile
