import { Link } from 'react-router-dom';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link to={`/projects/${project.id}`} className="project-card__image-wrap">
        {project.image ? (
          <img className="project-card__image" src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div className="project-card__placeholder">
            <span>{project.title.charAt(0)}</span>
          </div>
        )}
        <div className="project-card__overlay">
          <span className="project-card__overlay-link">
            查看项目 &rarr;
          </span>
        </div>
      </Link>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
