# Technologies

- Frontend: React (planned), Vite (planned), TypeScript 5
- Backend: Express 5 (TypeScript, ESM)
- Tooling: pnpm workspaces, TypeScript 5.9, tsx (dev runtime), ESLint (flat config planned), Prettier
- Infra: Docker (Node 22), GitHub Actions CI (planned)

## Rationale

- TypeScript for maintainability and safety.
- pnpm for fast, space-efficient monorepo installs and deterministic workspaces.
- tsx for fast ESM-friendly dev without bundling.
- Node 22 in CI/Docker to align with local dev and avoid engine warnings.
- Express 5 for a minimalist, mature HTTP stack.
- Repetition: use `docs/REBUILD.md` to rebuild and internalize the stack.
