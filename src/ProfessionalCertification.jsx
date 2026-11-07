import { motion } from 'framer-motion'
import {
  Award,
  BadgeCheck,
  ShieldCheck,
  Code2,
  CalendarDays,
  ExternalLink,
  Download,
} from 'lucide-react'

import './ProfessionalCertification.css'

const certification = {
  title: 'Junior Web Developer',
  qualification: 'Pengembang Web Pratama',
  institution: 'Badan Nasional Sertifikasi Profesi (BNSP)',
  issuer: 'LSP TIK Global',
  issued: '31 January 2025',
  expires: 'January 2028',
  certificate: '/sertifikat-bnsp-akmal.pdf',
}

export default function ProfessionalCertification() {
  return (
    <section
      id="certification"
      className="professional-certification section-container"
    >
      <motion.div
        className="certification-header"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">
          ↗ CERTIFICATION
        </span>

        <h2>Professional Certification</h2>

        <p>
          Professional competencies and qualifications
          supporting my journey as a web developer.
        </p>
      </motion.div>

      <motion.article
        className="certification-card"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        whileHover={{ y: -5 }}
      >
        <div className="certification-glow" />

        <div className="certification-top">
          <div className="certification-icon">
            <Award size={34} strokeWidth={1.6} />
          </div>

          <div className="certification-badge">
            <BadgeCheck size={15} />
            BNSP CERTIFIED
          </div>
        </div>

        <div className="certification-content">
          <span className="certification-category">
            SOFTWARE DEVELOPMENT
          </span>

          <h3>{certification.title}</h3>

          <h4>{certification.qualification}</h4>

          <p className="certification-issuer">
            {certification.institution}
            {' · '}
            {certification.issuer}
          </p>

          <p className="certification-description">
            Professional competency certification
            in Programming and Software Development,
            with the qualification of Junior Web Developer
            (Pengembang Web Pratama).
          </p>

          <div className="certification-skills">
            <span>
              <Code2 size={14} />
              Web Development
            </span>

            <span>
              <ShieldCheck size={14} />
              Professional Competency
            </span>
          </div>

          <div className="certification-dates">
            <div>
              <CalendarDays size={16} />
              <span>
                Issued: {certification.issued}
              </span>
            </div>

            <div>
              <CalendarDays size={16} />
              <span>
                Valid until: {certification.expires}
              </span>
            </div>
          </div>

          <div className="certification-actions">
            <a
              href={certification.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-action-button primary"
            >
              <ExternalLink size={16} />
              View Certificate
            </a>

            <a
              href={certification.certificate}
              download="Sertifikat_BNSP_Muhamad_Akmal_Maulana.pdf"
              className="certification-action-button secondary"
            >
              <Download size={16} />
              Download Certificate
            </a>
          </div>
        </div>

        <div className="certification-footer">
          <div className="certification-footer-left">
            <ShieldCheck size={19} />
            <span>BNSP Certification</span>
          </div>

          <span className="certification-footer-right">
            Junior Web Developer
          </span>
        </div>
      </motion.article>
    </section>
  )
}
