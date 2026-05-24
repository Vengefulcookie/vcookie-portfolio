import React, { useState } from 'react';
import ProjectCarousel from './ProjectCarousel';
import './GameCollection.css';

function GameCollection({ projects }) {
    const [showAllGames, setShowAllGames] = useState(false);
    const retroGames = projects.filter(project => 
        project.category === 'retro' || project.gameType === 'arcade'
    );
    
    if (retroGames.length === 0) return null;
    
    return (
        <div className="game-collection">
            <div className="game-collection-header">
                <div className="header-content">
                    <h2>
                        <span className="game-emoji">🎮</span> 
                        Retro Arcade
                        <span className="game-count">{retroGames.length} games</span>
                    </h2>
                    <p>Pixel-perfect nostalgia! Classic arcade action with a modern twist.</p>
                </div>
                <div className="game-stats">
                    <div className="stat">
                        <span className="stat-icon">🎯</span>
                        <span className="stat-text">High Scores</span>
                    </div>
                    <div className="stat">
                        <span className="stat-icon">⚡</span>
                        <span className="stat-text">Fast-paced</span>
                    </div>
                    <div className="stat">
                        <span className="stat-icon">🕹️</span>
                        <span className="stat-text">Retro Vibes</span>
                    </div>
                </div>
            </div>
            
            <ProjectCarousel projects={retroGames} />
            
            <div className="game-footer">
                <button 
                    className="game-archive-btn"
                    onClick={() => setShowAllGames(!showAllGames)}
                >
                    {showAllGames ? '📖 Show Less' : '🎮 View All Retro Games'}
                </button>
                <p className="game-note">
                    ⭐ More retro classics coming soon: Space Invaders, Snake, and Pac-Man style games!
                </p>
            </div>
            
            {showAllGames && (
                <div className="game-archive">
                    <h3>Retro Collection</h3>
                    <div className="game-list">
                        {retroGames.map(game => (
                            <a 
                                key={game.id} 
                                href={game.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="game-list-item"
                            >
                                <span className="game-icon">🎮</span>
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

export default GameCollection;