import {Icon} from "@components";

import {EmptyState, EmptyStateText} from "../../styles";

export function EmptyListMessage() {
  return (
    <EmptyState>
      <Icon name="clipboard-list" size={48} color="gray400" iconStyle="solid" />
      <EmptyStateText>No tasks yet! Add your first task above.</EmptyStateText>
    </EmptyState>
  );
}
