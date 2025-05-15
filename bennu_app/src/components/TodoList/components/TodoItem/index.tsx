import {useTheme} from "styled-components/native";

import {Icon} from "@components";

import {
  TaskCard,
  TaskText,
  TaskActions,
  TaskContainer,
  DescriptionText,
} from "../../styles";

type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
  description?: string;
  onToggleStatus: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TodoItem({
  id,
  title,
  completed,
  description,
  onToggleStatus,
  onEdit,
  onDelete,
}: TodoItemProps) {
  const {shadows, spacing} = useTheme();

  return (
    <TaskContainer>
      <TaskCard {...shadows.md}>
        {completed ? (
          <Icon
            onPress={() => onToggleStatus(id)}
            name="circle-check"
            color="success"
            iconStyle="solid"
            style={{marginRight: spacing.s8}}
          />
        ) : (
          <Icon
            onPress={() => onToggleStatus(id)}
            name="circle"
            color="gray400"
            iconStyle="regular"
            style={{marginRight: spacing.s8}}
          />
        )}

        <TaskText completed={completed}>
          {title}

          {description && (
            <DescriptionText completed={completed}>
              {"\n"}
              {description}
            </DescriptionText>
          )}
        </TaskText>

        <TaskActions>
          <Icon
            onPress={() => onEdit(id)}
            name="pen"
            size={16}
            color="gray400"
            iconStyle="solid"
            style={{paddingHorizontal: spacing.s16}}
          />
          <Icon
            onPress={() => onDelete(id)}
            name="trash"
            size={16}
            color="danger"
            iconStyle="solid"
          />
        </TaskActions>
      </TaskCard>
    </TaskContainer>
  );
}
