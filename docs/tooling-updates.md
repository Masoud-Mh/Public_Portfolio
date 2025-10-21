# Tooling Updates Summary

Date: 2025-10-21

This document summarizes up-to-date guidance from official docs for core backend tooling used in this repository. It is referenced by `.github/copilot-instructions.md` and will be kept current as we evolve the stack.

---

## Express (5.x)

Sources: Express README & History

Key points

- Express 5.x is available (latest minor: 5.1.x). It supports async route handlers and improved `res.send` (e.g., `Uint8Array`) and options (e.g., `sendFile` ETag option).
- ESM is supported: you can `import express from 'express'` in Node >= 16 with ESM enabled.
- Breaking changes vs 4.x include stricter `res.status()` validation and changes to `res.redirect('back')` behavior; see History for details.

Recommendation

- Use `express@^5` for new apps targeting Node 20+.
- Prefer modular routing and a `/health` endpoint for readiness.

---

## TypeScript (>= 5.9)

Sources: TS compiler baselines and docs

Key points

- For Node.js ESM projects, prefer `"module": "NodeNext"` and `"moduleResolution": "NodeNext"`.
- `"moduleResolution": "bundler"` is intended for bundler-driven projects (Vite, Webpack) and is incompatible with `"module": "NodeNext"`.
- With NodeNext/Node16 resolution, ESM imports typically require explicit file extensions (e.g., `./server.js`). Build output should match `.js` extension expectations.

Recommendation

- Backend tsconfig:
  - `"module": "NodeNext"`, `"moduleResolution": "NodeNext"`
  - `"target": "ES2022"`, `"lib": ["ES2022"]`
  - `"rootDir": "src"`, `"outDir": "dist"`
  - `"strict": true`, `"noUncheckedIndexedAccess": true`, `"skipLibCheck": true`, `"esModuleInterop": true`, `"forceConsistentCasingInFileNames": true`
- Ensure imports in compiled JS have proper extensions or rely on TS/NodeNext mapping from `.ts` to `.js` in `dist`.

---

## tsx (esbuild-kit) for Dev Runtime

Sources: tsx docs (watch mode, Node CLI)

Key points

- On Node >= 20.6.1, prefer `node --import tsx` or use the `tsx` binary directly.
- `tsx watch` provides fast HMR-like reloads without manual bundling.
- Works well with ESM + TypeScript; avoids ts-node-dev maintenance/deprecation issues.

Recommendation

- Add dev scripts in backend:
  - `"dev": "tsx watch src/server.ts"`
  - `"start": "node dist/server.js"`
  - `"build": "tsc -p tsconfig.json"`
- Install `tsx` as a dev dependency.

---

## Practical next actions

- Switch backend `tsconfig.json` to NodeNext module/resolution.
- Use `tsx` for development instead of `ts-node-dev`.
- Keep Express at `^5` and write ESM-style imports.

These updates align the backend with current Node 22+ and TypeScript best practices, minimizing friction around ESM, module resolution, and live-reload during development.

---

## ESLint 9 (Flat Config) and `globals`

Sources: ESLint 9 docs, typescript-eslint flat config guide

Key points

- ESLint 9 encourages the flat config format (`eslint.config.*`). Environment globals are no longer inferred by legacy configs.
- The `globals` package provides canonical sets like `globals.node` and `globals.browser` that can be merged into `languageOptions.globals`.

Recommendation

- Keep a single root flat config and import from `globals` to define environments explicitly.
- Co-locate Prettier via `eslint-config-prettier` to disable conflicting stylistic rules. Run Prettier separately for formatting.
