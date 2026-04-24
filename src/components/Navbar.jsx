import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LensToggle from './LensToggle';
import { useLens } from './LensProvider';
import resumePdf from '../assets/Ak_resume.pdf';

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lens } = useLens();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        id="navbar"
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-inner">
          <a href="#hero" className="navbar-logo" aria-label="Go to top">
            <motion.span
              key={lens}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {lens === 'sde' ? '<AK/>' : '{AK}'}
            </motion.span>
          </a>

          <div className="navbar-center">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="navbar-link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="navbar-right">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resume-nav"
              aria-label="Open resume PDF"
            >
              Resume
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                <path d="M2 9L9 2M9 2H4M9 2V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <LensToggle />
            <button
              className="navbar-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${mobileOpen ? 'open' : ''}`}>
                <span /><span /><span />
              </span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="mobile-menu-inner">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="mobile-menu-link"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-menu-link mobile-resume-link"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.07 }}
                onClick={() => setMobileOpen(false)}
              >
                Resume ↗
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
