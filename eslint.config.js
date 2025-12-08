import js from "@eslint/js";
import reactRefresh from "eslint-plugin-react-refresh";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  // 기본 JS 룰 (ESLint 기본 추천)
  js.configs.recommended,

  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "react-refresh": reactRefresh,
      "react-hooks": reactHooks,
    },
    rules: {
      // React Refresh 관련
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // React Hooks 규칙
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // 네 스타일 취향에 맞게 바꾸면 됨 (일단 보편적인 편)
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
