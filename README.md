# AI Web App Design Demo

A small **Vite + React** Codementor demo for planning and shipping an **AI-powered web application** with modern UI/UX, responsive design, and a mock AI feature (no paid API keys).

Built by **Mihai Chindriș** to show how a focused freelance / mentoring engagement can cover architecture choices, AI integration options, UI/UX, performance, and an MVP shipping checklist.

## What this demo shows

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

The app includes:

- **Modern landing** — value proposition, feature grid, and a 5-step MVP plan
- **AI workspace** — chat-style UI with canned mentor replies + simulated latency
- **Responsive UI** — mobile-first layout, flexible nav, touch-friendly composer
- **No real LLM calls** — mock replies keyed off architecture / UI / performance / integration prompts

Use suggested chips like *“How should we plan the MVP architecture?”* or type your own question.

## How I’d help on this Codementor request

For a ~$100 freelance-style scope (or a live 1:1), we keep the bar practical: leave with a clear plan and a starter you can extend the same day.

### 1. Architecture & tech planning

We’ll map your idea to a lean stack:

| Decision | Typical lean choice |
|----------|---------------------|
| UI | React (Vite) or Next.js if you need SSR/routing soon |
| AI boundary | Server-side adapter / proxy — never expose API keys in the browser |
| Data | Start with local/mock state; add auth + persistence only when required |
| Deploy | Static or simple Node host; measure before optimizing |

You’ll get a short architecture sketch: screens, API contract, and what belongs in v1 vs later.

### 2. AI integration options

We’ll compare options against your budget and risk:

- **Mock-first UX** (this demo) — validate flows before spending tokens
- **Hosted APIs** (OpenAI, Anthropic, etc.) behind a thin backend
- **Open-source / local models** when privacy or cost dominates
- Shared concerns: retries, timeouts, streaming UX, prompt/response logging

### 3. Modern UI / UX & responsive design

We’ll tighten the product shell:

- Visual hierarchy, spacing system, and design tokens
- AI-specific states: loading, empty, error, regenerate / edit
- Mobile breakpoints and accessible form controls
- Performance hygiene: code-split heavy panels, keep first paint light

### 4. Shipping an MVP

Session output is a checklist, not a vague wishlist:

1. Scope one user goal + one AI-assisted action  
2. Wire UI shell + mock replies  
3. Swap mock → real adapter when ready  
4. Deploy, measure Core Web Vitals, iterate  

## Project layout

```
src/
  App.jsx      # Landing + AI workspace
  mockAi.js    # Canned responses (no API keys)
  App.css      # Responsive layout & chat UI
  index.css    # Design tokens / base styles
```

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |

## Book a session

If you want help designing an AI web app, choosing an integration path, polishing responsive UI/UX, or shipping a focused MVP, book **1:1 live help** on Codementor:

**[Book with Mihai on Codementor](https://www.codementor.io/@morosanu1st)**

Skills this demo maps to: **Web Development · AI Integration · Responsive UI · Performance · Project Planning**.

---

*Mentor voice · topic-focused demo · Vite + React · mock AI only.*
