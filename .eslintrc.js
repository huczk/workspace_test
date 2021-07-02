module.exports = {
  parser: "@typescript-eslint/parser",
  root: true,
  plugins: ["react", "react-hooks", "@typescript-eslint", "import"],
  // plugins: ["import"],
  extends: [
    // "eslint:recommended",
    // "plugin:react/recommended",
    // "plugin:@typescript-eslint/eslint-recommended",
    // "plugin:@typescript-eslint/recommended",
    // "react-app",
    // "react-app/jest",
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    //   //   // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    //   //   // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    //   //   "react-hooks/rules-of-hooks": "error",
    //   //   "react/prop-types": [0],
    //   //   "max-len": [0],
    //   //   "no-unused-vars": [0],
    //   //   "no-extra-semi": [0],
    //   //   "no-async-promise-executor": 0,
    //   //   "@typescript-eslint/ban-ts-comment": "warn",
    //   //   "@typescript-eslint/explicit-function-return-type": 0,
    //   //   "@typescript-eslint/no-unused-vars": 0,
    //   //   "@typescript-eslint/no-explicit-any": 0,
    //   //   "@typescript-eslint/explicit-module-boundary-types": 0,

    //   //   // not needed from react > 17.0
    //   //   "react/jsx-uses-react": "off",
    //   //   "react/react-in-jsx-scope": "off",

    "sort-imports": ["warn", { ignoreDeclarationSort: true }],
    //   "import/order": [
    //     "warn",
    //     {
    //       "newlines-between": "always",
    //       alphabetize: { order: "asc", caseInsensitive: true },
    //       pathGroupsExcludedImportTypes: ["builtin"],
    //       // pathGroups: [
    //       //   {
    //       //     pattern: "accounting",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "accounting/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "clients",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "clients/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "common",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "common/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "company",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "company/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "config",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "config/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "core",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "core/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "files",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "files/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "invoices",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "invoices/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "localization",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "localization/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "mobileApp",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "mobileApp/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "onboarding",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "onboarding/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "scanye",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "scanye/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "services",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "services/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "styles",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "styles/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "user",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "user/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "export",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "export/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "upload",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "upload/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "paths",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "Router",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "store",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "i18n",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "notifications",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "notifications/**",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "documents",
    //       //     group: "internal",
    //       //   },
    //       //   {
    //       //     pattern: "documents/**",
    //       //     group: "internal",
    //       //   },
    //       // ],
    //       groups: [
    //         "builtin",
    //         "external",
    //         "internal",
    //         "parent",
    //         "sibling",
    //         "index",
    //       ],
    //     },
    //   ],
  },
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  // ignorePatterns: [
  //   "src/accounting/*",
  //   "src/config/*",
  //   "src/core/*",
  //   "src/debug/*",
  //   "src/scanye/*",
  //   "src/screen/*",
  //   "src/services/*",
  // ],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};