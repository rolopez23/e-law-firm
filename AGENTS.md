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

_TBD._ Record the chosen stack, commands (install, dev, test, lint) and
directory layout here once decided.

---

## Workflow

Follow the user-level workflow in `~/.claude/CLAUDE.md`
(`/problem-spec` → `/plan` → TDD per step → `/verify` → `/clean-code` →
`/review-comprehensive`). Feature docs live in `docs/<feature>/`.
