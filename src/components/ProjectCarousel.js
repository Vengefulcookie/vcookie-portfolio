import React, { useState, useEffect, useRef } from 'react';
import Badge from './Badge';
import './ProjectCarousel.css';

function ProjectCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  useEffect(() => { //autoplay
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 5000); // Change every 5 seconds
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, projects.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
   
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getProjectPosition = (index) => {
    const diff = (index - activeIndex + projects.length) % projects.length;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === projects.length - 1) return 'side';
    return 'hidden';
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {projects.map((project, index) => {
          const position = getProjectPosition(index);
          if (position === 'hidden') return null;
          
          return (
            <div
              key={project.id}
              className={`carousel-item ${position} ${position === 'center' ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            >
              <div className="project-card-carousel" style={{ background: project.gradient }}>
                <div className="card-content">
                  <div className="card-header">
                    <h3>{project.title}</h3>
                    <Badge category={project.category} size="small" />
                  </div>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="live-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    🔗 Live Demo →
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="carousel-nav prev" onClick={goToPrev}>
        ‹
      </button>
      <button className="carousel-nav next" onClick={goToNext}>
        ›
      </button>

      <div className="carousel-dots">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div className="auto-play-indicator">
        <span>Auto-rotating every 5s</span>
        <button 
          className={`auto-play-toggle ${!isAutoPlaying ? 'paused' : ''}`}
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        >
          {isAutoPlaying ? '⏸' : '▶'}
        </button>
      </div>
    </div>
  );
}

export default ProjectCarousel;