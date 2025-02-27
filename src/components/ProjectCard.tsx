import { Link } from "react-router-dom"
import type { Project } from "../types/Project"

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { slug, title, description, date, tags } = project

  return (
    <Link to={`/projects/${slug}`} className="card-link">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">{title}</h2>
          <p className="card-date">{new Date(date).toLocaleDateString()}</p>
        </div>
        <div className="card-content">
          <p className="card-description">{description}</p>
        </div>
        <div className="card-footer">
          <div className="card-tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="card-link-text">
            Voir le projet <span className="arrow-icon">→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard

