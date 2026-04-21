import React from 'react';
import './App.css';
import projects from './data/projects';
import ProjectCard from './components/ProjectCard';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="portfolio-container">
      <header className="hero">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        
        <div className="ring"></div>
        
        <div className="glow-pulse"></div>
        
        <div className="hero-content">
          <div className="hero-emoji">🌌</div>
          <h1>Snethemba Shangase</h1>
          <h2>Cloud & DevOps Engineer | Full-Stack Developer</h2>
          <p className="hero-description">
            5x Microsoft Azure Certified • React • Node.js • AI Integration • CI/CD
          </p>
          <div className="hero-buttons">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary">Explore Universe ↓</button>
            <a href="https://github.com/Vengefulcookie" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub →</a>
            <a href="https://www.linkedin.com/in/snethemba-shangase-softw-mech-civil0101" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn →</a>
          </div>
        </div>
      </header>

      <section id="projects" className="projects-section">
        <h2 className="section-title">🚀 My Projects</h2>
        <p className="section-subtitle">Live apps I've built - each solving a real problem</p>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="ai-section" className="ai-section">
        <div className="ai-preview">
          <h2>🤖 AI Assistant <span className="badge">Live</span></h2>
          <p>Ask questions about my experience, skills, or resume - powered by RAG + LLM</p>
          <Chatbot />
        </div>
      </section>

      <footer className="footer">
  <p>Built with ⚛️ React • Deployed on Netlify • CI/CD with GitHub</p>
  <div className="footer-links">
    <a href="https://github.com/Vengefulcookie" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://www.linkedin.com/in/snethemba-shangase-softw-mech-civil0101" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="mailto:snethemba.nosipho.shangase@gmail.com">Email</a>
          <a href="Shangase_SN_CV (Resume).pdf">Resume (PDF)</a>
        </div>
      </footer>
    </div>
  );
}

export default App;