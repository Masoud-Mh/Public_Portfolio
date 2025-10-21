// ESLint Flat Config for the monorepo (ESM)
// - JS rules via @eslint/js
// - TS rules via typescript-eslint
// - Formatting handled by Prettier (eslint-config-prettier disables stylistic rules)

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: ['node_modules/', '**/node_modules/**', 'dist/', '**/dist/**', '.pnpm-store/'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },

  // React/Browser overrides for the frontend
  {
    files: ['frontend/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        // Point the TS parser at the monorepo root and the frontend tsconfigs
        tsconfigRootDir: import.meta.dirname,
        project: ['./frontend/tsconfig.app.json', './frontend/tsconfig.node.json'],
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // Backend TypeScript project config (Node environment)
  {
    files: ['backend/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        // Point the TS parser at the monorepo root and backend tsconfig
        tsconfigRootDir: import.meta.dirname,
        project: ['./backend/tsconfig.json'],
      },
      globals: {
        ...globals.node,
      },
    },
  },

  // Defer stylistic rules to Prettier
  prettier,
];
