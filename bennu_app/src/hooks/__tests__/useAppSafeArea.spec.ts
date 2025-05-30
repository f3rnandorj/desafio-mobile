import {useSafeAreaInsets, EdgeInsets} from "react-native-safe-area-context";
import {renderHook} from "test-utils";

import {theme} from "@theme";

import {useAppSafeArea} from "../useAppSafeArea";

const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe("useAppSafeArea", () => {
  test("when the safe area is less than minimum requirement, it returns the minimum requirement", () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () =>
        ({
          top: 4,
          bottom: 2,
        } as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(theme.spacing.s48);
    expect(result.current.bottom).toEqual(theme.spacing.s16);
  });

  test("when the safe area is greater than minimum requirement, it returns the safe area", () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () =>
        ({
          top: 50,
          bottom: 50,
        } as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(50);
    expect(result.current.bottom).toEqual(50);
  });
});
