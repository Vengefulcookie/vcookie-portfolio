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
      label: "Notes & Trackers",
      className: "badge-notes",
      color: "#07f8f8"
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