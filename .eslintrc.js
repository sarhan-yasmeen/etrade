module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "@typescript-eslint",
    "testing-library",
    "jest",
    "jest-dom",
    "import",
  ],
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest-dom/recommended",
    // "plugin:@typescript-eslint/eslint-recommended",
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // "plugin:prettier/recommended",
    "prettier",
  ],
  ignorePatterns: ["node_modules"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },

  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: [
        "plugin:testing-library/react",
        "plugin:import/errors",
        "plugin:import/typescript",
      ],
    },
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "import/no-unresolved": "error",
    "no-console": ["warn", {}],
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
    // import order rules here
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "@tanstack/**",
            group: "external",
            position: "before",
          },
          {
            pattern: "@mui/**",
            group: "external",
            position: "before",
          },
          {
            pattern: "@shared",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@shared/**",
            group: "internal",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "ignore",
        alphabetize: {
          order:
            "asc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
    "import/first": "warn",
    // jest-dom rules here
    "jest-dom/prefer-required": "warn",
    "jest-dom/prefer-enabled-disabled": "warn",
    "jest-dom/prefer-checked": "warn",
    "jest-dom/prefer-to-have-attribute": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
