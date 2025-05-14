import styled from "styled-components/native";

import {Text} from "@components";

export const TaskContainer = styled.View`
  padding-horizontal: ${({theme}) => theme.spacing.s8}px;
  margin-bottom: ${({theme}) => theme.spacing.s8}px;
`;

export const TaskCard = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${({theme}) => theme.spacing.s16}px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: ${({theme}) => theme.borderRadius.md}px;
`;

export const TaskText = styled(Text)<{completed: boolean}>`
  flex: 1;
  color: ${({theme, completed}) =>
    completed ? theme.colors.gray400 : theme.colors.gray800};
  text-decoration-line: ${({completed}) =>
    completed ? "line-through" : "none"};
`;

export const TaskActions = styled.View`
  flex-direction: row;
`;

export const EmptyState = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${({theme}) => theme.spacing.s48}px;
`;
