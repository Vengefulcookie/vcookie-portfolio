import React, { useState } from 'react';
import ProjectCarousel from './ProjectCarousel';
import './GameLab.css';

function GameLab({ projects }) {
    const [showAllGames, setShowAllGames] = useState(false);
  
    const labGames = projects.filter(project => 
        project.category === 'gameLab' || 
        project.category === 'darkFantasy' ||
        project.gameType === 'experimental'
    );
    
    if (labGames.length === 0) return null;
    
    return (
        <div className="game-lab">
            <div className="game-lab-header">
                <div className="header-content">
                    <h2>
                        <span className="lab-emoji">🧪</span> 
                        Game Lab
                        <span className="game-count">{labGames.length} experiments</span>
                    </h2>
                    <p>Unique mechanics, creative concepts, and games that break the mold.</p>
                </div>
                <div className="lab-stats">
                    <div className="stat">
                        <span className="stat-icon">🎲</span>
                        <span className="stat-text">Unique Mechanics</span>
                    </div>
                    <div className="stat">
                        <span className="stat-icon">⚔️</span>
                        <span className="stat-text">Dark Fantasy</span>
                    </div>
                    <div className="stat">
                        <span className="stat-icon">🔮</span>
                        <span className="stat-text">Experimental</span>
                    </div>
                </div>
            </div>
            
            <ProjectCarousel projects={labGames} />
            
            <div className="game-lab-footer">
                <button 
                    className="game-lab-btn"
                    onClick={() => setShowAllGames(!showAllGames)}
                >
                    {showAllGames ? '🔬 Show Less' : '🧪 Explore Game Lab'}
                </button>
                <p className="lab-note">
                    ⚡ From cursed coins to claw machines - each game is a new experiment in fun!
                </p>
            </div>
            
            {showAllGames && (
                <div className="game-lab-archive">
                    <h3>Experiment Collection</h3>
                    <div className="game-list">
                        {labGames.map(game => (
                            <a 
                                key={game.id} 
                                href={game.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="game-list-item"
                            >
                                <span className="game-icon">
                                    {game.category === 'darkFantasy' ? '⚔️' : '🧪'}
                                </span>
                                <div className="game-info">
                                    <strong>{game.title}</strong>
                                    <span className="game-desc">{game.description.substring(0, 60)}...</span>
                                </div>
                                <span className="play-now">Play Now →</span>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default GameLab;