import React from 'react';
import Badge from './Badge';
import './ProjectCard.css';

function ProjectCard({ project }) {
    // Determine if it's a video demo or coming soon
    const isVideoDemo = project.url?.includes('youtu.be') || project.url?.includes('youtube.com');
    const isComingSoon = project.comingSoon === true;
    const isGitHub = project.url?.includes('github.com') && !isVideoDemo;
    
    // Handle different button types
    let buttonText = "🔗 Live Demo →";
    let buttonIcon = "🔗";
    let buttonLink = project.url;
    
    if (isVideoDemo) {
        buttonText = "🎥 Watch Demo →";
        buttonIcon = "🎥";
    } else if (isComingSoon) {
        buttonText = "🔜 Coming Soon";
        buttonIcon = "🔨";
        buttonLink = "#";
    } else if (isGitHub && !project.demoNote) {
        buttonText = "📂 View on GitHub →";
        buttonIcon = "📂";
    }
    
    return (
        <a 
            href={buttonLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-card-link"
            onClick={isComingSoon ? (e) => e.preventDefault() : undefined}
        >
            <div className={`project-card ${isComingSoon ? 'coming-soon' : ''}`} style={{ background: project.gradient }}>
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
                        {project.tech.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                    <div className="card-footer">
                        <span className="live-link">{buttonIcon} {buttonText}</span>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;