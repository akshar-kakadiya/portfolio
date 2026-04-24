import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLens } from './LensProvider';
import ScrollReveal from './ScrollReveal';
import { projects } from '../data/projects';

const categoryColors = {
  aiml: { bg: 'rgba(139,92,246,0.15)', text: '#A78BFA', border: 'rgba(139,92,246,0.4)' },
  fullstack: { bg: 'rgba(59,130,246,0.15)', text: '#60A5FA', border: 'rgba(59,130,246,0.4)' },
  infrastructure: { bg: 'rgba(16,185,129,0.15)', text: '#34D399', border: 'rgba(16,185,129,0.4)' },
  'ai-integration': { bg: 'rgba(236,72,153,0.15)', text: '#F472B6', border: 'rgba(236,72,153,0.4)' },
};

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const colors = categoryColors[project.category];

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        className="project-card"
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="project-card-accent" style={{ background: colors.bg, borderColor: colors.border }} />

        <div className="project-card-inner">
          <div className="project-card-header">
            <span className="project-category-badge" style={{ background: colors.bg, color: colors.text, borderColor: colors.border }}>
              {project.categoryLabel}
            </span>
            <button
              onClick={() => setExpanded(!expanded)}
              className="project-expand-btn"
              aria-label={expanded ? 'Collapse' : 'Expand'}
            >
              <motion.span animate={{ rotate: expanded ? 45 : 0 }} transition={{ duration: 0.3 }}>
                +
              </motion.span>
            </button>
          </div>

          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>

          <div className="project-tech-stack">
            {project.tech.map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>

          <AnimatePresence>
            {expanded && (
              <motion.div
                className="project-details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <div className="project-details-inner">
                  <h4>Key Highlights</h4>
                  <ul>
                    {project.highlights.map((h, i) => (
                      <li key={i}>
                        <span className="highlight-dot" style={{ background: colors.text }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <h4>Technical Detail</h4>
                  <p>{project.technicalDetail}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Projects() {
  const { lens } = useLens();

  const sorted = lens === 'aiml'
    ? [...projects].sort((a) => (a.category === 'aiml' || a.category === 'ai-integration' ? -1 : 1))
    : [...projects].sort((a) => (a.category === 'fullstack' || a.category === 'infrastructure' ? -1 : 1));

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Work</span>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              {lens === 'aiml'
                ? 'Exploring intelligence through data and models'
                : 'Building systems that handle real-world complexity'}
            </p>
          </div>
        </ScrollReveal>

        <div className="projects-grid">
          {sorted.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
