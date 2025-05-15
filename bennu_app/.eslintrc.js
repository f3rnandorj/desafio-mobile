module.exports = {
  root: true,
  extends: "@react-native",
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {
    quotes: ["error", "double"],
    "react-native/no-inline-styles": "off",
  },
  plugins: ["import"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "import/order": [
          "error",
          {
            groups: ["external", "builtin", "internal", "parent", "sibling"],
            pathGroups: [
              {
                pattern: "react+(|-native)",
                group: "external",
                position: "before",
              },
              {
                pattern:
                  "@+(domain|routes|screens|components|services|hooks|context|theme|features)",
                group: "internal",
                position: "before",
              },
              {
                pattern: "./",
                group: "internal",
                position: "before",
              },
            ],
            pathGroupsExcludedImportTypes: ["react+(|-native)"],
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
            "newlines-between": "always",
          },
        ],
      },
    },
  ],
};
