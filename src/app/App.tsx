import { FloatingLeaves } from './components/FloatingLeaves';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Scanline effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 182, 217, 0.03) 2px,
              rgba(255, 182, 217, 0.03) 4px
            )`,
          }}
        />
      </div>

      {/* Floating code symbols animation */}
      <FloatingLeaves />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <AboutSection />
        <ExperienceSection />
        {/* <SkillsSection /> */}
        <ProjectsSection />
        <InterestsSection />
        <ContactSection />
      </div>
    </div>
  );
}