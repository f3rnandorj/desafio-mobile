import styled from "styled-components/native";

import {Text} from "@components";

export const EmptyState = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${({theme}) => theme.spacing.s48}px;
`;

export const EmptyStateText = styled(Text)`
  text-align: center;
  margin-top: ${({theme}) => theme.spacing.s16}px;
  margin-bottom: ${({theme}) => theme.spacing.s24}px;
`;
