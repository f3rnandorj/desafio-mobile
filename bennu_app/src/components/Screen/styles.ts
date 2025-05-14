import styled from "styled-components/native";

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${({theme}) => theme.spacing.s16}px;
  padding-top: ${({theme}) => theme.spacing.s16 + 20}px;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: ${({theme}) => theme.fontSizes.lg}px;
  font-weight: ${({theme}) => theme.fontWeights.bold};
  color: ${({theme}) => theme.colors.gray800};
  text-align: center;
`;

export const HeaderButton = styled.TouchableOpacity`
  padding: ${({theme}) => theme.spacing.s8}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 ${({theme}) => theme.spacing.s16}px;
`;
