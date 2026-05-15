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
        <Section id="about" title="About">
          <About
            bio={personalInfo.bio}
            avatar={personalInfo.avatar}
            highlights={personalInfo.highlights}
          />
        </Section>

        <Section id="works" title="Selected Works">
          <Works projects={projects} />
        </Section>

        <Section id="timeline" title="Experience">
          <Timeline events={timeline} />
        </Section>

        <Section id="skills" title="Skills">
          <Skills categories={skillCategories} />
        </Section>

        <Section id="contact" title="Get in Touch">
          <Contact email={contactInfo.email} social={contactInfo.social} />
        </Section>
      </div>
      <Footer name={personalInfo.name} />
    </>
  );
}
