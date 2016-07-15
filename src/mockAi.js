/** Canned mock responses — no API keys required. */
const RESPONSES = [
  {
    match: /architect|stack|tech|plan|mvp/i,
    reply:
      'For an AI web MVP I’d start lean: React (or Next.js) for UI, a thin API layer, and one model provider behind an adapter so you can swap OpenAI / Anthropic / local later. Ship a single high-value flow first — e.g. prompt → structured result — before chat history, auth, or billing.',
  },
  {
    match: /ui|ux|design|responsive|layout/i,
    reply:
      'Prioritize a clear visual hierarchy, generous spacing, and mobile-first breakpoints. Use a small design token set (color, type, radius, shadow). For AI UIs: show loading / streaming states, allow edit & regenerate, and never leave the user staring at a blank panel.',
  },
  {
    match: /performance|fast|speed|optim/i,
    reply:
      'Keep the first paint light: code-split routes, lazy-load the chat panel, and cache model responses where safe. Stream tokens when you wire a real API; for mocks, simulate latency so the UX feels honest. Measure Core Web Vitals before polishing animations.',
  },
  {
    match: /integrat|api|openai|llm|model/i,
    reply:
      'Wrap the model behind a server-side proxy (never expose keys in the browser). Define a typed request/response contract, add retries + timeouts, and log prompt/response pairs for debugging. Mock mode (like this demo) lets you validate UX before spending on tokens.',
  },
  {
    match: /help|mentor|session|codementor|hire/i,
    reply:
      'In a Codementor session we can map your idea → architecture → UI wireframe → AI integration options → a shippable MVP checklist. Bring constraints (budget, timeline, stack preference) and we’ll leave with concrete next steps you can implement the same day.',
  },
]

const FALLBACK =
  'I’d treat that as a product question: clarify the user goal, pick one AI-assisted action that delivers value, then design the UI around that loop. Ask me about architecture, UI/UX, performance, or AI integration for a more specific plan.'

export function mockAiReply(prompt) {
  const text = (prompt || '').trim()
  if (!text) return 'Type a question about architecture, UI/UX, performance, or AI integration.'
  const hit = RESPONSES.find((r) => r.match.test(text))
  return hit ? hit.reply : FALLBACK
}

export const SUGGESTIONS = [
  'How should we plan the MVP architecture?',
  'Tips for responsive AI UI/UX?',
  'How do we integrate an LLM safely?',
  'What matters for performance?',
]
