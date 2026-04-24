import { useLens } from './LensProvider';
import { motion } from 'framer-motion';

export default function LensToggle() {
  const { lens, toggleLens } = useLens();

  return (
    <button
      id="lens-toggle"
      onClick={toggleLens}
      className="lens-toggle"
      aria-label={`Switch to ${lens === 'sde' ? 'AI/ML' : 'SDE'} lens`}
    >
      <motion.div
        className="lens-toggle-track"
        animate={{
          backgroundColor: lens === 'sde' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(139, 92, 246, 0.15)',
          borderColor: lens === 'sde' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(139, 92, 246, 0.4)',
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="lens-toggle-thumb"
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          style={{
            marginLeft: lens === 'aiml' ? 'auto' : '0',
          }}
          animate={{
            backgroundColor: lens === 'sde' ? '#3B82F6' : '#8B5CF6',
            boxShadow: lens === 'sde'
              ? '0 0 12px rgba(59, 130, 246, 0.6)'
              : '0 0 12px rgba(139, 92, 246, 0.6)',
          }}
        />
        <div className="lens-toggle-labels">
          <motion.span
            animate={{
              opacity: lens === 'sde' ? 1 : 0.4,
              color: lens === 'sde' ? '#fff' : 'var(--text-secondary)',
            }}
            transition={{ duration: 0.3 }}
          >
            {'</>'}
          </motion.span>
          <motion.span
            animate={{
              opacity: lens === 'aiml' ? 1 : 0.4,
              color: lens === 'aiml' ? '#fff' : 'var(--text-secondary)',
            }}
            transition={{ duration: 0.3 }}
          >
            {'{AI}'}
          </motion.span>
        </div>
      </motion.div>
    </button>
  );
}
