// ESLint Flat Config for the monorepo (ESM)
// - JS rules via @eslint/js
// - TS rules via typescript-eslint
// - Formatting handled by Prettier (eslint-config-prettier disables stylistic rules)

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

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

  // Defer stylistic rules to Prettier
  prettier,
];
