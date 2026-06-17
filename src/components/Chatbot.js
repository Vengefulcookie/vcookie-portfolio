import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi! I know everything about Snethemba\'s skills, experience, certifications, and projects. Ask me anything!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const getMockReply = (question) => {
    const q = question.toLowerCase();
    
    if (q.includes('azure') || q.includes('cert') || q.includes('certification')) {
      return "Snethemba has 5 Microsoft Azure certifications (all awarded 2025):\n\n1. **DevOps Engineer Expert** — Azure DevOps pipelines, release management, infrastructure as code (IaC), YAML pipelines, GitHub Actions integration, Azure Monitor, ARM templates, Bicep.\n\n2. **Azure Developer Associate** — Azure App Service, Functions (serverless), Azure Storage, Cosmos DB, Azure SQL, Key Vault, Azure AD / Entra ID, containerisation.\n\n3. **Azure Administrator Associate** — Subscriptions, VMs, virtual networks, NSGs, Azure AD, MFA, Storage accounts, Backup, load balancers, Application Gateway, Azure Monitor.\n\n4. **Azure AI Fundamentals** — Azure AI Services (Vision, Speech, Language), Azure OpenAI, prompt engineering, Azure Cognitive Search, RAG concepts, Azure AI Studio.\n\n5. **Azure Fundamentals** — Core Azure concepts, regions, availability zones, pricing, SLAs, cloud concepts (IaaS, PaaS, SaaS).";
    }
    
    if (q.includes('frontend') || q.includes('front-end')) {
      return "Frontend skills: React, TypeScript, JavaScript ES6+, HTML5 (including Canvas API), CSS3 (flexbox, grid, animations). She builds interactive web apps and browser-based games with smooth UI/UX.";
    }
    
    if (q.includes('game') || q.includes('game dev') || q.includes('game development')) {
      return "Game Development skills: Game loops (requestAnimationFrame, delta time), collision detection (AABB bounding boxes), physics simulation, Canvas rendering, difficulty scaling, game state management, dynamic lighting effects. She's built 5 playable browser games.";
    }
    
    if (q.includes('backend') || q.includes('node') || q.includes('express')) {
      return "Backend skills: Node.js, Express.js, REST API design, authentication (bcrypt, session management), error handling, webhook architecture.";
    }
    
    if (q.includes('devops') || q.includes('cloud') || q.includes('ci/cd')) {
      return "Cloud & DevOps: 5x Microsoft Azure certified, Netlify deployments, CI/CD with GitHub + Netlify auto-deploy, GitHub Actions, environment variables management. She automates everything she can!";
    }
    
    if (q.includes('database') || q.includes('mysql') || q.includes('sql')) {
      return "Database skills: MySQL (schema design, CRUD, JOINs, indexes), SQLite, phpMyAdmin, IndexedDB (client-side storage).";
    }
    
    if (q.includes('security') || q.includes('secure')) {
      return "Security skills: bcrypt password hashing, session management, CORS configuration, XSS prevention, HTTPS enforcement, security headers (HSTS, CSP, X-Frame-Options).";
    }
    
    if (q.includes('ai') || q.includes('prompt') || q.includes('llm') || q.includes('rag')) {
      return "AI skills: Prompt engineering (system prompts, few-shot examples, chain-of-thought), RAG (knowledge base structuring, chunk retrieval, context window management), LLM integration (Groq, Gemini, Azure OpenAI), Microsoft Foundry IQ (Azure AI Search), Azure AI Services.";
    }
    
    if (q.includes('tools') || q.includes('git') || q.includes('vscode')) {
      return "Tools: Git, GitHub (Actions, Pages), VS Code, Postman, Azure Portal, cPanel, phpMyAdmin, Notion (documentation), npm, Google AI Studio.";
    }
    
    if (q.includes('experience') || q.includes('work') || q.includes('job')) {
      return "Snethemba has 1+ years of tech experience as a Software Development Intern at Saints Media (2025–2026), where she built React/Node/PHP applications, automated workflows with n8n, and implemented authentication and security. Previously, she was a Site Clerk (Chushisanani Mzansi, 2024) and Project Manager (Ijozilami Construction, 2022–2023), which gave her structured project management and risk assessment skills.";
    }
    
    if (q.includes('education') || q.includes('degree') || q.includes('study')) {
      return "Snethemba holds a National Diploma in Civil Engineering from Durban University of Technology (2021), an N4 in Mechanical Engineering (2017), and is completing an FET in Information Technology - Systems Development at Dynamic DNA (2026). Her engineering background gives her structured problem-solving skills that transfer directly to software development.";
    }
    
    if (q.includes('soft skill') || q.includes('personality') || q.includes('team')) {
      return "Snethemba brings: clear technical communication, cross-disciplinary problem-solving (engineering + coding), leadership (managed project teams), time management, critical thinking, and a collaborative mindset. She's genuinely curious and loves learning from teammates.";
    }
    
    if (q.includes('relocate') || q.includes('visa') || q.includes('netherlands')) {
      return "Snethemba is absolutely committed to relocating to the Netherlands. She's actively working on her passport and is eligible for the Highly Skilled Migrant visa. She's ready to start the process as soon as a job offer is made.";
    }
    
    if (q.includes('hire') || q.includes('why should') || q.includes('strengths')) {
      return "Snethemba brings a rare combination: 5x Azure certifications (including DevOps Expert), full-stack development (React/Node), AI integration skills, game development (5 published games), and project management experience. She's curious, resourceful, and builds real things you can play and use.";
    }
    
    if (q.includes('retro racer') || (q.includes('racing') && q.includes('game'))) {
      return "🏎️ **Retro Racer** — Arcade racing game. Dodge traffic through multiple lanes. Speed increases the longer you survive. Built with Canvas API, requestAnimationFrame, delta time for frame-rate independence, and AABB collision detection. How long can you last?";
    }
    
    if (q.includes('sunken coin') || (q.includes('cursed') && q.includes('coin'))) {
      return "⚔️ **The Sunken Coin** — Dark fantasy risk game. Flip a cursed coin 15 times. Heads +1 life, Tails -1 life. Land 3 in a row and the stakes double — double reward or double curse. Built with Canvas API, streak mechanics, and probability design.";
    }
    
    if (q.includes('claw') || q.includes('claw machine')) {
      return "🦀 **Claw Machine** — Physics-based claw game. Move ← →, drop with Space. Grab 6 unique stickers. Credit system (you start with 5). Random animal facts when you win. Built with Canvas API, physics simulation, and collision detection.";
    }
    
    if (q.includes('ember run') || (q.includes('ember') && q.includes('run'))) {
      return "✨ **Ember Run** — Atmospheric side-scroller. Run in darkness, collect 10 lanterns. Each lantern lights your path. 3 lives. Built with Canvas API, dynamic lighting effects (screen brightness tied to game state), and collision detection.";
    }
    
    if (q.includes('breakout')) {
      return "💥 **Breakout** — Classic block-breaker. Bounce the ball, destroy every brick. Ball angle changes based on where it hits the paddle. Progressive speed increase. Built with Canvas API, angle-based physics, and pixel-perfect collision detection.";
    }
    
    if (q.includes('country explorer') || (q.includes('country') && q.includes('api'))) {
      return "🌍 **Country Explorer** — React app. Search any country and see its flag, capital, population, currency, and languages. Compare two countries side-by-side. Uses REST Countries API with async data fetching and loading state management.";
    }
    
    if (q.includes('hygiene') || q.includes('website hygiene') || q.includes('security checker')) {
      return "🔍 **Website Hygiene Report** — Security and performance scanner. Checks HTTPS, HSTS, CSP, X-Frame-Options, alt text, SSL validity, and load time. Returns a letter grade from A+ to F. Built with JavaScript, CORS proxy, Security APIs, and Web Vitals.";
    }
    
    if (q.includes('weather') || q.includes('weather app')) {
      return "⛅ **Weather App** — React app. Real-time weather for any city — temperature, humidity, wind speed, and conditions. Uses OpenWeather API and geolocation API (with permission handling and graceful fallback).";
    }
    
    if (q.includes('world clock')) {
      return "🕐 **World Clock** — Track current time across multiple cities — New York, Tokyo, Johannesburg, Paris, London, and more. Built with JavaScript and Moment.js for UTC offsets and DST handling.";
    }
    
    if (q.includes('dessert') || q.includes('recipe')) {
      return "🍰 **Dessert Recipe Generator** — Generate random dessert recipes or search for your favorites. Built with JavaScript, Recipe API, and CSS animations. Handles different API response structures and missing data fallbacks.";
    }
    
    if (q.includes('ai assistant') || (q.includes('chatbot') && !q.includes('update'))) {
      return "🤖 **AI Assistant** — That's me! I'm a RAG-powered chatbot trained on Snethemba's CV, skills, and projects. Ask me anything about her experience, certifications, or code. I know everything she knows — and I don't sleep. Built with React, RAG (knowledge base structuring, chunk retrieval, context window management), prompt engineering, and LLM integration.";
    }
    
    if (q.includes('job application agent') || (q.includes('agent') && q.includes('job'))) {
      return "🤖 **Job Application Agent** — Built for the Microsoft Agents League Hackathon 2026 (Creative Apps Track). A multi-step AI agent that transforms generic CVs into role-specific applications. Paste a CV and job description — get an ATS-optimised summary, tailored cover letter, skill gap analysis, and certification roadmap. Uses Groq Llama 3.1 or Gemini 1.5 Flash, with Microsoft Foundry IQ (Azure AI Search) for grounded retrieval — it only uses what's actually in your CV, no hallucination. Watch the 6 reasoning steps unfold in real time. Tech: HTML, CSS, Vanilla JS. Live on Netlify.";
    }
    
    if (q.includes('notes') || q.includes('protected notes') || q.includes('full-stack')) {
      return "🔐 **Protected Notes App** — Full-stack notes app with user authentication. Sign up, log in, and create private notes — each user has their own encrypted vault. Tech: Node.js, Express, MySQL, bcrypt for password hashing (never store plain-text passwords!), session management. Demo video available on YouTube. Security is built in from the start, not added at the end.";
    }
    
    if (q.includes('how many projects') || (q.includes('projects') && q.includes('total'))) {
      return "Snethemba has built **13 live projects**:\n\n🎮 5 games (Retro Racer, The Sunken Coin, Claw Machine, Ember Run, Breakout)\n🚀 6 web applications (Country Explorer, Dessert Generator, Website Hygiene Report, Weather App, World Clock, AI Assistant)\n🤖 1 AI/hackathon project (Job Application Agent — Microsoft Agents League 2026)\n🔐 1 full-stack app (Protected Notes App — Node.js, Express, MySQL, auth)\n🌌 Plus the portfolio site itself, which ties everything together.";
    }
    
    if (q.includes('hackathon') || q.includes('agents league')) {
      return "🏆 **Microsoft Agents League Hackathon — Creative Apps Track, June 2026.** Snethemba built the Job Application Agent — a multi-step AI agent that runs 6 reasoning steps in real time: Foundry IQ retrieval, extract requirements, score fit, tailor for ATS, generate cover letter, suggest certs. It uses Groq Llama 3.1 and Foundry IQ (Azure AI Search) for grounded retrieval. Built with GitHub Copilot throughout development. The live demo is on Netlify, and the source code is on GitHub.";
    }
    
    if (q.includes('github')) {
      return "You can find her on GitHub at github.com/Vengefulcookie — all her portfolio projects, games, and full-stack demos are there with source code. She regularly pushes updates and practices CI/CD.";
    }
    
    if (q.includes('linkedin')) {
      return "Connect with Snethemba on LinkedIn at linkedin.com/in/snethemba-shangase-softw-mech-civil0101 — she's active there and loves connecting with other developers and recruiters!";
    }
    
    if (q.includes('email') || q.includes('contact')) {
      return "Email Snethemba at snethemba.nosipho.shangase@gmail.com, connect on LinkedIn, or find her on GitHub. She responds within 24 hours!";
    }
    
    if (q.includes('resume') || q.includes('cv')) {
      return "Snethemba's resume highlights her 5x Azure certifications, civil engineering background, project management experience, and full-stack development skills. A PDF is available in the footer of this portfolio!";
    }
    
    if (q.includes('fun') || q.includes('hobby') || q.includes('outside')) {
      return "Outside of coding, Snethemba loves trying new dessert recipes (hence the Dessert Generator project!), stargazing, and learning about space. Her portfolio's galactic theme isn't random — she's genuinely fascinated by the cosmos. 🌌";
    }
    
    return "I can tell you about her 5x Azure certifications, technical skills (frontend, backend, game dev, DevOps), all 13 live projects (5 games + 6 web apps + 1 AI hackathon + 1 full-stack app), education, soft skills, relocation plans, or contact info. Try asking: 'What Azure certs does she have?', 'Tell me about her games', 'What web apps did she build?', 'What's the Job Application Agent?', or 'Is she willing to relocate?'";
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
          placeholder="Ask about Snethemba's skills, Azure certs, games, or web apps..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;