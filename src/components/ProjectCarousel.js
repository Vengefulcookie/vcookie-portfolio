import React, { useState, useEffect, useRef } from 'react';
import Badge from './Badge';
import './ProjectCarousel.css';

function ProjectCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && projects.length > 0) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 5000);
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

  // Helper function to get button text and icon
  const getLinkProps = (project) => {
    if (project.comingSoon) {
      return { text: "🔜 Coming Soon", icon: "🔨", isClickable: false };
    }
    if (project.url?.includes('youtu.be') || project.url?.includes('youtube.com')) {
      return { text: "🎥 Watch Demo →", icon: "🎥", isClickable: true };
    }
    if (project.url?.includes('github.com')) {
      return { text: "📂 View on GitHub →", icon: "📂", isClickable: true };
    }
    return { text: "🔗 Live Demo →", icon: "🔗", isClickable: true };
  };

  if (projects.length === 0) return null;

  return (
    <div className="carousel-container">
      <div className="carousel">
        {projects.map((project, index) => {
          const position = getProjectPosition(index);
          if (position === 'hidden') return null;
          
          const linkProps = getLinkProps(project);
          
          return (
            <div
              key={project.id}
              className={`carousel-item ${position} ${position === 'center' ? 'active' : ''} ${project.comingSoon ? 'coming-soon' : ''}`}
              onClick={() => goToSlide(index)}
            >
              <div className="project-card-carousel" style={{ background: project.gradient }}>
                <div className="card-content">
                  <div className="card-header">
                    <h3>{project.title}</h3>
                    <Badge category={project.category} size="small" />
                  </div>
                  <p>{project.description}</p>
                  {project.demoNote && (
                    <div className="demo-note-inline">{project.demoNote}</div>
                  )}
                  <div className="tech-stack">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="card-footer">
                    {linkProps.isClickable ? (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="live-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {linkProps.icon} {linkProps.text}
                      </a>
                    ) : (
                      <span 
                        className="live-link coming-soon-link"
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`🚧 ${project.title} is coming soon! Check back later.`);
                        }}
                      >
                        {linkProps.icon} {linkProps.text}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons - only show if more than 1 project */}
      {projects.length > 1 && (
        <>
          <button className="carousel-nav prev" onClick={goToPrev}>
            ‹
          </button>
          <button className="carousel-nav next" onClick={goToNext}>
            ›
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {projects.length > 1 && (
        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}

      {/* Auto-play indicator */}
      {projects.length > 1 && (
        <div className="auto-play-indicator">
          <span>Auto-rotating every 5s</span>
          <button 
            className={`auto-play-toggle ${!isAutoPlaying ? 'paused' : ''}`}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          >
            {isAutoPlaying ? '⏸' : '▶'}
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectCarousel;