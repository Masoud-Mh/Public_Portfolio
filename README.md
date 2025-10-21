# Public Portfolio Monorepo

This repository is a learning-first, production-grade monorepo showcasing a fullstack setup with TypeScript, modern tooling, and clear documentation.

## Structure

- `backend/` — Express 5 + TypeScript (ESM / NodeNext), `/health` endpoint, dev with `tsx`
- `frontend/` — Vite + React + TypeScript (planned)
- `infra/` — Docker, deployment scripts (planned)
- `docs/` — Architecture, DevOps, AI guide, technologies
- `.github/` — Workflows and Copilot guidelines

## Quick start (backend)

```bash
# Install
pnpm -w install

# Dev (watch)
pnpm --filter @public-portfolio/backend dev

# Build & start
pnpm --filter @public-portfolio/backend build
pnpm --filter @public-portfolio/backend start

# Health check (should return {"status":"ok"})
curl http://localhost:3001/health
```

## Why these choices

- Node 22.2: Aligns with current LTS+ features and ESM maturity.
- pnpm workspaces: Fast, disk-efficient, great monorepo ergonomics.
- TypeScript 5.9 (NodeNext): Seamless ESM alignment with Node.
- Express 5 + tsx dev: Minimal friction, fast reloads, mature ecosystem.

See `docs/` for deeper rationale and ongoing updates (`docs/tooling-updates.md`).
