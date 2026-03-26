import { useRef, useEffect } from 'react'

function Skills({ data }) {
  const skillsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    { name: 'Frontend', items: data.frontend || [] },
    { name: 'Backend', items: data.backend || [] },
    { name: 'Databases', items: data.databases || [] },
    { name: 'Tools', items: data.tools || [] },
    { name: 'AI Tools', items: data.aiTools || [] }
  ].filter(category => category.items.length > 0)

  return (
    <section id="skills" className="section skills-section" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">02.</span>
          Skills & Technologies
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="skill-items-simple">
                {category.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
