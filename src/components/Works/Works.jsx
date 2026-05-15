import ProjectCard from './ProjectCard';
import './Works.css';

export default function Works({ projects }) {
  return (
    <div className="works">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
