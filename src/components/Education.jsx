import { useRef, useEffect } from 'react'
import { FaGraduationCap } from 'react-icons/fa'

function Education({ data }) {
  const educationRef = useRef(null)

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

    if (educationRef.current) {
      observer.observe(educationRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="section education-section" ref={educationRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">04.</span>
          Education
        </h2>
        <div className="timeline">
          {data.map((edu, index) => (
            <div key={edu.id || index} className="timeline-item">
              <div className="timeline-marker">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-degree">{edu.degree} - {edu.field}</h3>
                  <span className="timeline-institute">{edu.institute}</span>
                  <span className="timeline-location">{edu.location}</span>
                  <span className="timeline-status">{edu.status}</span>
                </div>
                {edu.score && (
                  <div className="timeline-score">
                    <strong>Score:</strong> {edu.score}
                  </div>
                )}
                {edu.description && (
                  <p className="timeline-description">{edu.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

