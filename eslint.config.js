import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import nextPlugin from '@next/eslint-plugin-next'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react: react,
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
      prettier: prettier,
    },
    rules: {
      // セミコロンルールを最初に設定（他の設定でオーバーライドされないように）
      semi: ['error', 'never'],
      // 他の設定を適用
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      // React関連のルールオーバーライド
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-no-target-blank': 'off',
      'react/no-unknown-property': 'off',
      // TypeScript関連のルールオーバーライド
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      // 一般的なJavaScriptルールオーバーライド
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'warn',
      'no-var': 'error',
      eqeqeq: 'off', // == と === の厳密な比較を無効化
      curly: 'error',
      'no-duplicate-imports': 'error',
      'no-unused-expressions': 'error',
      'no-undef': 'off', // グローバル変数の未定義エラーを無効化
      // React Hooks関連
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/immutability': 'off', // useEffectの依存関係の不変性チェックを無効化
      // コードスタイル関連
      quotes: ['error', 'single', { avoidEscape: true }], // シングルクォートをデフォルト、エスケープ回避の場合はダブルクォートを許容
      // Prettier統合
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  // Prettierの設定を最後に追加してESLintの競合するルールを無効化
  prettierConfig,
]
