import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  ExternalLink,
  Building2,
  Waves,
  Code2,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

import './SelectedProjects.css'

// ==========================================
// PROJECT DATA
// ==========================================

const projects = [
  {
    id: 'ragen',
    title: 'Ragen Swim Course',
    description:
      'A full-stack swimming course management platform developed for a real client. Features include class bookings, scheduling, participant packages, attendance tracking, waiting lists, and administrative dashboards.',
    image: '/projects/ragen-swim-course.png',
    technologies: [
      'Laravel 12',
      'PHP',
      'MariaDB',
      'JavaScript',
      'cPanel',
    ],
    github:
      'https://github.com/NyxAkmall/ragen-swim-course',
    live: 'https://ragenswimcourse.com',
  },
  {
    id: 'construction',
    title: 'Construction Project Management System',
    description:
      'An academic web application for managing and monitoring construction projects, including project data, status tracking, timelines, documentation, and administrative dashboards.',
    image: null,
    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
      'Figma',
    ],
    github: null,
    live: null,
  },
]

// ==========================================
// PROJECT CARD COMPONENT
// ==========================================

function ProjectCard({ project, index }) {
  const isRagen = project.id === 'ragen'

  return (
    <motion.article
      className="selected-project-card"
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -6,
      }}
    >
      {/* PROJECT IMAGE / ILLUSTRATION */}

      <div className="selected-project-media">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
          />
        ) : (
          <div className="selected-project-illustration">
            <div className="construction-orbit orbit-one" />

            <div className="construction-orbit orbit-two" />

            <div className="construction-icon">
              <Building2
                size={60}
                strokeWidth={1.4}
              />
            </div>

            <span>
              PROJECT MANAGEMENT
            </span>
          </div>
        )}

        <div className="selected-project-media-overlay" />
      </div>

      {/* PROJECT INFORMATION */}

      <div className="selected-project-content">
        <div className="selected-project-heading">
          <span className="selected-project-category">
            {isRagen ? (
              <Waves size={14} />
            ) : (
              <Building2 size={14} />
            )}

            {isRagen
              ? 'CLIENT PROJECT'
              : 'ACADEMIC PROJECT'}
          </span>

          <Code2
            size={19}
            className="selected-project-code-icon"
          />
        </div>

        {/* PROJECT TITLE */}

        <h3>
          {project.title}
        </h3>

        {/* PROJECT DESCRIPTION */}

        <p>
          {project.description}
        </p>

        {/* TECHNOLOGY STACK */}

        <div className="selected-project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        {/* PROJECT ACTION BUTTONS */}

        <div className="selected-project-actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="selected-project-button primary"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FaGithub size={16} />

              GitHub

              <ArrowUpRight size={15} />
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="selected-project-button secondary"
              aria-label={`Visit ${project.title} live website`}
            >
              <ExternalLink size={16} />

              Live Website

              <ArrowUpRight size={15} />
            </a>
          )}

          {!project.github && !project.live && (
            <span className="selected-project-private">
              Academic Project Showcase
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

// ==========================================
// SELECTED PROJECTS SECTION
// ==========================================

export default function SelectedProjects() {
  return (
    <section
      id="projects"
      className="selected-projects section-container"
      aria-labelledby="selected-projects-title"
    >
      {/* SECTION HEADER */}

      <motion.div
        className="selected-projects-header"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <div>
          <span className="section-label">
            ↗ PROJECTS
          </span>

          <h2 id="selected-projects-title">
            Selected Projects
          </h2>
        </div>

        <p>
          A showcase of real-world client work
          and academic projects, focused on
          building functional and reliable
          web applications.
        </p>
      </motion.div>

      {/* PROJECT CARDS */}

      <div className="selected-projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
