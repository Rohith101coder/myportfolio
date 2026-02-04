import { useRef, useEffect } from 'react'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'

function Certifications({ data }) {
  const certificationsRef = useRef(null)

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

    if (certificationsRef.current) {
      observer.observe(certificationsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="certifications" className="section certifications-section" ref={certificationsRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">05.</span>
          Certifications
        </h2>
        <div className="certifications-grid">
          {data.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="cert-icon">
                <FaCertificate />
              </div>
              <div className="cert-content">
                <h3 className="cert-name">{cert.name}</h3>
                <div className="cert-meta">
                  <span className="cert-platform">{cert.platform}</span>
                  {cert.date && (
                    <span className="cert-date">{cert.date}</span>
                  )}
                </div>
                {cert.skills && cert.skills.length > 0 && (
                  <div className="cert-skills">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="cert-skill-tag">{skill}</span>
                    ))}
                  </div>
                )}
                {cert.verification && (
                  <a 
                    href={cert.verification} 
                    className="cert-verification" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

