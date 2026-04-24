import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { education } from '../data/education';

export default function Timeline() {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section education-section">
      <div className="section-container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Background</span>
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">The academic foundation behind the work</p>
          </div>
        </ScrollReveal>

        <div className="timeline">
          {/* Animated vertical line */}
          <div className="timeline-line-track" ref={lineRef}>
            <motion.div
              className="timeline-line-fill"
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          {education.map((edu, i) => (
            <ScrollReveal key={edu.id} delay={0.3 + i * 0.2} direction="left">
              <div className="timeline-item">
                <div className="timeline-dot-wrapper">
                  <motion.div
                    className={`timeline-dot ${edu.status === 'ongoing' ? 'dot-ongoing' : 'dot-completed'}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: 0.4 + i * 0.2 }}
                  >
                    {edu.status === 'ongoing' ? (
                      <motion.div
                        className="dot-pulse"
                        animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    ) : (
                      <svg viewBox="0 0 12 12" width="10" height="10" fill="currentColor">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      </svg>
                    )}
                  </motion.div>
                </div>

                <div className="timeline-content">
                  <div className="timeline-period">{edu.period}</div>
                  <h3 className="timeline-degree">{edu.degree}</h3>
                  <div className="timeline-institution">
                    <span className="institution-name">{edu.institution}</span>
                    <span className="institution-divider">·</span>
                    <span className="institution-location">{edu.location}</span>
                  </div>
                  <p className="timeline-desc">{edu.description}</p>
                  {edu.status === 'ongoing' && (
                    <span className="timeline-badge">Currently Enrolled</span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
