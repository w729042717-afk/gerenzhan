import { useRef } from 'react';
import useInView from '../../hooks/useInView';
import './SkillGroup.css';

export default function SkillGroup({ category }) {
  const ref = useRef(null);
  const isVisible = useInView(ref, { threshold: 0.2, once: true });

  return (
    <div ref={ref} className="skill-group">
      <h3 className="skill-group__title">{category.category}</h3>
      <ul className="skill-group__list">
        {category.skills.map((skill, i) => (
          <li key={skill.name} className="skill-group__item">
            <div className="skill-group__label">
              <span>{skill.name}</span>
              <span className="skill-group__pct">{skill.level}%</span>
            </div>
            <div className="skill-group__bar">
              <div
                className={`skill-group__fill${isVisible ? ' skill-group__fill--animate' : ''}`}
                style={{ '--level': `${skill.level}%`, '--delay': `${i * 0.1}s` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
