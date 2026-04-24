import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const LensContext = createContext({
  lens: 'sde',
  toggleLens: () => {},
});

export function useLens() {
  return useContext(LensContext);
}

export function LensProvider({ children }) {
  const [lens, setLens] = useState('sde');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('portfolio-lens');
    if (stored === 'sde' || stored === 'aiml') {
      setLens(stored);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-lens', lens);
      localStorage.setItem('portfolio-lens', lens);
    }
  }, [lens, mounted]);

  const toggleLens = useCallback(() => {
    setLens((prev) => (prev === 'sde' ? 'aiml' : 'sde'));
  }, []);

  // Set default lens attribute before mount to prevent flash
  useEffect(() => {
    document.documentElement.setAttribute('data-lens', lens);
  }, []);

  return (
    <LensContext.Provider value={{ lens, toggleLens }}>
      {children}
    </LensContext.Provider>
  );
}
