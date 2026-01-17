import js from '@eslint/js';
import Import from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import { default as tseslint } from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,ts}'],
    plugins: {
      js: js,
      import: Import,
      prettier: prettier,
      typescript: tseslint,
    },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-unused-expressions': 'error',
    },
  },
  tseslint.configs.recommended,
]);
