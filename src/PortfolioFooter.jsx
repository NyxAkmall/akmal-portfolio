import {
  ArrowUp,
  Heart,
  Mail,
} from 'lucide-react'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

import './PortfolioFooter.css'

// ==========================================
// CONTACT & SOCIAL LINKS
// ==========================================

const EMAIL = 'akmalmaulana075@gmail.com'

const GMAIL_URL =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`

const GITHUB_URL = 'https://github.com/NyxAkmall'

const LINKEDIN_URL =
  'https://www.linkedin.com/in/muhamad-akmal-maulana-dev/'

// ==========================================
// FOOTER NAVIGATION
// ==========================================

const footerNavigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certification', href: '#certification' },
  { label: 'Contact', href: '#contact' },
]

// ==========================================
// PORTFOLIO FOOTER
// ==========================================

export default function PortfolioFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="ak-footer">
      <div className="ak-footer-container">
        <div className="ak-footer-main">

          {/* FOOTER ABOUT */}

          <div className="ak-footer-about">
            <a
              href="#home"
              className="ak-footer-brand"
            >
              <span>&lt;/&gt;</span>
              Akmal<span className="ak-footer-brand-blue">.dev</span>
            </a>

            <p>
              Full Stack Web Developer focused on
              building reliable, functional, and
              user-friendly web applications.
            </p>

            {/* SOCIAL LINKS */}

            <div className="ak-footer-socials">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub size={19} />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedinIn size={19} />
              </a>

              <a
                href={GMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email via Gmail"
                title="Send Email"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}

          <div className="ak-footer-navigation">
            <h4>Quick Links</h4>

            <div className="ak-footer-nav-grid">
              {footerNavigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* LET'S CONNECT */}

          <div className="ak-footer-connect">
            <h4>Let's Connect</h4>

            <p>
              Open to freelance projects,
              collaborations, and job opportunities.
            </p>

            <a
              href={GMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ak-footer-email"
            >
              <Mail size={15} />
              Get in Touch
            </a>
          </div>
        </div>

        {/* FOOTER BOTTOM */}

        <div className="ak-footer-bottom">
          <p>
            © {year} Muhamad Akmal Maulana.
            All rights reserved.
          </p>

          <span>
            Built with <Heart size={13} /> using React
          </span>

          <a
            href="#home"
            className="ak-footer-back-top"
            aria-label="Back to top"
          >
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  )
}
