# Technologies

- Frontend: React 19, Vite 7, TypeScript 5
- Backend: Express (TypeScript)
- Tooling: ESLint (flat config), Prettier, npm workspaces, Husky + lint-staged
- Infra: Docker (Node 22, Nginx), GitHub Actions CI

## Rationale

- TypeScript for maintainability and safety.
- Vite for fast dev/build.
- Node 22 in CI/Docker to satisfy Vite engines and reduce engine warnings.
- Express for simplicity and ecosystem.
- Repetition: use `docs/REBUILD.md` to rebuild and internalize the stack.
