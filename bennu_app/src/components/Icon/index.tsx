import {ComponentProps} from "react";
import {TouchableOpacity} from "react-native";

import IconComponent from "@react-native-vector-icons/fontawesome6";
import {DefaultTheme, useTheme} from "styled-components/native";

export type IconProps = ComponentProps<typeof IconComponent> & {
  onPress?: () => void;
  color?: keyof DefaultTheme["colors"];
};

export function Icon({
  onPress,
  size = 24,
  color = "backgroundContrast",
  style,
  ...iconProps
}: IconProps) {
  const {colors} = useTheme();

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} style={style} hitSlop={10}>
        <IconComponent size={size} color={colors[color]} {...iconProps} />
      </TouchableOpacity>
    );
  }

  return (
    <IconComponent
      size={size}
      color={colors[color]}
      style={style}
      {...iconProps}
    />
  );
}
