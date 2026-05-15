import Section from '../components/Section/Section';
import About from '../components/About/About';
import Timeline from '../components/Timeline/Timeline';
import Skills from '../components/Skills/Skills';
import RichContent from '../components/RichContent/RichContent';
import { personalInfo, timeline, skillCategories } from '../data/loadContent';
import about from '../../content/settings/about.json';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="app">
      <Section id="about" title="关于我">
        <About
          bio={personalInfo.bio}
          avatar={personalInfo.avatar}
          highlights={personalInfo.highlights}
        />
      </Section>

      {about.philosophy && (
        <section className="about-philosophy">
          <h2>设计理念</h2>
          <RichContent text={about.philosophy} />
        </section>
      )}

      <Section id="timeline" title="工作经历">
        <Timeline events={timeline} />
      </Section>

      <Section id="skills" title="专业技能">
        <Skills categories={skillCategories} />
      </Section>
    </div>
  );
}
