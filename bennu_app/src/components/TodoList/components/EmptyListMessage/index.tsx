import {useTheme} from "styled-components/native";

import {Icon, Text} from "@components";

import {EmptyState} from "../../styles";

export function EmptyListMessage() {
  const {spacing} = useTheme();

  return (
    <EmptyState>
      <Icon name="clipboard-list" size={48} color="gray400" iconStyle="solid" />
      <Text
        color="gray500"
        style={{textAlign: "center", marginTop: spacing.s16}}>
        No tasks yet! Add your first task above.
      </Text>
    </EmptyState>
  );
}
