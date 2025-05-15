module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    "babel-plugin-styled-components",
    [
      "module-resolver",
      {
        root: ".",
        alias: {
          "@context": "./src/context",
          "@components": "./src/components",
          "@hooks": "./src/hooks",
          "@routes": "./src/routes",
          "@screens": "./src/screens",
          "@theme": "./src/theme",
          "@domain": "./src/domain",
          "@brand": "./src/brand",
          "@api": "./src/api",
          "@types": "./src/types",
          "@utils": "./src/utils",
          "@infra": "./src/infra",
          "@services": "./src/services",
          "@test": "./src/test",
          "@assets": "./src/assets",
          "@form": "./src/form",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
