import React, { useState } from 'react';
import ProjectCarousel from './ProjectCarousel';
import './GameCollection.css';

function GameCollection({ projects }) {
    const [showAllGames, setShowAllGames] = useState(false);
    const games = projects.filter(project => project.category === 'game' || project.category === 'retro');
    
    if (games.length === 0) return null;
    
    return (
        <div className="game-collection">
            <div className="game-collection-header">
                <div className="header-content">
                    <h2>
                        <span className="game-emoji">🎮</span> 
                        Retro Game Arcade
                        <span className="game-count">{games.length} games</span>
                    </h2>
                    <p>Playable browser games - click, race, and have fun! More retro classics coming soon...</p>
                </div>
                <div className="game-stats">
                    <div className="stat">
                        <span className="stat-icon">🎯</span>
                        <span className="stat-text">High Scores</span>
                    </div>
                    <div className="stat">
                        <span className="stat-icon">⚡</span>
                        <span className="stat-text">Fast-paced Action</span>
                    </div>
                    <div className="stat">
                        <span className="stat-icon">🕹️</span>
                        <span className="stat-text">Retro Vibes</span>
                    </div>
                </div>
            </div>
            
            <ProjectCarousel projects={games} />
            
            <div className="game-footer">
                <button 
                    className="game-archive-btn"
                    onClick={() => setShowAllGames(!showAllGames)}
                >
                    {showAllGames ? '📖 Show Less' : '🎮 View All Retro Games'}
                </button>
                <p className="game-note">
                    ⭐ New games added regularly! Check back for Space Invaders, Snake, and more classics.
                </p>
            </div>
            
            {showAllGames && (
                <div className="game-archive">
                    <h3>Game Collection</h3>
                    <div className="game-list">
                        {games.map(game => (
                            <a 
                                key={game.id} 
                                href={game.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="game-list-item"
                            >
                                <span className="game-icon">{game.title.split(' ')[0]}</span>
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