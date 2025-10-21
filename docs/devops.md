# DevOps & CI/CD

## CI (planned)

- GitHub Actions workflow to: checkout, setup Node 22, install with pnpm, type-check, build.
- Backend smoke test: start compiled backend and `curl http://localhost:3001/health`.
- Cache pnpm store and TypeScript build where applicable.

## CD (planned)

- Target: AWS EC2/ECS (to be defined).
- Build Docker images for `frontend` and `backend` on `main` and push to registry.
- Deploy job updates the running service (rolling update/blue-green).

## Cloudflare & TLS (planned)

- Use Cloudflare for DNS/caching.
- Use Let’s Encrypt for TLS certificates (or terminate at Cloudflare initially).

## Environments

- `.env` files for local dev; `VITE_API_BASE` for frontend, `PORT` for backend.
- GitHub Secrets for CI/CD (no secrets in code).

## Local development (current)

- Backend
	- Dev: `pnpm --filter @public-portfolio/backend dev` (tsx watch)
	- Build: `pnpm --filter @public-portfolio/backend build`
	- Start: `pnpm --filter @public-portfolio/backend start`
	- Health: `GET http://localhost:3001/health` → `{ "status": "ok" }`

- Frontend
	- To be scaffolded with Vite React TS; will use `VITE_API_BASE=http://localhost:3001`.

## Local with Docker Compose (future)

- After Dockerfiles exist, `docker compose up --build` will run both services.
- Frontend: http://localhost:5173 (default Vite)
- Backend: http://localhost:3001
