import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: [
      ".next/**",
      "backend/**",
      "build/**",
      "build_log*.txt",
      "eslint.txt",
      "git_changes.txt",
      "git_status*.txt",
      "current_git_status.txt",
      "fix-fonts.js",
      "fix-aria.js",
      "remove-logs.js",
      "fix-mobile.js",
      "add-meta.js",
      "prisma/**",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "react-hooks/immutability": "warn",
      "react-hooks/purity": "warn",
      "react-hooks/set-state-in-effect": "warn",
      "react/no-unescaped-entities": "warn",
      "@next/next/no-html-link-for-pages": "warn",
    },
  },
];

export default eslintConfig;
