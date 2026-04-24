import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { skillCategories } from '../data/skills';
import { useLens } from './LensProvider';

const categoryIcons = {
  engineering: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  intelligence: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
      <path d="M9.5 2A2.5 2.5 0 0112 4.5v0A2.5 2.5 0 0114.5 2h0A4.5 4.5 0 0119 6.5v0a4.5 4.5 0 01-4.5 4.5h-5A4.5 4.5 0 015 6.5v0A4.5 4.5 0 019.5 2z" />
      <path d="M12 11v4" />
      <path d="M8 15h8" />
      <path d="M6 19a6 6 0 0112 0" />
    </svg>
  ),
  performance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
};

const categoryAccents = {
  engineering: '#3B82F6',
  intelligence: '#8B5CF6',
  performance: '#10B981',
};

export default function SkillGrid() {
  const { lens } = useLens();

  const sorted = lens === 'aiml'
    ? [...skillCategories].sort((a) => (a.id === 'intelligence' ? -1 : 1))
    : [...skillCategories].sort((a) => (a.id === 'engineering' ? -1 : 1));

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Expertise</span>
            <h2 className="section-title">The Full-Stack AI Skill Grid</h2>
            <p className="section-subtitle">
              Where software engineering meets machine intelligence
            </p>
          </div>
        </ScrollReveal>

        <div className="skills-grid">
          {sorted.map((cat, i) => {
            const accent = categoryAccents[cat.id];
            return (
              <ScrollReveal key={cat.id} delay={i * 0.12} direction="up">
                <motion.div
                  className="skill-card"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  style={{ '--accent': accent }}
                >
                  <div className="skill-card-glow" style={{ background: `${accent}20` }} />
                  <div className="skill-card-icon" style={{ color: accent }}>
                    {categoryIcons[cat.id]}
                  </div>
                  <h3 className="skill-card-title">{cat.title}</h3>
                  <p className="skill-card-desc">{cat.description}</p>
                  <div className="skill-pills">
                    {cat.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        className="skill-pill"
                        style={{ borderColor: `${accent}40`, color: accent }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.06 }}
                        whileHover={{ background: `${accent}20`, scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
