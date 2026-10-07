# e-law-firm

A consumer-facing online law firm offering personal legal services:

- Small claims education
- Estate planning
- Contract evaluation
- Legal letters (demand letters, notices)
- Basic contracts
- More to come

## Vision

The product is built in tiers. Each tier builds on the one before it.

| Tier | Capability | Description | Status |
|---|---|---|---|
| 1 | Legal Q&A chatbot | Public-facing chatbot that answers legal questions. **Information only — not legal advice.** | Planned |
| 2 | Lawyer scheduling | The chatbot can book consultations with licensed lawyers. | Planned |
| 3 | Document generation | Generates legal documents in two modes: *information* (self-serve template) and *reviewed* (checked by a lawyer before delivery). | Planned |
| 4 | Matter tracker | Clients track the status of their matters, documents and appointments. | Planned |

Status values: **Planned** → **In progress** → **Supported**. A tier is marked
**Supported** only once it is working end-to-end against the live system.

## Important

Content produced by the chatbot is general legal information, not legal advice,
and does not create an attorney-client relationship. Legal advice is provided
only by licensed lawyers through a scheduled consultation or reviewed document.

## Getting started

Requires Node 20+, [uv](https://docs.astral.sh/uv/) and Docker.

```bash
npm run setup     # install frontend, backend and root deps; create .env files
npm run db:up     # start Postgres
npm run dev       # backend on :8000, frontend on :3000
```

Open http://localhost:3000. The status line should read
"Backend: ok · Database: ok".

Stack: Next.js frontend, FastAPI + Postgres backend. See [AGENTS.md](AGENTS.md)
for details.
