# AI Guide (Living Document)

This file tracks progress, decisions, and next steps. Keep updates concise and date-stamped.

## ✅ Completed

- None yet (initial baseline created 2025-10-21).

## 🚧 In Progress

- None.

## 🎯 Goals

- Learn by building a production-grade fullstack app (React + Express + TypeScript).
- Practice CI/CD, Docker, Cloudflare, and AWS deployments.
- Maintain exemplary code quality, documentation, and security in a public repo.

## 💡 Decisions

- 2025-10-21: Adopted “Guidance-First Collaboration Mode”
  - Guide-only by default: no edits/creates/runs unless explicitly requested.
  - Small, step-by-step instructions with goals, zsh commands, and verification.
  - Remember where we left off and confirm resume vs pivot + doc updates.
  - Ask for explicit approval before any repo-altering actions.
- 2025-10-21: Planned initial architecture (subject to confirmation)
  - Monorepo with `backend/`, `frontend/`, `infra/`, `docs/`, `.github/`.
  - Prefer TypeScript, ESLint + Prettier, and environment-based configuration (no secrets in code).

## 📌 Next Steps

- Step 1 (planning): Confirm monorepo scaffolding and toolchain choices.
- Step 2 (setup): Initialize repo layout and root configs (EditorConfig, Prettier, ESLint) — pending explicit approval.
- Step 3 (backend scaffold): Create Express + TypeScript skeleton with `/healthz` — only after approval.
- Step 4 (docs): Update `docs/architecture.md` and `docs/devops.md` to reflect scaffolding.
