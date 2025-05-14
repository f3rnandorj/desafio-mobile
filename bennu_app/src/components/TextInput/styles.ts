import styled from "styled-components/native";

import {Text} from "@components";

export const Label = styled(Text)`
  color: ${({theme}) => theme.colors.gray600};
  margin-bottom: ${({theme}) => theme.spacing.s8}px;
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
  min-height: ${props => (props.multiline ? "80px" : "auto")};

  font-size: ${({theme}) => theme.fontSizes.md}px;
  color: ${({theme}) => theme.colors.gray800};

  padding: 0;
  margin-left: ${({theme}) => theme.spacing.s8}px;
`;
