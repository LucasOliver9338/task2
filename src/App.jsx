import { useEffect, useRef, useState } from 'react'
import { mockAiReply, SUGGESTIONS } from './mockAi'
import './App.css'

const FEATURES = [
  {
    title: 'Modern landing + dashboard',
    body: 'Clear hierarchy, primary CTAs, and a workspace panel that feels like a real product shell.',
  },
  {
    title: 'Mock AI assistant',
    body: 'Prompt → canned expert reply. Validates UX (loading, history, suggestions) without API keys.',
  },
  {
    title: 'Responsive by default',
    body: 'Mobile-first layout, touch-friendly controls, and a collapsible chat on small screens.',
  },
  {
    title: 'MVP-ready planning',
    body: 'README maps architecture choices, AI options, UI/UX, and a shipping checklist for Codementor sessions.',
  },
]

const PLAN_STEPS = [
  { step: '01', label: 'Scope', detail: 'One user goal, one AI action, one success metric.' },
  { step: '02', label: 'Architecture', detail: 'UI shell + API adapter + mock/real model switch.' },
  { step: '03', label: 'UI / UX', detail: 'Tokens, responsive breakpoints, AI feedback states.' },
  { step: '04', label: 'Integrate', detail: 'Proxy keys, typed contracts, retries, observability.' },
  { step: '05', label: 'Ship MVP', detail: 'Deploy, measure, iterate — not boil the ocean.' },
]

function App() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hi — I’m a mock AI mentor for this starter. Ask about architecture, UI/UX, performance, or AI integration. No API key needed.',
    },
  ])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [view, setView] = useState('home') // home | workspace
  const listRef = useRef(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, busy])

  function send(prompt) {
    const text = (prompt ?? input).trim()
    if (!text || busy) return
    setView('workspace')
    setInput('')
    setMessages((m) => [...m, { role: 'user', text }])
    setBusy(true)
    const delay = 450 + Math.random() * 550
    window.setTimeout(() => {
      setMessages((m) => [...m, { role: 'assistant', text: mockAiReply(text) }])
      setBusy(false)
    }, delay)
  }

  function onSubmit(e) {
    e.preventDefault()
    send()
  }

  return (
    <div className="app">
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <div>
            <strong>AI Web App Starter</strong>
            <span className="muted">Codementor demo · Vite + React</span>
          </div>
        </div>
        <nav className="nav" aria-label="Primary">
          <button
            type="button"
            className={view === 'home' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setView('home')}
          >
            Overview
          </button>
          <button
            type="button"
            className={view === 'workspace' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setView('workspace')}
          >
            AI Workspace
          </button>
          <a className="nav-link" href="#plan">
            MVP plan
          </a>
        </nav>
      </header>

      <main id="main">
        {view === 'home' ? (
          <>
            <section className="hero">
              <div className="hero-copy">
                <p className="eyebrow">Freelance-ready demo · modern UI · AI integration</p>
                <h1>Design and ship an AI-powered web app with confidence</h1>
                <p className="lede">
                  A polished starter that shows responsive UI/UX, a mock AI feature, and a clear tech-planning
                  path — the same approach Mihai uses on Codementor freelance and mentoring sessions.
                </p>
                <div className="hero-actions">
                  <button type="button" className="btn primary" onClick={() => setView('workspace')}>
                    Open AI workspace
                  </button>
                  <a className="btn ghost" href="#features">
                    See what’s included
                  </a>
                </div>
                <ul className="hero-meta" aria-label="Highlights">
                  <li>No paid API keys</li>
                  <li>Responsive layout</li>
                  <li>MVP checklist</li>
                </ul>
              </div>
              <aside className="hero-card" aria-label="Preview panel">
                <div className="card-chrome">
                  <span />
                  <span />
                  <span />
                  <em>mock · ai-assistant</em>
                </div>
                <div className="card-body">
                  <p className="card-prompt">You: How do we plan an AI MVP?</p>
                  <p className="card-reply">
                    Start lean: one AI action, React UI shell, server-side model adapter, ship before
                    auth/billing. Validate UX with mocks first — like this panel.
                  </p>
                  <button type="button" className="btn primary sm" onClick={() => send('How should we plan the MVP architecture?')}>
                    Try this prompt
                  </button>
                </div>
              </aside>
            </section>

            <section id="features" className="section">
              <h2>What this demo showcases</h2>
              <p className="section-lede">
                Built for a ~$100 Codementor freelance scope: web development, AI integration, responsive UI,
                performance awareness, and project planning.
              </p>
              <div className="feature-grid">
                {FEATURES.map((f) => (
                  <article key={f.title} className="feature">
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="plan" className="section plan">
              <h2>Tech planning → shippable MVP</h2>
              <ol className="plan-list">
                {PLAN_STEPS.map((s) => (
                  <li key={s.step}>
                    <span className="step-num">{s.step}</span>
                    <div>
                      <strong>{s.label}</strong>
                      <p>{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </>
        ) : (
          <section className="workspace" aria-label="AI workspace">
            <div className="workspace-head">
              <div>
                <h1>AI workspace</h1>
                <p className="muted">Mock mentor replies · simulate latency · no external API</p>
              </div>
              <button type="button" className="btn ghost sm" onClick={() => setView('home')}>
                ← Overview
              </button>
            </div>

            <div className="chat" role="log" aria-live="polite" aria-relevant="additions" ref={listRef}>
              {messages.map((m, i) => (
                <div key={i} className={`bubble ${m.role}`}>
                  <span className="who">{m.role === 'user' ? 'You' : 'Mock AI'}</span>
                  <p>{m.text}</p>
                </div>
              ))}
              {busy && (
                <div className="bubble assistant typing">
                  <span className="who">Mock AI</span>
                  <p>
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </p>
                </div>
              )}
            </div>

            <div className="suggestions" aria-label="Suggested prompts">
              {SUGGESTIONS.map((s) => (
                <button key={s} type="button" className="chip" disabled={busy} onClick={() => send(s)}>
                  {s}
                </button>
              ))}
            </div>

            <form className="composer" onSubmit={onSubmit}>
              <label className="sr-only" htmlFor="prompt">
                Your prompt
              </label>
              <input
                id="prompt"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about architecture, UI/UX, AI integration…"
                autoComplete="off"
                disabled={busy}
              />
              <button type="submit" className="btn primary" disabled={busy || !input.trim()}>
                Send
              </button>
            </form>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>
          Demo by <strong>Mihai Chindriș</strong> for Codementor ·{' '}
          <a href="https://www.codementor.io/@morosanu1st" rel="noopener noreferrer" target="_blank">
            Book a session
          </a>
        </p>
        <p className="muted">Topic-focused starter · Vite + React · mock AI only</p>
      </footer>
    </div>
  )
}

export default App
