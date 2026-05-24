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
      return "Snethemba has 5 Microsoft Azure certifications: DevOps Engineer Expert (2025), Azure Developer Associate (2025), Azure Administrator Associate (2025), Azure AI Fundamentals (2025), and Azure Fundamentals (2025). She's actively working toward Azure Solutions Architect next!";
    }
    
    if (q.includes('experience') || q.includes('work') || q.includes('job')) {
      return "Snethemba has 2+ years of experience including: Software Development Intern at Saints Media (React/Node.js, CI/CD, auth, security testing), Site Clerk at Chushisanani Mzansi (digital workflow management), and Project Manager at Ijozilami Construction. She's also completed an IT Systems Development FET at Dynamic DNA.";
    }
    
    if (q.includes('education') || q.includes('degree') || q.includes('study') || q.includes('learn')) {
      return "Snethemba holds a National Diploma in Civil Engineering from Durban University of Technology (2021), an N4 in Mechanical Engineering, and is completing an FET in Information Technology - Systems Development at Dynamic DNA (2026). Her engineering background gives her structured problem-solving skills that transfer directly to software development.";
    }
    
    if (q.includes('technical') || q.includes('technologies') || q.includes('stack')) {
      return "Technical skills: React, Node.js, PHP, .NET, Azure (5x certified), CI/CD (GitHub + Netlify auto-deploy, Azure DevOps), AI prompt engineering (ChatGPT, Claude, Gemini, DeepSeek), SQL, REST APIs, Web Speech API, and Git workflows.";
    }
   
    if (q.includes('soft skill') || q.includes('personality') || q.includes('work style') || q.includes('team')) {
      return "Snethemba brings: clear technical communication (explaining complex ideas simply), cross-disciplinary problem-solving (engineering + coding), leadership (managed project teams), time management (juggled multiple deadlines), critical thinking, and a collaborative mindset. She's genuinely curious and loves learning from teammates.";
    }
    
    if (q.includes('github') || q.includes('code') || q.includes('repository')) {
      return "You can find her on GitHub at github.com/Vengefulcookie — all her portfolio projects are there with source code, including the Hygiene Report, Retro Racer, Sunken Coin, and Country Explorer. She regularly pushes updates and practices CI/CD.";
    }
  
    if (q.includes('linkedin') || q.includes('social')) {
      return "You can connect with Snethemba on LinkedIn at linkedin.com/in/snethemba-shangase-softw-mech-civil0101 — she's active there and loves connecting with other developers and recruiters!";
    }
    
    if (q.includes('email') || q.includes('contact') || q.includes('reach')) {
      return "You can email Snethemba at snethemba.nosipho.shangase@gmail.com, connect on LinkedIn, or find her on GitHub. She responds within 24 hours!";
    }
    
    if (q.includes('resume') || q.includes('cv')) {
      return "Snethemba's resume highlights her 5x Azure certifications, civil engineering background, internship experience, and full-stack development skills. You can request a PDF via email or view her LinkedIn for the full history.";
    }
    
    if (q.includes('relocate') || q.includes('visa') || q.includes('move') || q.includes('netherlands')) {
      return "Snethemba is willing to relocate internationally for the right opportunity. She's actively working on her passport and is open to visa sponsorship. She's ready to start the process as soon as a job offer is made.";
    }
    
    if (q.includes('hire') || q.includes('why should') || q.includes('strengths')) {
      return "Snethemba brings a rare combination: cloud infrastructure (5x Azure certs), full-stack development (React/Node), AI integration skills, project management experience, and a proven ability to ship complete projects (6+ live demos). She's curious, humble, and relentlessly resourceful. She doesn't just code — she solves problems and communicates clearly.";
    }
    
    if (q.includes('fun') || q.includes('hobby') || q.includes('outside')) {
      return "Outside of coding, Snethemba loves trying new dessert recipes (hence the Dessert Generator project!), stargazing, and learning about space. Her portfolio's galactic theme isn't random — she's genuinely fascinated by the cosmos. 🌌";
    }
    
    if (q.includes('hygiene') || q.includes('report') || q.includes('website checker') || q.includes('security check')) {
      return "The Website Hygiene Report is one of her most technical projects. It checks any website for: HTTPS security, HSTS headers, X-Frame-Options, CSP (Content Security Policy), image alt text accessibility, and load time performance. It then calculates a letter grade (A+ through F) with a funny mascot (Clean Cat, Sloppy Seal, etc.). It uses a CORS proxy to fetch headers — real backend engineering in a frontend demo! Live at vcookie-hygiene-report.netlify.app";
    }
    
    if (q.includes('game') || q.includes('retro racer') || q.includes('sunken coin')) {
      return "Snethemba has multiple playable games in her portfolio: 🏎️ Retro Racer — an arcade racing game with collision detection, lane-based movement, and increasing difficulty. ⚔️ The Sunken Coin — a dark fantasy risk game where you flip a cursed coin to survive 15 flips. Heads give life, Tails take it away, and streaks trigger legendary events. She's also building Bounce, Ping Pong, and Chaos Tetris to expand her game section!";
    }
    
    if (q.includes('cicd') || q.includes('ci/cd') || q.includes('auto-deploy') || q.includes('deployment')) {
      return "Snethemba practices CI/CD on all her projects. Every push to GitHub triggers an automatic rebuild and redeploy on Netlify — that's why you see a 'CI/CD: GitHub + Netlify auto-deploy' badge on her portfolio. She also has Azure DevOps certification and understands YAML pipelines, though her live demos currently use Netlify's built-in CI/CD.";
    }
    
    if (q.includes('claw') || q.includes('machine') || q.includes('sticker')) {
      return "She's currently building a Claw Machine demo where you can win digital stickers! It features canvas physics, collision detection, credit system, and prize collection. Coming soon to her portfolio — follow her GitHub for updates!";
    }
    
    if (q.includes('project') || q.includes('build') || q.includes('made') || q.includes('portfolio')) {
      return "Her featured projects include: 🔍 Website Hygiene Report (security + performance checker), 🌍 Country Explorer (React + API with compare mode), 🏎️ Retro Racer (arcade racing game), ⚔️ The Sunken Coin (dark fantasy risk game), 🍰 Dessert Recipe Generator, 🕐 World Clock, and 🤖 this AI Assistant. She's also building Bounce, Ping Pong, Chaos Tetris, and a Claw Machine. All are live on Netlify and on her GitHub. Most use CI/CD auto-deploy!";
    }
    
    return "I can tell you about her Azure certifications (5x), React projects (including Hygiene Report and games), DevOps/CI/CD practice, education, soft skills, relocation plans, or contact info. What would you like to know? Try asking: 'What is the Hygiene Report?' or 'Tell me about her games' or 'Does she use CI/CD?'";
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