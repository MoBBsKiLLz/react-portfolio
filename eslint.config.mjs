import { defineConfig } from 'eslint-define-config';  // Required for the flat config format
import antfu from '@antfu/eslint-config';
import nextPlugin from '@next/eslint-plugin-next';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import testingLibrary from 'eslint-plugin-testing-library';
import playwright from 'eslint-plugin-playwright';

export default defineConfig({
  plugins: {
    '@next/next': nextPlugin,
    'jsx-a11y': jsxA11y,
    'testing-library': testingLibrary,
    'playwright': playwright,
  },
  rules: {
    'antfu/no-top-level-await': 'off',
    //'style/brace-style': ['error', '1tbs'],
    //'ts/consistent-type-definitions': ['error', 'type'],
    'react/prefer-destructuring-assignment': 'off',
    'node/prefer-global/process': 'off',
    //'test/padding-around-all': 'error',
    'test/prefer-lowercase-title': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
});
