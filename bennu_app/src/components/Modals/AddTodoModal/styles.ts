import styled from "styled-components/native";

export const Container = styled.View`
  gap: ${({theme}) => theme.spacing.s16}px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({theme}) => theme.spacing.s8}px;
`;
