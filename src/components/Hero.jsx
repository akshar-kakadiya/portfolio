import { motion, AnimatePresence } from 'framer-motion';
import { useLens } from './LensProvider';
import HeroCodeBlock from './HeroCodeBlock';
import HeroNeuralNet from './HeroNeuralNet';
import resumePdf from '../assets/Ak_resume.pdf';

export default function Hero() {
  const { lens } = useLens();

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-effects">
        <AnimatePresence mode="wait">
          {lens === 'sde' ? (
            <motion.div
              key="sde-bg"
              className="hero-grid-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          ) : (
            <motion.div
              key="aiml-bg"
              className="hero-particles-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={lens}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {lens === 'sde' ? '⚡ Software Engineer' : '🧠 AI/ML Engineer'}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Architecting Systems.
            <br />
            <span className="hero-title-accent">Engineering Intelligence.</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Bridging the gap between scalable software and predictive models.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <span className="btn-arrow">→</span>
            </a>
            <a href="#contact" className="btn-outline">
              Get in Touch
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="btn-resume-hero"
              aria-label="Download resume PDF"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path d="M7.5 1v9M4 7l3.5 3.5L11 7M2 13h11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Resume
            </a>
          </motion.div>
        </div>

        <div className="hero-visual">
          <AnimatePresence mode="wait">
            {lens === 'sde' ? (
              <motion.div
                key="code"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <HeroCodeBlock />
              </motion.div>
            ) : (
              <motion.div
                key="neural"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <HeroNeuralNet />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
