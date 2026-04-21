import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
    return (
     <a href={project.url} target="_blank" rel="noopenter noreferrer" className="project-card-link">
         <div className="project-card" style={{ background: project.gradient }}>
            <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                    {project.tech.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>
                <div className="card-footer">
                    <span className="live-link">🔗 Live Demo →</span>
                </div>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;