import { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import profilePicture from '../assets/profile-picture.jpg'

function Hero({ data, socials, resumeUrl }) {
  const heroRef = useRef(null)
  const [currentRole, setCurrentRole] = useState(0)

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (data.typingRoles && data.typingRoles.length > 0) {
      const interval = setInterval(() => {
        setCurrentRole((prev) => (prev + 1) % data.typingRoles.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [data.typingRoles])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    if (resumeUrl) {
      window.open(resumeUrl, '_blank')
    }
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-greeting">Hello, I'm</div>
          <h1 className="hero-name">
            <span className="gradient-text">{data.name}</span>
          </h1>
          <h2 className="hero-title">
            {data.title}
            {data.typingRoles && data.typingRoles.length > 0 && (
              <span className="typing-role"> & {data.typingRoles[currentRole]}</span>
            )}
          </h2>
          <p className="hero-tagline">{data.tagline}</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToAbout}>
              View My Work
            </button>
            {resumeUrl && (
              <button className="btn btn-secondary" onClick={downloadResume}>
                Download CV
              </button>
            )}
          </div>
          <div className="hero-social">
            {socials.github && (
              <a href={socials.github} className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            )}
            {(socials.leetcode || socials.hackerrank) && (
              <a
                href={socials.leetcode || socials.hackerrank}
                className="social-link"
                aria-label="LeetCode"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>
            )}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-avatar">
            <div className="avatar-glow"></div>
            <div className="avatar-container">
              <img src={profilePicture} alt={data.name} />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <FaArrowDown />
      </div>
    </section>
  )
}

export default Hero
