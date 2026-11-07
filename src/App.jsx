import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

import './App.css'
import './navbar.css'

import TechnicalSkills from './TechnicalSkills'
import SelectedProjects from './SelectedProjects'
import WorkExperience from './WorkExperience'
import ProfessionalCertification from './ProfessionalCertification'
import ContactSection from './ContactSection'
import PortfolioFooter from './PortfolioFooter'

// ==========================================
// SOCIAL & CONTACT LINKS
// ==========================================

const EMAIL = 'akmalmaulana075@gmail.com'

const GMAIL_URL =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`

const GITHUB_URL = 'https://github.com/NyxAkmall'

const LINKEDIN_URL =
  'https://www.linkedin.com/in/muhamad-akmal-maulana-dev/'

// ==========================================
// MAIN APP
// ==========================================

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Experience', '#experience'],
    ['Certification', '#certification'],
    ['Contact', '#contact'],
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="portfolio">

      {/* NAVBAR */}

      <header className="navbar">
        <div className="nav-container">
          <a
            href="#home"
            className="brand"
            onClick={closeMenu}
          >
            <span className="brand-icon">&lt;/&gt;</span>
            Akmal<span className="brand-blue">.dev</span>
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            {navItems.map(([label, link]) => (
              <a
                key={label}
                href={link}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="/cv-akmal.pdf"
            className="nav-download"
            download="CV_Muhamad_Akmal_Maulana.pdf"
          >
            ↓ Download CV
          </a>
        </div>
      </header>

      {/* HERO SECTION */}

      <section className="hero-section" id="home">
        <div className="hero-container">

          {/* HERO CONTENT */}

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="welcome-badge">
              <span className="online-dot" />
              👋 Hello, I'm
            </div>

            <h1>
              Muhamad <span>Akmal</span>
              <br />
              Maulana
            </h1>

            <h2>Full Stack Web Developer</h2>

            <p className="hero-description">
              Building functional, reliable, and user-friendly web
              applications that solve real-world problems.
              Turning ideas into practical digital solutions.
            </p>

            {/* HERO BUTTONS */}

            <div className="hero-buttons">
              <a
                href="#projects"
                className="button-primary"
              >
                View My Projects <span>↗</span>
              </a>

              <a
                href="#contact"
                className="button-outline"
              >
                ✉ Contact Me
              </a>
            </div>

            {/* SOCIAL LINKS */}

            <div className="social-links">
              <span>FIND ME ON</span>

              <div className="social-line" />

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                title="GitHub"
              >
                <FaGithub size={19} />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                title="LinkedIn"
              >
                <FaLinkedinIn size={19} />
              </a>

              <a
                href={GMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Compose email in Gmail"
                title="Email"
              >
                <Mail size={19} />
              </a>
            </div>
          </motion.div>

          {/* CODE LAPTOP ILLUSTRATION */}

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 35, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="hero-glow" />

            <div className="floating-tech tech-laravel">
              <span className="tech-symbol red">L</span>
              Laravel
            </div>

            <div className="floating-tech tech-mysql">
              <span className="tech-symbol cyan">SQL</span>
              MySQL
            </div>

            <div className="floating-tech tech-php">
              <span className="tech-symbol purple">PHP</span>
              PHP
            </div>

            <div className="floating-tech tech-js">
              <span className="tech-symbol yellow">JS</span>
              JavaScript
            </div>

            <div className="floating-tech tech-html">
              <span className="tech-symbol orange">5</span>
              HTML
            </div>

            <div className="floating-tech tech-css">
              <span className="tech-symbol blue">3</span>
              CSS
            </div>

            <div className="laptop">
              <div className="laptop-screen">
                <div className="editor-top">
                  <div className="editor-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>developer.jsx</span>
                  <b>&lt;/&gt;</b>
                </div>

                <div className="editor-body">
                  <div className="editor-sidebar">
                    <span>EXPLORER</span>
                    <p>src</p>
                    <p>App.jsx</p>
                    <p>index.css</p>
                    <p>public</p>
                  </div>

                  <div className="editor-code">
                    <p>
                      <span className="code-purple">const</span>
                      {' '}developer = {'{'}
                    </p>

                    <p className="indent">
                      name:{' '}
                      <span className="code-green">'Akmal'</span>,
                    </p>

                    <p className="indent">
                      role:{' '}
                      <span className="code-green">
                        'Full Stack Developer'
                      </span>,
                    </p>

                    <p className="indent">
                      skills: [
                    </p>

                    <p className="indent2">
                      <span className="code-green">'Laravel'</span>,
                      {' '}
                      <span className="code-green">'PHP'</span>,
                    </p>

                    <p className="indent2">
                      <span className="code-green">'JavaScript'</span>,
                      {' '}
                      <span className="code-green">'MySQL'</span>
                    </p>

                    <p className="indent">
                      ],
                    </p>

                    <p className="indent">
                      passion:{' '}
                      <span className="code-green">
                        'Building solutions'
                      </span>
                    </p>

                    <p>{'}'}</p>
                  </div>
                </div>

                <div className="editor-bottom">
                  <span className="bottom-code">&lt;/&gt;</span>

                  <div>
                    <strong>Clean Code</strong>
                    <small>
                      Creative ideas, practical solutions.
                    </small>
                  </div>
                </div>
              </div>

              <div className="laptop-base" />
            </div>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}

        <a
          href="#about"
          className="scroll-indicator"
          aria-label="Scroll down"
        >
          <span />
          ↓
        </a>
      </section>

      {/* ABOUT SECTION */}

      <section
        className="about-section section-container"
        id="about"
      >
        <motion.div
          className="about-photo-column"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="photo-decoration" />

          <div className="photo-card">
            <img
              src="/profile.jpg"
              alt="Muhamad Akmal Maulana"
              className="profile-photo"
            />
          </div>

          <div className="photo-code-badge">
            &lt;/&gt;
          </div>

          <div className="developer-badge">
            🚀 Web Developer
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            ↗ ABOUT ME
          </span>

          <h2>A Passionate Web Developer</h2>

          <p className="about-description">
            I'm a web developer passionate about creating modern,
            functional, and user-friendly digital experiences.
            I enjoy building web applications, exploring new
            technologies, and solving real-world problems through code.
            <br />
            <br />
            I have hands-on experience developing full-stack web
            applications using PHP, Laravel, MySQL/MariaDB,
            HTML, CSS, JavaScript, and React.
          </p>

          {/* ABOUT HIGHLIGHTS */}

          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">🎓</div>

              <div>
                <strong>Education</strong>
                <p>STT Terpadu Nurul Fikri</p>
                <small>Bachelor of Information Systems</small>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">💼</div>

              <div>
                <strong>Experience</strong>
                <p>Freelance</p>
                <small>Full Stack Web Developer</small>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">🏅</div>

              <div>
                <strong>Certification</strong>
                <p>BNSP Junior</p>
                <small>Web Developer</small>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TECHNICAL SKILLS */}

      <TechnicalSkills />

      {/* SELECTED PROJECTS */}

      <SelectedProjects />

      {/* WORK EXPERIENCE */}

      <WorkExperience />

      {/* PROFESSIONAL CERTIFICATION */}

      <ProfessionalCertification />

      {/* CONTACT SECTION */}

      <ContactSection />

      {/* FOOTER */}

      <PortfolioFooter />
    </div>
  )
}

export default App
