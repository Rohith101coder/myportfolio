import { useRef, useEffect } from 'react'
import './About.css'
function About({ data }) {
  const aboutRef = useRef(null)

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section about-section" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span>
          About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">{data.short}</p>
            <div className="about-detailed">
              {data.detailed.split('\n\n').map((paragraph, index) => (
                <p key={index} className="about-paragraph">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
