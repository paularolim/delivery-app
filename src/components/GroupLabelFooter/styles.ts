import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const LabelGroup = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  text-align: center;
`;

export const Label = styled(Text)`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  margin-top: 5px;
`;

export const LinkLabel = styled(Label)`
  color: #fe724c;
`;
