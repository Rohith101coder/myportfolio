import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'
import portfolioData from './data/portfolio.json'
import './styles/components.css'

function App() {
  const [data, setData] = useState(portfolioData)

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="app">
      <ParticleBackground />
      <Navbar data={data} />
      <Hero 
        data={data.personal} 
        socials={data.socials}
        resumeUrl={data.personal.resumeUrl}
      />
      <About data={data.about} />
      <Skills data={data.skills} />
      <Projects data={data.projects} />
      <Education data={data.education} />
      <Certifications data={data.certifications} />
      <Contact 
        personal={data.personal} 
        socials={data.socials}
        cta={data.cta}
      />
    </div>
  )
}

export default App
