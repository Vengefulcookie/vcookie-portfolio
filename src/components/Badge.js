import React from 'react';
import './Badge.css';

function Badge({ category, size = 'medium' }) {
  const badgeConfig = {
    game: {
      icon: "🎮",
      label: "Playable Game",
      className: "badge-game",
      color: "#ff6b6b"
    },
    app: {
      icon: "🚀",
      label: "Web App",
      className: "badge-app",
      color: "#4a6fa5"
    },
    ai: {
      icon: "🤖",
      label: "AI Powered",
      className: "badge-ai",
      color: "#9b59b6"
    },
    tool: {
      icon: "🛠️",
      label: "Developer Tool",
      className: "badge-tool",
      color: "#f39c12"
    },
    retro: {
      icon: "👾",
      label: "Retro Game",
      className: "badge-retro",
      color: "#e74c3c"
    },
    notes: {
      icon: "📚",
      label: "Notes App",
      className: "badge-notes",
      color: "#07f8f8"
    },
    gameLab: { 
      icon: "🧪", 
      label: "Game Lab", 
      className: "badge-lab", 
      color: "#c39bd3" 
    },
    experimental: { 
      icon: "🔬", 
      label: "Experimental", 
      className: "badge-experimental", 
      color: "#e67e22" 
    },
    hackathon: {
    icon: "🏆",
    label: "Hackathon Project",
    className: "badge-hackathon",
    color: "#f39c12"
  }
};

  const config = badgeConfig[category] || badgeConfig.app;

  return (
    <span className={`badge-component ${config.className} badge-${size}`}>
      <span className="badge-icon">{config.icon}</span>
      <span className="badge-text">{config.label}</span>
    </span>
  );
}

export default Badge;