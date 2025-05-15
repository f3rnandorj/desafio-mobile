import styled, {css} from "styled-components/native";

import {Text} from "@components";

export const Container = styled.View`
  height: 100%;
  width: 100%;

  position: absolute;

  align-items: center;
  justify-content: center;

  background-color: "rgba(0, 0, 0, 0.5)";
`;

export const Content = styled.View`
  min-height: 300px;
  width: 300px;
  align-items: center;
  justify-content: space-between;

  border-radius: ${({theme}) => theme.borderRadius.lg}px;

  background-color: ${({theme}) => theme.colors.background};

  gap: ${({theme}) => theme.spacing.s16}px;

  padding: ${({theme}) => theme.spacing.s32}px;
`;

export const Title = styled(Text)`
  text-align: center;
`;

export const SubTitle = styled(Text)`
  text-align: center;

  ${({theme: {spacing}}) => css`
    margin: 0 -${spacing.s12}px 0 -${spacing.s12}px;
  `};
`;

export const ButtonsContainer = styled.View`
  width: 100%;
`;

export const AcceptButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;

  align-items: center;
  justify-content: center;

  border-bottom-color: ${({theme}) => theme.colors.gray400};
  border-bottom-width: 1px;
`;

export const AcceptButtonText = styled(Text)``;

export const CancelButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const CancelButtonText = styled(Text)``;
