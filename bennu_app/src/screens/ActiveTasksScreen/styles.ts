import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const AddButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: ${({theme}) => theme.borderRadius.round}px;
  background-color: ${({theme}) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: ${({theme}) => theme.spacing.s8}px;
  margin-bottom: ${({theme}) => theme.spacing.s16}px;
  padding: ${({theme}) => theme.spacing.s16}px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: ${({theme}) => theme.borderRadius.md}px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: ${({theme}) => theme.fontSizes.md}px;
  color: ${({theme}) => theme.colors.gray800};
  padding: 0;
  margin-left: ${({theme}) => theme.spacing.s8}px;
`;

export const TaskContainer = styled.View`
  padding-horizontal: ${({theme}) => theme.spacing.s8}px;
  margin-bottom: ${({theme}) => theme.spacing.s8}px;
  z-index: 999;
`;

export const TaskCard = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${({theme}) => theme.spacing.s16}px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: ${({theme}) => theme.borderRadius.md}px;
`;

export const TaskCheckbox = styled.TouchableOpacity`
  margin-right: ${({theme}) => theme.spacing.s8}px;
`;

export const TaskText = styled.Text<{completed: boolean}>`
  flex: 1;
  font-size: ${({theme}) => theme.fontSizes.md}px;
  color: ${({theme, completed}) =>
    completed ? theme.colors.gray400 : theme.colors.gray800};
  text-decoration-line: ${({completed}) =>
    completed ? "line-through" : "none"};
`;

export const TaskActions = styled.View`
  flex-direction: row;
`;

export const ActionButton = styled.TouchableOpacity`
  padding: ${({theme}) => theme.spacing.s8}px;
`;

export const EmptyState = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${({theme}) => theme.spacing.s48}px;
`;

export const EmptyStateText = styled.Text`
  margin-top: ${({theme}) => theme.spacing.s16}px;
  font-size: ${({theme}) => theme.fontSizes.md}px;
  color: ${({theme}) => theme.colors.gray500};
  text-align: center;
`;
