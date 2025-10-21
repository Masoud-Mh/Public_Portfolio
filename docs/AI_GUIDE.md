# AI Guide (Living Document)

This file tracks progress, decisions, and next steps. Keep updates concise and date-stamped.

## ✅ Completed

- 2025-10-21: Monorepo folders scaffolded (`backend/`, `frontend/`, `infra/`, `.github/workflows/`).
- 2025-10-21: Workspace initialized with pnpm + Corepack; Node pinned via `.nvmrc` (22.2); `pnpm-workspace.yaml` created.
- 2025-10-21: Backend scaffolded (Express 5 + TypeScript, ESM/NodeNext) with `/health` route, dev/build/start scripts using `tsx` and `tsc`.
- 2025-10-21: Re-ran backend dependency installs to surface warnings; observed deprecations in transitive packages (`glob@7`, `inflight@1`, `rimraf@2`). Using `tsx` for dev (prefer over `ts-node-dev`, which is deprecated/unmaintained). No action needed now beyond avoiding `ts-node-dev`.
- 2025-10-21: Shared tooling stabilized — installed ESLint "globals" to fix flat-config import and ran Prettier write. Quality gates now green: Lint PASS, Format PASS, Type-check PASS.
- 2025-10-21: Frontend integrated (Vite + React + TS) with root ESLint flat config override for React/browser. Added `@public-portfolio/frontend` name and type-check script. Ran Prettier write for new files. Gates: Lint PASS, Format PASS, Type-check PASS.

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
- 2025-10-21: Tooling choices (kept current via Context7)
  - Package manager: pnpm (workspaces) via Corepack; lock `packageManager` in root.
  - Runtime: Node 22.2 (via `.nvmrc`).
  - Backend TS config: `module` and `moduleResolution` set to `NodeNext` for ESM on Node 20+.
  - Dev runner: `tsx` (fast ESM-friendly dev) over `ts-node-dev`.
  - Express: use `^5` and ESM imports.

## 📌 Next Steps

- Shared tooling: Add root ESLint/Prettier/EditorConfig and pre-commit hooks.
- Frontend scaffold: Vite + React + TS with matching NodeNext strategy.
- CI: GitHub Actions for install, type-check, build, and a backend smoke test hitting `/health`.
