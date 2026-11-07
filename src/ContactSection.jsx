import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

import './ContactSection.css'

// ==========================================
// CONTACT INFORMATION
// ==========================================

const EMAIL = 'akmalmaulana075@gmail.com'
const WHATSAPP = '628561624148'

const GITHUB = 'https://github.com/NyxAkmall'

const LINKEDIN =
  'https://www.linkedin.com/in/muhamad-akmal-maulana-dev/'

// Gmail compose URL
const GMAIL_COMPOSE =
  'https://mail.google.com/mail/?view=cm&fs=1'

// ==========================================
// CONTACT LINKS
// ==========================================

const contactLinks = [
  {
    name: 'Email',
    detail: EMAIL,
    href: `${GMAIL_COMPOSE}&to=${encodeURIComponent(EMAIL)}`,
    icon: Mail,
    external: true,
  },
  {
    name: 'WhatsApp',
    detail: '0856-1624-148',
    href: `https://wa.me/${WHATSAPP}`,
    icon: MessageCircle,
    external: true,
  },
]

// ==========================================
// CONTACT SECTION
// ==========================================

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  // Handle form input changes
  const updateForm = (event) => {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  // ========================================
  // OPEN GMAIL WITH PREFILLED MESSAGE
  // ========================================

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = `Portfolio Inquiry from ${form.name}`

    const body = [
      'Hello Akmal,',
      '',
      form.message,
      '',
      'Best regards,',
      form.name,
      form.email,
    ].join('\n')

    const gmailUrl =
      `${GMAIL_COMPOSE}` +
      `&to=${encodeURIComponent(EMAIL)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    // Open Gmail in a new tab
    window.open(
      gmailUrl,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section
      id="contact"
      className="ak-contact section-container"
    >
      {/* SECTION HEADING */}

      <motion.div
        className="ak-contact-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">
          ↗ LET'S CONNECT
        </span>

        <h2>
          Have a Project <span>in Mind?</span>
        </h2>

        <p>
          I'm open to web development projects,
          collaborations, and career opportunities.
          Let's build something great together.
        </p>
      </motion.div>

      {/* CONTACT GRID */}

      <div className="ak-contact-grid">
        {/* LEFT: CONTACT INFORMATION */}

        <motion.div
          className="ak-contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="ak-contact-intro">
            <span className="ak-contact-eyebrow">
              GET IN TOUCH
            </span>

            <h3>Let's work together.</h3>

            <p>
              Have an idea, a project, or an opportunity?
              Feel free to reach out through any of
              the channels below.
            </p>
          </div>

          {/* EMAIL & WHATSAPP */}

          <div className="ak-contact-link-list">
            {contactLinks.map((item) => {
              const Icon = item.icon

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target={
                    item.external ? '_blank' : undefined
                  }
                  rel={
                    item.external
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="ak-contact-link"
                >
                  <div className="ak-contact-link-icon">
                    <Icon size={21} />
                  </div>

                  <div className="ak-contact-link-text">
                    <span>{item.name}</span>
                    <strong>{item.detail}</strong>
                  </div>

                  <ArrowUpRight size={18} />
                </a>
              )
            })}
          </div>

          {/* SOCIAL MEDIA */}

          <div className="ak-contact-socials">
            <span>FIND ME ONLINE</span>

            <div className="ak-contact-social-buttons">
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                title="GitHub"
              >
                <FaGithub size={21} />
              </a>

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                title="LinkedIn"
              >
                <FaLinkedinIn size={21} />
              </a>
            </div>
          </div>

          {/* LOCATION */}

          <div className="ak-contact-location">
            <MapPin size={16} />
            <span>Depok, West Java, Indonesia</span>
          </div>
        </motion.div>

        {/* RIGHT: CONTACT FORM */}

        <motion.div
          className="ak-contact-form-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
        >
          <div className="ak-contact-form-heading">
            <div className="ak-contact-form-icon">
              <Mail size={25} />
            </div>

            <h3>Send Me a Message</h3>

            <p>
              Fill out the form below to prepare
              an email directly in Gmail.
            </p>
          </div>

          {/* FORM */}

          <form onSubmit={handleSubmit}>
            {/* NAME */}

            <div className="ak-contact-field">
              <label htmlFor="ak-contact-name">
                Your Name
              </label>

              <input
                id="ak-contact-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={updateForm}
                autoComplete="name"
                required
              />
            </div>

            {/* EMAIL ADDRESS */}

            <div className="ak-contact-field">
              <label htmlFor="ak-contact-email">
                Email Address
              </label>

              <input
                id="ak-contact-email"
                type="email"
                name="email"
                placeholder="yourname@example.com"
                value={form.email}
                onChange={updateForm}
                autoComplete="email"
                required
              />
            </div>

            {/* MESSAGE */}

            <div className="ak-contact-field">
              <label htmlFor="ak-contact-message">
                Your Message
              </label>

              <textarea
                id="ak-contact-message"
                name="message"
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={updateForm}
                required
              />
            </div>

            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              className="ak-contact-submit"
            >
              <Send size={17} />
              Compose Email
              <ArrowUpRight size={17} />
            </button>

            {/* FORM NOTE */}

            <p className="ak-contact-form-note">
              This opens Gmail in a new tab with your
              message ready. Review and click Send
              in Gmail to deliver it.
            </p>
          </form>
        </motion.div>
      </div>

      {/* DOWNLOAD CV CTA */}

      <motion.div
        className="ak-contact-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <span>INTERESTED IN MY WORK?</span>

          <h3>
            Explore my experience and skills.
          </h3>
        </div>

        <a
          href="/cv-akmal.pdf"
          download="CV_Muhamad_Akmal_Maulana.pdf"
          className="ak-contact-cv-button"
        >
          <Download size={17} />
          Download My CV
        </a>
      </motion.div>
    </section>
  )
}
