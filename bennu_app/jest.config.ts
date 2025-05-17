import type {Config} from "jest";

const config: Config = {
  preset: "react-native",
  setupFiles: ["<rootDir>/src/test/jestSetup.ts"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleDirectories: ["node_modules", "./src/test"],
  modulePathIgnorePatterns: [".*/mockedData/.*"],
  collectCoverageFrom: [
    "src/{components,hooks,domain,screens}/**/*.{js,jsx,ts,tsx}",
  ],
  coveragePathIgnorePatterns: ["/node_modules/", "index"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-safe-area-context|@react-navigation|react-redux|react-native-reanimated)/)",
  ],
  moduleNameMapper: {
    "\\.(ttf)$": "<rootDir>/__mocks__/file-mock.js",
  },
};

export default config;
