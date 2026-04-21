import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi! I know everything about Snethemba\'s skills, experience, and certifications. Ask me anything!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const getMockReply = (question) => {
    const q = question.toLowerCase();
    
    if (q.includes('azure') || q.includes('cert') || q.includes('certification')) {
      return "Snethemba has 5 Microsoft Azure certifications: DevOps Engineer Expert, Azure Developer Associate, Azure Administrator Associate, Azure AI Fundamentals, and Azure Fundamentals.";
    }
    
    if (q.includes('react') || q.includes('frontend') || q.includes('javascript')) {
      return "She builds React apps with hooks, context, and API integration. Her portfolio includes a country dashboard, weather app, recipe generator, world clock, and New Year's resolutions tracker.";
    }
    
    if (q.includes('devops') || q.includes('ci/cd') || q.includes('pipeline')) {
      return "She has implemented CI/CD pipelines using GitHub Actions and Netlify, with experience in Azure DevOps, YAML pipelines, and infrastructure as code.";
    }
    
    if (q.includes('experience') || q.includes('job') || q.includes('work')) {
      return "Snethemba has worked as a Site Clerk and Project Manager in construction, plus full-stack development on freelance projects. She's currently seeking Cloud/DevOps or AI Full Stack roles.";
    }
    
    if (q.includes('project') || q.includes('build') || q.includes('made')) {
      return "Her featured projects include: Country Explorer (React + API), New Year's Resolutions tracker, Dessert Recipe Generator, World Clock, and Weather App. All are live on Netlify!";
    }
    
    if (q.includes('github') || q.includes('code')) {
      return "You can find her on GitHub at github.com/Vengefulcookie — all her portfolio projects are there with source code.";
    }
    
    if (q.includes('email') || q.includes('contact')) {
      return "You can email Snethemba at snethemba.nosipho.shangase@gmail.com";
    }
    
    return "I can tell you about her Azure certifications (5x), React projects, DevOps experience, or contact info. What would you like to know?";
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const reply = getMockReply(input);
      setMessages(prev => [...prev, { role: 'bot', content: reply }]);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.role}`}>
            {msg.role === 'bot' ? '🤖 ' : '👤 '}{msg.content}
          </div>
        ))}
        {loading && <div className="chat-message bot">🤖 Thinking...</div>}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask about Snethemba's skills, certs, or experience..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;