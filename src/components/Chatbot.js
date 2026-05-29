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
      return "Snethemba has 5 Microsoft Azure certifications:\n• DevOps Engineer Expert (2025)\n• Azure Developer Associate (2025)\n• Azure Administrator Associate (2025)\n• Azure AI Fundamentals (2025)\n• Azure Fundamentals (2025)\nShe's actively working toward Azure Solutions Architect next!";
    }
    
    if (q.includes('frontend') || q.includes('front-end')) {
      return "Frontend skills: React, JavaScript, HTML5, CSS3, Canvas API. She builds interactive web apps and browser-based games with smooth UI/UX.";
    }
    
    if (q.includes('game') || q.includes('game dev') || q.includes('game development')) {
      return "Game Development skills: Game loops, collision detection, delta time, physics simulation, canvas rendering. She's built 5 playable browser games (Retro Racer, Breakout, Claw Machine, Ember Run, The Sunken Coin). Each one tests different mechanics — from racing to risk management to precision timing.";
    }
    
    if (q.includes('backend') || q.includes('node') || q.includes('express')) {
      return "Backend skills: Node.js, Express, REST APIs, WebSockets. She's built full-stack apps with user authentication and real-time features.";
    }
    
    if (q.includes('devops') || q.includes('cloud') || q.includes('ci/cd')) {
      return "Cloud & DevOps: 5x Microsoft Azure certified, Netlify deployments, CI/CD with GitHub + Netlify auto-deploy. She automates everything she can!";
    }
    
    if (q.includes('database') || q.includes('mysql') || q.includes('sql')) {
      return "Database skills: MySQL, SQLite, phpMyAdmin. She's built full-stack apps with user authentication and encrypted data storage.";
    }
    
    if (q.includes('security') || q.includes('secure')) {
      return "Security skills: CORS proxies, bcrypt password hashing, session management, XSS prevention. Her Website Hygiene Report tool checks SSL, security headers, and privacy policies.";
    }
    
    if (q.includes('ai') || q.includes('prompt') || q.includes('llm') || q.includes('rag')) {
      return "AI skills: Prompt Engineering, RAG (Retrieval-Augmented Generation), Azure AI, LLM integration. She built this AI Assistant chatbot trained on her CV!";
    }
    
    if (q.includes('tools') || q.includes('git') || q.includes('vscode')) {
      return "Tools: Git, GitHub, VS Code, Netlify, cPanel, Postman. She uses GitHub + Netlify for CI/CD auto-deploy on every push.";
    }
    
    if (q.includes('retro racer') || (q.includes('racing') && q.includes('game'))) {
      return "🏎️ **Retro Racer** — A high-speed arcade racing game where you dodge traffic through multiple lanes. The longer you survive, the faster it gets. Features real-time collision detection, increasing difficulty curves, and a local high-score system. Can you beat your best run?";
    }
    
    if (q.includes('sunken coin') || (q.includes('cursed') && q.includes('coin'))) {
      return "⚔️ **The Sunken Coin** — A dark fantasy game of risk and reward. You've found a cursed coin that whispers promises of luck. Flip it 15 times to survive. Heads gives +1 life, Tails takes -1 life. Land 3 in a row and the stakes double — double reward or double curse. Every flip tests your nerve. Will you walk away or push your luck?";
    }
    
    if (q.includes('claw') || q.includes('claw machine')) {
      return "🦀 **Claw Machine** — An interactive arcade simulator where skill meets chance. Move the claw left and right, time your drop perfectly, and grab prizes. Win 6 unique stickers to complete your collection. Each play costs a credit, and random animal facts celebrate your wins. It's like the arcade, but you don't have to leave your house!";
    }
    
    if (q.includes('breakout')) {
      return "💥 **Breakout** — The classic arcade block-breaker rebuilt from scratch. Bounce the ball, destroy every brick, and don't let it fall past your paddle. Features pixel-perfect collision detection, progressive difficulty, and that satisfying 'pop' when bricks shatter. Simple to learn, hard to master — just like the original.";
    }
    
    if (q.includes('ember') || q.includes('ember run')) {
      return "✨ **Ember Run** — An atmospheric runner set in darkness. You're alone in the shadows, racing to collect 10 glowing lanterns. Each lantern you grab lights your path, but danger surrounds you. You have 3 lives. Can you reach the light before it fades completely? A game about perseverance and hope.";
    }
    
    if (q.includes('country explorer') || (q.includes('country') && q.includes('api'))) {
      return "🌍 **Country Explorer** — A React-powered world atlas. Search any country and instantly see its flag, capital, population, currency, and languages. The coolest feature? Compare two countries side-by-side to see how they stack up. Perfect for geography nerds and curious minds.";
    }
    
    if (q.includes('hygiene') || q.includes('website hygiene') || q.includes('security checker')) {
      return "🔍 **Website Hygiene Report** — A security and performance scanner that tells you if a website is healthy or infected... with bad practices! It checks HTTPS, security headers (HSTS, CSP, X-Frame), image alt text, and load time. Then it gives a letter grade from A+ down to F. Think of it as a health checkup for the internet.";
    }
    
    if (q.includes('weather') || q.includes('weather app')) {
      return "⛅ **Weather App** — A clean, real-time weather dashboard. Enter any city and get temperature, humidity, wind speed, and conditions. Uses geolocation to find your local weather instantly. No ads, no clutter — just the forecast you need.";
    }
    
    if (q.includes('world clock')) {
      return "🕐 **World Clock** — Never miss a meeting across time zones. Track current time in New York, Tokyo, Johannesburg, Paris, London, and beyond. Built with Moment.js for accurate timezone handling. Perfect for remote workers and global teams.";
    }
    
    if (q.includes('dessert') || q.includes('recipe')) {
      return "🍰 **Dessert Recipe Generator** — When you're craving something sweet but don't know what. Click generate and get a random dessert recipe, or search for your favorite. From chocolate cake to crème brûlée — cosmic inspiration for your next baking adventure.";
    }
    
    if (q.includes('ai assistant') || (q.includes('chatbot') && !q.includes('update'))) {
      return "🤖 **AI Assistant** — That's me! I'm a RAG-powered chatbot trained directly on Snethemba's CV, skills, and projects. Ask me anything about her experience, certifications, or code. I know everything she knows — and I don't sleep. Go ahead, test me.";
    }
    
    if (q.includes('notes') || q.includes('protected notes') || q.includes('full-stack')) {
      return "🔐 **Protected Notes App** — A full-stack, authentication-powered notes app. Sign up, log in, and create private notes that only you can see. Each user has their own encrypted vault. Tech stack: Node.js, Express, MySQL, bcrypt for password hashing, and session management. Watch the demo video on YouTube to see it in action!";
    }
    
    if (q.includes('experience') || q.includes('work') || q.includes('job')) {
      return "Snethemba has 2+ years of experience including: Site Clerk at Chushisanani Mzansi (digital workflow management, invoice processing, technical reporting), Project Manager at Ijozilami Construction (full project lifecycle, team coordination, risk assessment), and freelance full-stack development. She's also completed an IT Systems Development FET at Dynamic DNA.";
    }
    
    if (q.includes('education') || q.includes('degree') || q.includes('study')) {
      return "Snethemba holds a National Diploma in Civil Engineering from Durban University of Technology (2021), an N4 in Mechanical Engineering, and is completing an FET in Information Technology - Systems Development at Dynamic DNA (2026). Her engineering background gives her structured problem-solving skills that transfer directly to software development.";
    }
    
    if (q.includes('soft skill') || q.includes('personality') || q.includes('team')) {
      return "Snethemba brings: clear technical communication (explaining complex ideas simply), cross-disciplinary problem-solving (engineering + coding), leadership (managed project teams), time management, critical thinking, and a collaborative mindset. She's genuinely curious and loves learning from teammates.";
    }
    
    if (q.includes('relocate') || q.includes('visa') || q.includes('netherlands')) {
      return "Snethemba is absolutely committed to relocating to the Netherlands. She's actively working on her passport and is eligible for the Highly Skilled Migrant visa. She's ready to start the process as soon as a job offer is made.";
    }
    
    if (q.includes('hire') || q.includes('why should') || q.includes('strengths')) {
      return "Snethemba brings a rare combination: 5x Azure certifications, full-stack development (React/Node), AI integration skills, game development (5 published games), and project management experience. She's curious, resourceful, and builds real things you can play and use.";
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
    
    if (q.includes('how many') && (q.includes('project') || q.includes('game'))) {
      return "Snethemba has built 12 total projects: 5 games in the Game Lab (Retro Racer, The Sunken Coin, Claw Machine, Breakout, Ember Run), 6 web applications (Country Explorer, Website Hygiene Report, Weather App, World Clock, Dessert Generator, AI Assistant), and 1 full-stack demo (Protected Notes App with video). All are live or have demos available!";
    }
    
    return "I can tell you about her 5x Azure certifications, technical skills (frontend, backend, game dev, DevOps), all 12 projects (5 games + 6 web apps + 1 full-stack demo), education, soft skills, relocation plans, or contact info. Try asking: 'What Azure certs does she have?', 'Tell me about her games', 'What web apps did she build?', or 'Is she willing to relocate?'";
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