import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';
import Works from '../components/Works/Works';
import Contact from '../components/Contact/Contact';
import { personalInfo, projects, contactInfo } from '../data/loadContent';

export default function HomePage() {
  return (
    <>
      <Hero
        name={personalInfo.name}
        title={personalInfo.title}
        subtitle={personalInfo.subtitle}
        heroImage={personalInfo.heroImage}
      />
      <div className="app">
        <Section id="works" title="精选作品">
          <Works projects={projects} />
        </Section>
        <Section id="contact" title="联系我">
          <Contact email={contactInfo.email} social={contactInfo.social} />
        </Section>
      </div>
    </>
  );
}
