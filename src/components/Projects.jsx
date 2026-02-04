import { useRef, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function Projects({ data }) {
  const projectsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="section projects-section" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">03.</span>
          Projects
        </h2>
        <div className="projects-grid">
          {data.map((project) => (
            <div key={project.id} className="project-card">
              {project.image ? (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    {project.github && (
                      <a href={project.github} className="project-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a href={project.liveDemo} className="project-link" aria-label="Demo" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <div className="project-image-placeholder">
                  <FaGithub style={{ fontSize: '3rem', opacity: 0.3 }} />
                </div>
              )}
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.status && (
                    <span className={`project-status ${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                  )}
                </div>
                {project.category && (
                  <span className="project-category">{project.category}</span>
                )}
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.techStack && project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} className="project-link-btn" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.liveDemo && (
                    <a href={project.liveDemo} className="project-link-btn" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
