import React, { useState } from 'react';
import ProjectCarousel from './ProjectCarousel';
import './GameCollection.css';

function GameCollection({ projects }) {
    const [showAllGames, setShowAllGames] = useState(false);
  
    const allGames = projects.filter(project => 
        project.category === 'retro' || project.category === 'gameLab'
    );
    
    if (allGames.length === 0) return null;

    const getGameBadge = (category, title) => {

    if (title.includes('Claw')) {
        return { icon: "🦀", label: "Arcade Sim", class: "badge-claw" };
    }
    if (category === 'retro') {
        return { icon: "🎮", label: "Retro Arcade", class: "badge-retro" };
    }
    if (title.includes('Sunken')) {
        return { icon: "⚔️", label: "Dark Fantasy", class: "badge-fantasy" };
    }
    return { icon: "🧪", label: "Game Lab", class: "badge-lab" };
};

    return (
        <div className="game-collection">
            <div className="game-collection-header">
                <div className="header-content">
                    <h2>
                        <span className="game-emoji">🧪</span> 
                        Game Lab
                        <span className="game-count">{allGames.length} games</span>
                    </h2>
                    <p>Experimenting with game design - from retro arcade to dark fantasy!</p>
                </div>
                <div className="game-stats">
                    <div className="stat">
                        <span className="stat-icon">🎮</span>
                        <span className="stat-text">Retro Arcade</span>
                    </div>
                    <div className="stat">
                        <span className="stat-icon">⚔️</span>
                        <span className="stat-text">Dark Fantasy</span>
                    </div>
                    <div className="stat">
                        <span className="stat-icon">🧪</span>
                        <span className="stat-text">Experimental</span>
                    </div>
                </div>
            </div>
            
            <ProjectCarousel projects={allGames} />
            
            <div className="game-footer">
                <button 
                    className="game-archive-btn"
                    onClick={() => setShowAllGames(!showAllGames)}
                >
                    {showAllGames ? '📖 Show Less' : '🎮 View All Games'}
                </button>
                <p className="game-note">
                    ⭐ More games coming soon! Each one is a new experiment in fun.
                </p>
            </div>
            
            {showAllGames && (
                <div className="game-archive">
                    <h3>Game Collection</h3>
                    <div className="game-list">
                        {allGames.map(game => {
                            const badge = getGameBadge(game.category, game.title);
                            return (
                                <a 
                                    key={game.id} 
                                    href={game.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="game-list-item"
                                >
                                    <span className="game-icon">{badge.icon}</span>
                                    <div className="game-info">
                                        <strong>{game.title}</strong>
                                        <span className={`game-type-badge ${badge.class}`}>{badge.label}</span>
                                        <span className="game-desc">{game.description.substring(0, 60)}...</span>
                                    </div>
                                    <span className="play-now">Play Now →</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default GameCollection;