import {Dimensions} from "react-native";

import styled, {css} from "styled-components/native";

const {height} = Dimensions.get("window");

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View<{heightPercentage?: number}>`
  max-height: ${height}px;

  ${({heightPercentage}) =>
    heightPercentage &&
    css`
      height: ${height * heightPercentage}px;
    `}

  background-color: ${({theme}) => theme.colors.background};

  padding-horizontal: ${({theme}) => theme.spacing.s24}px;

  border-top-left-radius: ${({theme}) => theme.borderRadius.lg}px;
  border-top-right-radius: ${({theme}) => theme.borderRadius.lg}px;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Divider = styled.View`
  height: 1px;

  background-color: ${({theme}) => theme.colors.gray200};
  margin-vertical: ${({theme}) => theme.spacing.s16}px;
`;
