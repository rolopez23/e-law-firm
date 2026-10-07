# AGENTS.md

Context for coding agents working in this repo. Human-facing overview lives in
[Readme.md](Readme.md).

---

## Product

A consumer-facing online law firm offering personal legal services: small
claims education, estate planning, contract evaluation, legal letters, basic
contracts, and more.

## Vision and status

Build tiers in order. Update the Status column here **and** in Readme.md when a
tier changes state. Mark a tier **Supported** only after `/verify` passes
against the live system.

| Tier | Capability | Status |
|---|---|---|
| 1 | Public legal Q&A chatbot — information only | Planned |
| 2 | Chatbot schedules meetings with lawyers | Planned |
| 3 | Document generation — *information* (self-serve) and *reviewed* (lawyer-approved) | Planned |
| 4 | Client matter tracker | Planned |

Status values: Planned → In progress → Supported.

---

## Domain guardrails

These are product requirements, not style preferences.

- **Information, not advice.** Tier 1 output is general legal information. Never
  phrase chatbot output as advice for the user's specific situation. Every
  chatbot surface shows a not-legal-advice disclaimer.
- **No attorney-client relationship** is created by the chatbot or by
  *information*-mode documents. Only licensed lawyers give advice, via a
  scheduled consultation or a *reviewed* document.
- **Reviewed means reviewed.** A document marked *reviewed* must record which
  lawyer approved it and when. Never mark a document reviewed in code paths a
  lawyer did not act on.
- **Client data is sensitive.** Treat conversations, documents and matter
  details as confidential PII: no logging of message bodies or document
  contents, least-privilege access, encryption at rest.
- **Jurisdiction matters.** Legal rules vary by state. Capture the user's
  jurisdiction and do not present rules as universal.

---

## Stack

| Part | Tech | Dir | URL |
|---|---|---|---|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind v4, Vitest | `frontend/` | http://localhost:3000 |
| Backend | FastAPI, SQLAlchemy 2 (async), asyncpg, Alembic, pytest; uv, Python 3.12 | `backend/` | http://localhost:8000 (routes under `/api`) |
| Database | Postgres 16 via `docker-compose.yml` (`app` + `app_test` DBs) | `docker/` | localhost:5432 |

The frontend ↔ backend contract (ports, env vars, `/api/health` shape) lives in
[docs/boot/contract.md](docs/boot/contract.md). Change it there first.

Commands (repo root):

| Task | Command |
|---|---|
| First-time setup | `npm run setup` |
| Start Postgres | `npm run db:up` |
| Run migrations | `npm run db:migrate` |
| Run both apps | `npm run dev` |
| All tests | `npm test` (backend integration tests skip if Postgres is down) |
| Smoke check | `npm run smoke` (with `dev` running) |

- Run Python only via `uv run …` inside `backend/`; do not add `.python-version`.
- Backend: routers → services; no DB access in routers. Tests override `get_db`.
- Frontend: App Router; backend base URL from `NEXT_PUBLIC_API_URL`.

---

## AI sessions

`ai-sessions/` is gitignored and holds every artifact an AI session produces.

- `ai-sessions/sessions.md` lists sessions under **In progress** and **Completed**: folder,
  name/purpose, dates, and the `claude --resume <session-id>` command.
- `ai-sessions/YYYY-MM-DD-<slug>/` is one folder per session for plans, specs, notes,
  verify/review reports, friction logs and a `summary.md`. All Markdown.

Rules for agents:

1. At session start, add a row under **In progress** and create the session folder. Get
   the session ID from the scratchpad path or `/status`.
2. Write session artifacts to that folder, not to `docs/`, scratchpad or `/tmp`.
3. At session end, update `summary.md` (goal, done, time sinks, open items) and move the
   row to **Completed**.
4. Exception: files the code or other contributors depend on stay committed in `docs/`
   (e.g. [docs/boot/contract.md](docs/boot/contract.md)).

---

## Workflow

Follow the user-level workflow in `~/.claude/CLAUDE.md`
(`/problem-spec` → `/plan` → TDD per step → `/verify` → `/clean-code` →
`/review-comprehensive`). Feature docs live in `docs/<feature>/`.
