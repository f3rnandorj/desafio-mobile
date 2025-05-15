import styled from "styled-components/native";

import {Text} from "../Text";

export const TextBox = styled.View`
  flex-shrink: 1;
  padding-left: 15px;
`;

export const Message = styled(Text)`
  text-align: left;
`;

export const ActionText = styled(Text)``;

export const Title = styled(Text)``;

export const ActionButton = styled.TouchableOpacity`
  padding-left: 15px;
`;
