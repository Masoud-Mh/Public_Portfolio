# Rebuild Guide: Recreate This Monorepo Step-by-Step

This guide lets you delete the code and rebuild it from scratch while keeping the docs. You’ll proceed one step at a time and confirm with “I confirm” between steps. Each step includes acceptance criteria.

Prereqs:

- Node.js 22.x (preferred) or 20.19+
- npm 9+
- macOS terminal (zsh)

Conventions:

- Root folder name: `masoud-portfolio`
- Workspaces: `frontend/` and `backend/`
- Follow `.github/copilot-instructions.md` for documentation standards.

---

## Step 1 — Initialize repo and workspaces

Actions:

- Create root folder `masoud-portfolio`.
- Initialize npm and workspaces for `frontend` and `backend`.
- Add Prettier and `.editorconfig`.

Acceptance criteria:

- `npm install` works at the root.
- Scripts exist: `dev:fe`, `dev:be`, `dev`, `build`, `lint`, `format`.

---

## Step 2 — Frontend (Vite + React + TS)

Actions:

- Create `frontend/` with Vite + React + TS scaffold.
- Add ESLint (flat config) with type-aware parser options.
- Ensure `VITE_API_BASE` usage in `src/App.tsx` and fetch `/api/v1/hello`.

Acceptance criteria:

- `npm run dev` starts Vite on 5173.
- App renders and fetch code exists (even if backend not yet running).
- `npm --workspace frontend run lint` passes.

---

## Step 3 — Backend (Express + TS)

Actions:

- Create `backend/` with Express + TS.
- Add middlewares: helmet, cors, compression, morgan.
- Add routes: `GET /healthz`, `GET /api/v1/hello`.
- Env vars: `PORT` (5174 default), `CORS_ORIGIN`.

Acceptance criteria:

- `npm run dev:be` runs API on 5174.
- `curl http://localhost:5174/healthz` returns `{ status: 'ok', uptime: ... }`.

---

## Step 4 — Husky + lint-staged

Actions:

- Install Husky and lint-staged at root.
- Add pre-commit hook to run `lint-staged` (Prettier format staged files).

Acceptance criteria:

- Committing formats staged files automatically.
- `npm run lint` passes in both packages.

---

## Step 5 — Docker and Compose

Actions:

- Add `infra/docker/Dockerfile.backend` (Node 22-alpine) with multi-stage build.
- Add `infra/docker/Dockerfile.frontend` (build with Node 22-alpine, serve via nginx).
- Add `docker-compose.yml` exposing FE 8080 and BE 5174.

Acceptance criteria:

- `docker-compose up --build` starts both services.
- http://localhost:8080 shows frontend; it fetches backend message when backend is up.

---

## Step 6 — CI pipeline (GitHub Actions)

Actions:

- Add `.github/workflows/ci.yml` to run on PR and pushes to main.
- Steps: Setup Node 22, install (npm ci), lint, build, Docker build (FE/BE).

Acceptance criteria:

- CI passes install, lint, build, and Docker build on PRs.

---

## Step 7 — Documentation

Actions:

- Add/update:
  - `docs/AI_GUIDE.md` (completed, in-progress, next steps)
  - `docs/architecture.md` (layout, boundaries, env)
  - `docs/devops.md` (CI details, docker compose, future deploy)
  - `docs/technologies.md` (stack and rationale)
- Update root and package READMEs.

Acceptance criteria:

- Docs reflect actual code and steps.
- PR template checklist is respected.

---

## Optional Next Steps

- Tests: supertest for backend `/healthz` and `/api/v1/hello`; Vitest + RTL for frontend basics.
- Add rate limiting and input validation (zod) to backend routes.
- Add Vite proxy for local dev instead of CORS.
- Add deploy job to push images and update service on AWS.

---

## Quick Commands (reference)

- Install all: `npm install`
- Dev FE: `npm run dev`
- Dev BE: `npm run dev:be`
- Lint all: `npm run lint`
- Build all: `npm run build`
- Docker compose: `docker-compose up --build`

---

Use this alongside the Agent Prompt below for an AI-guided rebuild.
