import { motion } from 'framer-motion'
import {
  SiLaravel,
  SiPhp,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiMysql,
  SiMariadb,
  SiGit,
  SiGithub,
  SiCpanel,
  SiFigma,
  SiReact,
} from 'react-icons/si'

import './TechnicalSkills.css'

const technologies = [
  { name: 'Laravel', Icon: SiLaravel, color: '#FF4438' },
  { name: 'PHP', Icon: SiPhp, color: '#8993BE' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', Icon: SiCss, color: '#1572B6' },
  { name: 'MySQL', Icon: SiMysql, color: '#38B6FF' },
  { name: 'MariaDB', Icon: SiMariadb, color: '#C49A6C' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'GitHub', Icon: SiGithub, color: '#F8FAFC' },
  { name: 'cPanel', Icon: SiCpanel, color: '#FF6C2C' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
]

export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="technical-skills section-container"
      aria-labelledby="technical-skills-title"
    >
      <motion.div
        className="technical-skills-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <span className="section-label">↗ TECH STACK</span>
          <h2 id="technical-skills-title">
            My Technical Skills
          </h2>
        </div>

        <p>
          Technologies and tools I use to build
          and develop web applications.
        </p>
      </motion.div>

      <div className="technical-skills-grid">
        {technologies.map(({ name, Icon, color }, index) => (
          <motion.div
            key={name}
            className="technical-skill-card"
            style={{ '--skill-color': color }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.45,
              delay: index * 0.045,
            }}
            whileHover={{
              y: -7,
              transition: { duration: 0.2 },
            }}
          >
            <div className="technical-skill-icon">
              <Icon aria-hidden="true" />
            </div>

            <span className="technical-skill-name">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
