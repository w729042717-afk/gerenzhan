import { useParams, Link } from 'react-router-dom';
import ProjectGallery from '../components/ProjectGallery/ProjectGallery';
import RichContent from '../components/RichContent/RichContent';
import { getProjectBySlug } from '../data/loadContent';
import './ProjectDetail.css';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="app" style={{ textAlign: 'center', padding: '6rem 2rem' }}>
        <h1>项目未找到</h1>
        <p>找不到这个项目，可能已被移除或链接无效。</p>
        <Link to="/" style={{ color: 'var(--color-black)', fontWeight: 600 }}>返回首页</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <header className="project-detail__hero">
        {project.image ? (
          <img src={project.image} alt={project.title} className="project-detail__hero-img" />
        ) : (
          <div className="project-detail__hero-placeholder">
            <span>{project.title.charAt(0)}</span>
          </div>
        )}
        <div className="project-detail__hero-overlay">
          <h1 className="project-detail__title">{project.title}</h1>
        </div>
      </header>

      <div className="app">
        <div className="project-detail__meta">
          {project.year && <span className="project-detail__year">{project.year}</span>}
          {project.role && <span className="project-detail__role">角色：{project.role}</span>}
          {project.client && <span className="project-detail__client">客户：{project.client}</span>}
        </div>

        <div className="project-detail__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-detail__tag">{tag}</span>
          ))}
        </div>

        <section className="project-detail__body">
          <RichContent text={project.detail || project.description} />
        </section>

        {project.images && project.images.length > 0 && (
          <section className="project-detail__gallery">
            <h2>项目图集</h2>
            <ProjectGallery images={project.images} title={project.title} />
          </section>
        )}

        <div className="project-detail__links">
          {project.links.live && project.links.live !== '#' && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-detail__link">
              查看线上作品 &rarr;
            </a>
          )}
        </div>

        <Link to="/" className="project-detail__back">← 返回首页</Link>
      </div>
    </div>
  );
}
