import styled from "styled-components/native";

import {Text} from "@components";

export const Label = styled(Text)`
  color: ${({theme}) => theme.colors.gray600};

  margin-left: ${({theme}) => theme.spacing.s8}px;
  margin-bottom: ${({theme}) => theme.spacing.s4}px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin: ${({theme}) => theme.spacing.s8}px;
  padding-horizontal: ${({theme}) => theme.spacing.s16}px;

  background-color: ${({theme}) => theme.colors.white};

  border-radius: ${({theme}) => theme.borderRadius.md}px;
`;

export const Input = styled.TextInput`
  flex: 1;
  min-height: ${props => (props.multiline ? "80px" : "auto")};

  font-size: ${({theme}) => theme.fontSizes.md}px;
  color: ${({theme}) => theme.colors.gray800};

  padding-vertical: ${({theme}) => theme.spacing.s16}px;
  margin-left: ${({theme}) => theme.spacing.s8}px;
`;

export const ErrorMessage = styled(Text)`
  margin-top: ${({theme}) => theme.spacing.s4}px;
  margin-left: ${({theme}) => theme.spacing.s8}px;

  color: ${({theme}) => theme.colors.danger};
`;
