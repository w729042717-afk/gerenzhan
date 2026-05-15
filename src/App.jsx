import { useCallback } from 'react';
import useActiveSection from './hooks/useActiveSection';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import About from './components/About/About';
import Works from './components/Works/Works';
import Timeline from './components/Timeline/Timeline';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import {
  personalInfo,
  navLinks,
  projects,
  timeline,
  skillCategories,
  contactInfo,
} from './data/loadContent';
import './App.css';

const sectionIds = navLinks.map((l) => l.id);

export default function App() {
  const activeSection = useActiveSection(sectionIds);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <Navbar
        navLinks={navLinks}
        activeSection={activeSection}
        onNavClick={scrollToSection}
      />
      <Hero
        name={personalInfo.name}
        title={personalInfo.title}
        subtitle={personalInfo.subtitle}
      />
      <div className="app">
        <Section id="about" title="关于">
          <About
            bio={personalInfo.bio}
            avatar={personalInfo.avatar}
            highlights={personalInfo.highlights}
          />
        </Section>

        <Section id="works" title="精选作品">
          <Works projects={projects} />
        </Section>

        <Section id="timeline" title="工作经历">
          <Timeline events={timeline} />
        </Section>

        <Section id="skills" title="专业技能">
          <Skills categories={skillCategories} />
        </Section>

        <Section id="contact" title="联系我">
          <Contact email={contactInfo.email} social={contactInfo.social} />
        </Section>
      </div>
      <Footer name={personalInfo.name} />
    </>
  );
}
