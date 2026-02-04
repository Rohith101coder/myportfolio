import { useRef, useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

function Contact({ personal, socials, cta }) {
  const contactRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

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

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Since no backend, just show alert
    alert('Message sent! (This is a demo - no backend configured)')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section contact-section" ref={contactRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">06.</span>
          Get In Touch
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            {cta && (
              <>
                <p className="contact-availability">{cta.availability}</p>
                <p className="contact-description">{cta.message}</p>
              </>
            )}
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope />
                <span>{personal.email}</span>
              </div>
              <div className="contact-item">
                <span>{personal.location}</span>
              </div>
            </div>
            <div className="contact-social">
              {socials.github && (
                <a href={socials.github} className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              )}
              {(socials.leetcode || socials.hackerrank) && (
                <a
                  href={socials.leetcode || socials.hackerrank}
                  className="social-icon"
                  aria-label="LeetCode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLeetcode />
                </a>
              )}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
