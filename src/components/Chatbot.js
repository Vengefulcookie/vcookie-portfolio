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
    return "Snethemba has 2+ years of experience including: Site Clerk at Chushisanani Mzansi (digital workflow management, invoice processing, technical reporting), Project Manager at Ijozilami Construction (full project lifecycle, team coordination, risk assessment), and freelance full-stack development. She's also completed an IT Systems Development FET at Dynamic DNA.";
  }
  
  if (q.includes('education') || q.includes('degree') || q.includes('study') || q.includes('learn')) {
    return "Snethemba holds a National Diploma in Civil Engineering from Durban University of Technology (2021), an N4 in Mechanical Engineering, and is completing an FET in Information Technology - Systems Development at Dynamic DNA (2026). Her engineering background gives her structured problem-solving skills that transfer directly to software development.";
  }
  
  if (q.includes('technical') || q.includes('technologies') || q.includes('stack')) {
    return "Technical skills: React, Node.js, PHP, .NET, Azure (5x certified), CI/CD (Azure DevOps, GitHub Actions, Netlify), AI prompt engineering (ChatGPT, Claude, Gemini, DeepSeek), SQL, REST APIs, and Git workflows.";
  }
 
  if (q.includes('soft skill') || q.includes('personality') || q.includes('work style') || q.includes('team')) {
    return "Snethemba brings: clear technical communication (explaining complex ideas simply), cross-disciplinary problem-solving (engineering + coding), leadership (managed project teams), time management (juggled multiple deadlines), critical thinking, and a collaborative mindset. She's genuinely curious and loves learning from teammates.";
  }
  
  if (q.includes('project') || q.includes('build') || q.includes('made') || q.includes('portfolio')) {
    return "Her featured projects include: 🌍 Country Explorer (React + API with compare mode), ✨ New Year's Resolutions tracker, 🍰 Dessert Recipe Generator, 🕐 World Clock, ⛅ Weather App, and 🤖 this AI Assistant you're chatting with now! All are live on Netlify and on her GitHub.";
  }
  
  if (q.includes('github') || q.includes('code') || q.includes('repository')) {
    return "You can find her on GitHub at github.com/Vengefulcookie — all her portfolio projects are there with source code. She regularly pushes updates and practices CI/CD.";
  }

  if (q.includes('linkedin') || q.includes('social')) {
  return "You can connect with Snethemba on LinkedIn at linkedin.com/in/snethemba-shangase-softw-mech-civil0101 — she's active there and loves connecting with other developers and recruiters!";
}
  
  if (q.includes('email') || q.includes('contact') || q.includes('reach')) {
  return "You can email Snethemba at snethemba.nosipho.shangase@gmail.com, connect on LinkedIn at linkedin.com/in/snethemba-shangase-softw-mech-civil0101, or find her on GitHub at github.com/Vengefulcookie. She responds within 24 hours!";
}
  
  if (q.includes('resume') || q.includes('cv')) {
    return "Snethemba's resume highlights her 5x Azure certifications, civil engineering background, project management experience, and full-stack development skills. A PDF is available in the footer of this portfolio!";
  }
  
  if (q.includes('relocate') || q.includes('visa') || q.includes('netherlands') || q.includes('move')) {
    return "Snethemba is absolutely committed to relocating to the Netherlands. She's actively working on her passport and is eligible for the Highly Skilled Migrant visa. She's ready to start the process as soon as a job offer is made.";
  }
  
  if (q.includes('hire') || q.includes('why should') || q.includes('strengths')) {
    return "Snethemba brings a rare combination: cloud infrastructure (5x Azure certs), full-stack development (React/Node), AI integration skills, and project management experience. She's curious, humble, and relentlessly resourceful. She doesn't just code — she solves problems and communicates clearly.";
  }
  
  if (q.includes('fun') || q.includes('hobby') || q.includes('outside')) {
    return "Outside of coding, Snethemba loves trying new dessert recipes (hence the Dessert Generator project!), stargazing, and learning about space. Her portfolio's galactic theme isn't random — she's genuinely fascinated by the cosmos. 🌌";
  }
  
  return "I can tell you about her Azure certifications (5x), React projects, DevOps experience, education, soft skills, relocation plans, or contact info. What would you like to know? Try asking: 'What Azure certs does she have?' or 'Tell me about her soft skills' or 'Is she willing to relocate?'";
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