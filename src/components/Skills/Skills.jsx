import SkillGroup from './SkillGroup';
import './Skills.css';

export default function Skills({ categories }) {
  return (
    <div className="skills">
      {categories.map((category) => (
        <SkillGroup key={category.category} category={category} />
      ))}
    </div>
  );
}
