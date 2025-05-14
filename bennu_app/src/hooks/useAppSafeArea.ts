import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useTheme} from "styled-components/native";

export function useAppSafeArea() {
  const {top, bottom} = useSafeAreaInsets();
  const {spacing} = useTheme();

  return {
    top: Math.max(top + spacing.s16, spacing.s48),
    bottom: Math.max(bottom + spacing.s8, spacing.s24),
  };
}
