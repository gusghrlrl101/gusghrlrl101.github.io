import './ProjectCard.css'

interface Project {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  link: string
  tags: string[]
}

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a href={project.link} className="project-card">
      <div className="card-content">
        <h2 className="card-title">
          {project.title}
          <span className="card-title-en">{project.titleEn}</span>
        </h2>
        <p className="card-description">
          {project.description}
        </p>
        <p className="card-description-en">
          {project.descriptionEn}
        </p>
        <div className="card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="card-arrow">→</div>
    </a>
  )
}

export default ProjectCard
