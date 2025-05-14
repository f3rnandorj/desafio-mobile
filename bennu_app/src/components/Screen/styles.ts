import styled from "styled-components/native";

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme}) => theme.spacing.s16}px;
  margin-bottom: ${({theme}) => theme.spacing.s16}px;
`;

export const HeaderButton = styled.TouchableOpacity`
  padding: ${({theme}) => theme.spacing.s8}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 ${({theme}) => theme.spacing.s16}px;
`;
