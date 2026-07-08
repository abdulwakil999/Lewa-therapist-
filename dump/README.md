# LEWACODER

**Your AI coding workspace** — a single-file, deployment-ready alternative to Claude / Claude Code that runs entirely in the browser. No backend, no build step: just `index.html`.

## Features

- **Account flow** — splash screen with the LEWACODER icon → create account / sign in → paste your API key & pick your LLM → themed 5-dot loader → coding space opens.
- **Multi-LLM** — choose from:
  - Anthropic: **Fable 5**, Opus 4.8, Sonnet 5, Haiku 4.5
  - OpenAI: GPT-4o, GPT-4o mini, o3-mini
  - Google: Gemini 2.0 Flash, 1.5 Pro, 1.5 Flash
  - xAI: **Grok 3**, Grok 3 mini, Grok 2 Vision
  - OpenRouter (free): **Nemotron 3 Super**, DeepSeek R1, Llama 3.3 70B, Gemma 3 27B, Mistral 7B
- **Voice** — send prompts by voice note (🎤 record → auto-transcribe → auto-send) or start a hands-free **voice call** (📞 speak, it thinks, replies aloud, and listens again).
- **Files & images** — attach images (sent to vision-capable models) and any file type; text/code files are inlined into the prompt automatically.
- **Tokens & credits** — 📊 live tracker of input/output tokens, per-model breakdown, and estimated spend, saved per account.
- **Memory** — every session under an account is remembered; past conversations are auto-recalled into new chats, plus pinned notes that are always in context.
- **Mobile-ready** — responsive layout, slide-out sidebar drawer, safe-area insets, touch-sized controls.
- **Extras** — web search toggle, read-aloud (TTS), markdown + code blocks with copy buttons, per-session model switching.

## Deploy

The app is a single static file — deploy anywhere:

### GitHub Pages
1. Put `index.html` at the root of this repository (already done).
2. Repo **Settings → Pages → Source: Deploy from a branch → main / (root)** → Save.
3. Your site goes live at `https://<username>.github.io/<repo>/`.

### Netlify / Vercel
Drag-and-drop the folder, or point the project at this repo — no build command, output directory is the root.

### Local
Just open `index.html` in Chrome or Edge (voice features need the Web Speech API, best supported there).

## Privacy

Accounts, chats, memory, usage stats and API keys are stored **only in the browser's localStorage**. API requests go directly from the browser to the chosen provider (Anthropic, OpenAI, Google, xAI, OpenRouter) — there is no middle server.

> Cost figures shown in the usage tracker are estimates from published per-token prices; always confirm exact billing on your provider's dashboard.
