import { LensProvider } from './components/LensProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SkillGrid from './components/SkillGrid';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LensProvider>
      <main>
        <Navbar />
        <Hero />
        <Projects />
        <SkillGrid />
        <Timeline />
        <Contact />
        <Footer />
      </main>
    </LensProvider>
  );
}
