# Architecture

## Monorepo Layout

- `frontend/` — Vite + React + TypeScript SPA
- `backend/` — Express + TypeScript API
- `infra/` — Dockerfiles and compose; deployment scripts (future)
- `docs/` — Project documentation

## High-Level Design

- SPA frontend consumes REST endpoints from backend.
- In dev, frontend calls backend via CORS (configurable `VITE_API_BASE`).
- In prod, serve frontend behind CDN/Cloudflare; backend exposed via HTTPS, optionally behind a reverse proxy.

## Modules and Boundaries

## Future Extensions

- Use `docs/REBUILD.md` to practice re-creating the structure and strengthen understanding.
- Add Python/.NET services as new packages.
