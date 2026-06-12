import React from 'react';
import './App.css';
import projects from './data/projects';
import ProjectCarousel from './components/ProjectCarousel';
import GameCollection from './components/GameCollection';
import Chatbot from './components/Chatbot';

function App() {
  const apps = projects.filter(p => p.category === 'app');
  const aiProjects = projects.filter(p => p.category === 'ai');
  const notesProjects = projects.filter(p => p.category === 'notes');
  const toolsProjects = projects.filter(p => p.category === 'tool');
  const allApps = [...apps, ...aiProjects, ...toolsProjects, ...notesProjects];

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
          <h2>Junior DevOps Engineer | Software Developer</h2>
          <div className="cert-badge">
            <span className="azure-badge">☁️ 5x Microsoft Azure Certified</span>
          </div>
          <p className="hero-description">
            React • API Integration • Node.js • Game Development • AI Integration
          </p>
          <div className="hero-buttons">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary">Explore Universe ↓</button>
            <a href="https://github.com/Vengefulcookie" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub →</a>
            <a href="https://www.linkedin.com/in/snethemba-shangase-softw-mech-civil0101" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn →</a>
          </div>
        </div>
      </header>

      <div className="ci-badge-container">
        <div className="ci-badge">
          ⚡ CI/CD: GitHub + Netlify auto-deploy
        </div>
      </div>

      <GameCollection projects={projects} />

      <section id="projects" className="projects-section">
        <h2 className="section-title">🚀 Web Applications</h2>
        <p className="section-subtitle">Tools and apps I've built to solve real problems</p>
        <ProjectCarousel projects={allApps} />
      </section>

      <section id="ai-section" className="ai-section">
        <div className="ai-preview">
          <h2>🤖 AI Assistant <span className="badge">Live</span></h2>
          <p>Ask questions about my experience, skills, or resume - powered by RAG + LLM</p>
          <Chatbot />
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Snethemba Shangase | <a href="https://github.com/Vengefulcookie" target="_blank" rel="noopener noreferrer">GitHub</a> | Built with ☕ and determination</p>
      </footer>
    </div>
  );
}

export default App;