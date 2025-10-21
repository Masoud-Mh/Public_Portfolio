# DevOps & CI/CD

## CI

- GitHub Actions workflow to install, lint, build for all workspaces.
- Node 22 used to satisfy Vite engines; caching via actions/setup-node.

## CD

- Target: AWS EC2/ECS (to be defined).
- Docker images for frontend and backend build on main.
- Next: add deploy job to push images and update service.

## Cloudflare & TLS

- Use Cloudflare for DNS/caching.
- Use Let’s Encrypt for TLS certificates (or terminate at Cloudflare initially).

## Environments

- `.env` files for local dev; `VITE_API_BASE` for frontend, `PORT`/`CORS_ORIGIN` for backend.
- GitHub Secrets for CI/CD.

## Local with Docker Compose

- `docker-compose up --build`
- Frontend: http://localhost:8080
- Backend: http://localhost:5174
- Rebuild practice: after deletion, follow `docs/REBUILD.md` to recompose the setup.
