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
  - Dev: `pnpm --filter @public-portfolio/frontend dev` (Vite dev server @ 5173)
  - Proxy (optional): set `server.proxy` in `frontend/vite.config.ts` to route `/api` → `http://localhost:3001`
  - Env: access client vars via `import.meta.env.VITE_*`; load others in `vite.config.ts` via `loadEnv`

### Vite Dev Proxy recipe (example)

In `frontend/vite.config.ts` (documentation example, not applied yet):

```ts
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      port: env.VITE_PORT ? Number(env.VITE_PORT) : 5173,
      proxy: {
        '/api': {
          target: env.API_BASE_URL || 'http://localhost:3001',
          changeOrigin: true,
        },
      },
    },
  };
});
```

Client code can call `/api/*` directly during dev; Vite forwards to the backend.

## Local with Docker Compose (future)

- After Dockerfiles exist, `docker compose up --build` will run both services.
- Frontend: http://localhost:5173 (default Vite)
- Backend: http://localhost:3001

## Quality gates (current)

- Lint: `pnpm run lint` → PASS
- Format (write): `pnpm run format` → formats repo with Prettier
- Format (check): `pnpm run format:check` → PASS
- Types: `pnpm run type-check` → PASS

Notes

- ESLint uses a flat config at repo root and depends on the `globals` package to define environment globals cleanly.
- Prettier is configured at the root; `.prettierignore` excludes common generated content (`node_modules`, `dist`, `.pnpm-store`).
