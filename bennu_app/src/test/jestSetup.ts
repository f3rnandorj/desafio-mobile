import mockSafeAreaContext from "react-native-safe-area-context/jest/mock";

require("react-native-reanimated").setUpTests();

jest.mock("react-native-safe-area-context", () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: jest.fn(mockSafeAreaContext.useSafeAreaInsets),
}));

jest.mock("@react-navigation/native", () => {
  const originalModule = jest.requireActual("@react-navigation/native");
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: jest.fn(),
      push: jest.fn(),
    }),
  };
});

jest.mock("redux-persist", () => {
  const actual = jest.requireActual("redux-persist");
  return {
    ...actual,
    persistStore: jest.fn().mockReturnValue({
      purge: jest.fn(),
      flush: jest.fn(),
      pause: jest.fn(),
      persist: jest.fn(),
      subscribe: jest.fn(),
    }),
  };
});
