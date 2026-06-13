# 🌌 Snethemba Shangase - Developer Portfolio

> A galactic-themed developer portfolio showcasing 5 playable games, 6 web applications, an AI-powered chatbot, and my journey as a Junior DevOps Engineer.

[![Live Portfolio](https://img.shields.io/badge/View-Live_Portfolio-brightgreen)](https://vcookie-portfolio.netlify.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/Vengefulcookie/portfolio)
[![Netlify Status](https://img.shields.io/badge/Deployed-Netlify-blueviolet)](https://app.netlify.com/sites/vcookie-portfolio)
[![Azure Certified](https://img.shields.io/badge/Azure-5x_Certified-0078d4)](https://learn.microsoft.com/en-us/users/snethembashangase/)

## What This Portfolio Is
This is my personal corner of the internet — a place where I show what I can build. You'll find playable browser games, useful web applications, and an AI assistant that knows everything about my background.

**What you can do here:**
- **Play 5 games** — Retro Racer, The Sunken Coin, Claw Machine, Ember Run, and Breakout
- **Use 6 web apps** — Country Explorer, Dessert Generator, Weather App, World Clock, Website Hygiene Report
- **Chat with my AI Assistant** — Ask about my skills, certifications, or any project
- **Explore my GitHub** — All code is open source
- **View my resume** — Available for download in the footer

##  How I Built This

### Frontend
- **React** — For the component-based UI
- **CSS3** — For the galactic gradient effects and animations
- **Canvas API** — For all the browser-based games

### Games (All Vanilla JavaScript + Canvas)
| Game | Tech | What You Do |
|------|------|-------------|
| Retro Racer | Canvas, Game Loop | Dodge traffic, survive faster speeds |
| The Sunken Coin | Canvas, Physics | Flip a cursed coin, manage risk |
| Claw Machine | Canvas, Collision | Move claw, grab stickers |
| Ember Run | Canvas, Lighting | Collect lanterns in darkness |
| Breakout | Canvas, Angles | Break bricks, classic arcade |

### Web Applications
| App | Tech | What It Does |
|-----|------|--------------|
| Country Explorer | React, REST API | Search and compare countries |
| Weather App | React, OpenWeather | Real-time weather anywhere |
| Website Hygiene Report | JS, Security APIs | Grade websites A+ through F |
| World Clock | JS, Moment.js | Track time across cities |
| Dessert Generator | JS, Recipe API | Random sweet recipes |
| AI Assistant | React, RAG, LLM | Chatbot trained on my CV |

### DevOps & Deployment
- **Netlify** — Hosting and auto-deploy from GitHub
- **CI/CD** — Every push to main triggers a new deployment
- **Environment Variables** — For API keys (never committed to GitHub)
- **Responsive Design** — Works on desktop and mobile

## Design Choices

**Why the space theme?** I've always been fascinated by the cosmos. The orbs, rings, and gradient backgrounds aren't random — they're meant to feel like floating through a nebula. The glow effects and smooth animations add to the "galactic" feel without distracting from the content.

**Colors:**
- Deep space blue: `#0a0a2a` to `#050510`
- Nebula purple: `#6a4fa5`
- Star light blue: `#7ab3c8`
- Text glow: subtle shadows to mimic starlight

**Typography:** Inter (clean, modern, readable even on dark backgrounds)

## Live Demo

[Click here to open the live portfolio](https://vcookie-portfolio.netlify.app)
No installation needed — it runs right in your browser.

**Try these things while you're there:**
1. Scroll through the Game Lab carousel — games auto-rotate every 5 seconds
2. Ask the AI Assistant "What Azure certs do you have?"
3. Click on any project card to see it live
4. Check the CI/CD badge — that's real, GitHub + Netlify auto-deploys every change

## Running Locally

Want to run this portfolio on your own computer? Here's how:

```bash
# Clone the repository
git clone https://github.com/Vengefulcookie/portfolio.git

# Navigate into the folder
cd portfolio

# Install dependencies
npm install

# Start the development server
npm start
The portfolio will open at http://localhost:3000

To create a production build:

bash
npm run build
```

The built files will be in the build/ folder, ready to deploy to Netlify or any static host.

## What I Learned Building This
-- React State Management — The carousels were tricky. Each one needs to track its active index, manage auto-rotation, and handle user interactions (clicking dots or arrows should pause auto-rotation temporarily). I learned about useEffect cleanup functions to prevent memory leaks.

-- Canvas Games — Every game in this portfolio started as a separate project. Bringing them together taught me about iframe embeds and how to isolate game logic from the main React app. The collision detection systems all work differently, but that's okay — each game has its own feel.

-- AI Integration — The chatbot doesn't actually connect to an LLM API. It's a simulated RAG system that responds to keywords. This kept the portfolio self-contained and deployment simple. But it taught me how real RAG works — chunking, retrieval, and prompt engineering.

-- Responsive Design — The portfolio looks good on a 4K monitor and on a phone. Media queries handle the layout shifts, and the carousels degrade gracefully on small screens.

-- CI/CD — Every push to GitHub triggers a Netlify build. Seeing the "building..." status turn into a live URL never gets old. I learned about environment variables for production builds and how to debug build failures (usually missing imports or unused variables).

## Known Issues & Future Plans
Known issues:
-- The custom cursor (if added in the future) sometimes lags on slower machines
-- Some API calls (Weather, Countries) have rate limits

## Features I want to add:
-- More games — planning a Godot game that exports to WebAssembly
-- Sound toggle with space ambient music
-- Dark mode toggle (light mode for daytime browsing)
-- Blog section for writing about what I'm learning
-- Electron desktop app version

## Contact
I'm actively looking for DevOps and Software Development roles, especially opportunities that would let me relocate so I can see the world.
-- GitHub: github.com/Vengefulcookie
-- LinkedIn: linkedin.com/in/snethemba-shangase-softw-mech-civil0101
-- Email: snethemba.nosipho.shangase@gmail.com

## License
This project is open source. Feel free to look around, learn from the code, or use it as inspiration for your own portfolio.

##Acknowledgments
-- React team — For making frontend development delightful
-- OpenWeather, REST Countries, and Recipe APIs — For free data that made my apps possible
-- Netlify — For generous free hosting
-- My coffee maker — For keeping me going during late-night coding sessions

Built with React, ☕ coffee, and a determination to build things that work
⭐ If you like this portfolio, consider starring the repository! ⭐
