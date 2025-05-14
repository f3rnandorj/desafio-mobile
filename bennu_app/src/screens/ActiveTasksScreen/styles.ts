import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
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
