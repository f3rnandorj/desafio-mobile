import styled from "styled-components/native";

import {Text} from "@components";

export const TaskContainer = styled.View`
  padding-left: ${({theme}) => theme.spacing.s4}px;
  padding-right: ${({theme}) => theme.spacing.s4}px;
  margin-bottom: ${({theme}) => theme.spacing.s8}px;
`;

export const TaskCard = styled.View`
  min-height: 100px;

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

export const DescriptionText = styled(Text)<{completed: boolean}>`
  font-size: ${({theme}) => theme.fontSizes.xs}px;
  color: ${({theme, completed}) =>
    completed ? theme.colors.gray300 : theme.colors.gray400};
  text-decoration-line: ${({completed}) =>
    completed ? "line-through" : "none"};
`;

export const TaskActions = styled.View`
  flex-direction: row;
`;
