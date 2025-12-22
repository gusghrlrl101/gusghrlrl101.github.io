import './App.css'
import ProjectCard from './components/ProjectCard'

interface Project {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  link: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 'resume',
    title: '이력서',
    titleEn: 'Resume',
    description: 'AI/ML 엔지니어',
    descriptionEn: 'AI/ML Engineer',
    link: '/resume/',
    tags: ['Career', 'Resume', 'Portfolio']
  }
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>임현호</h1>
        <p className="subtitle">Hyunho Lim</p>
      </header>

      <main className="main">
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <a href="https://github.com/gusghrlrl101" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:gusghrlrl101@gmail.com">
            Email
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
