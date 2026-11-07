import { motion } from 'framer-motion'
import {
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
} from 'lucide-react'

import './WorkExperience.css'

const experiences = [
  {
    role: 'Full Stack Web Developer',
    company: 'Ragen Swim Course',
    type: 'Freelance / Client Project',
    period: '2026',
    description:
      'Developed a full-stack swimming course management application to support daily operational activities.',
    responsibilities: [
      'Built customer booking and class scheduling features.',
      'Developed participant package and attendance management.',
      'Implemented administrative workflows and waiting list management.',
      'Managed database operations and application deployment.',
    ],
    technologies: [
      'Laravel',
      'PHP',
      'MariaDB',
      'JavaScript',
      'Git',
    ],
  },
]

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="work-experience section-container"
    >
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">
          ↗ EXPERIENCE
        </span>

        <h2>Work Experience</h2>

        <p>
          My development journey and hands-on experience
          building applications for real-world needs.
        </p>
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <motion.div
            className="experience-timeline-item"
            key={experience.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: index * 0.15,
            }}
          >
            <div className="experience-timeline-marker">
              <span className="experience-dot" />
              <span className="experience-line" />
            </div>

            <div className="experience-card">
              <div className="experience-card-top">
                <div className="experience-company-icon">
                  <BriefcaseBusiness size={24} />
                </div>

                <div className="experience-period">
                  <CalendarDays size={14} />
                  {experience.period}
                </div>
              </div>

              <span className="experience-type">
                {experience.type}
              </span>

              <h3>{experience.role}</h3>

              <h4>{experience.company}</h4>

              <p className="experience-description">
                {experience.description}
              </p>

              <div className="experience-responsibilities">
                {experience.responsibilities.map((item) => (
                  <div
                    className="experience-responsibility"
                    key={item}
                  >
                    <CheckCircle2 size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="experience-tech-footer">
                <div className="experience-tech-title">
                  <Code2 size={15} />
                  Technologies Used
                </div>

                <div className="experience-tech-list">
                  {experience.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
