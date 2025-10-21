# Architecture

## Monorepo Layout

- `frontend/` — Vite + React + TypeScript SPA
- `backend/` — Express + TypeScript API
  - ESM-first (Node 22+), TS `module`/`moduleResolution` = `NodeNext`
  - Health endpoint: `GET /health` (200 OK JSON)
  - Default dev port: 3001
- `infra/` — Dockerfiles and compose; deployment scripts (future)
- `docs/` — Project documentation

## High-Level Design

- SPA frontend consumes REST endpoints from backend.
- In dev, frontend calls backend via CORS (configurable `VITE_API_BASE`, backend defaults to `http://localhost:3001`).
- In prod, serve frontend behind CDN/Cloudflare; backend exposed via HTTPS, optionally behind a reverse proxy.

## Modules and Boundaries

Backend (initial)

- App (Express): HTTP server, JSON body parsing, health route.
- Future: routers (feature modules), middleware (logging, CORS, security), config layer.

Frontend

- SPA consuming REST endpoints; dev server on http://localhost:5173 via Vite.
- Uses `@vitejs/plugin-react`; React 19 JSX (no `import React` required).
- Browser globals and React hooks rules enforced via root ESLint flat config override.

## Future Extensions

- Use `docs/REBUILD.md` to practice re-creating the structure and strengthen understanding.
- Add Python/.NET services as new packages.

## Conventions

- ESM across the repo (Node `type: "module"`).
- Strict TypeScript settings; prefer explicit types and narrowings.
- Environment configuration via `.env` (never commit secrets).

## Code quality tooling

- ESLint 9 flat config at the monorepo root, with environment globals provided by the `globals` package.
- Prettier 3 for consistent formatting; enforced via `pnpm run format:check`.
