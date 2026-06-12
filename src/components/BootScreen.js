import React, { useEffect, useState } from 'react';
import './BootScreen.css';

function BootScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('Initializing systems...');

  useEffect(() => {
    const steps = [
      { progress: 20, message: 'Loading React engine...', delay: 300 },
      { progress: 40, message: 'Mounting components...', delay: 600 },
      { progress: 60, message: 'Loading game assets...', delay: 900 },
      { progress: 80, message: 'Establishing connection...', delay: 1200 },
      { progress: 100, message: 'Ready for launch!', delay: 1500 }
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setProgress(step.progress);
        setCurrentMessage(step.message);
      }, step.delay);
    });

    setTimeout(() => {
      onComplete();
    }, 2500);
  }, [onComplete]);

  return (
    <div className="boot-screen">
      <div className="boot-content">
        <div className="boot-logo">🌌 GALACTIC OS</div>
        <div className="boot-progress-container">
          <div className="boot-progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="boot-message">{currentMessage}</div>
        <div className="boot-cursor">_</div>
      </div>
    </div>
  );
}

export default BootScreen;