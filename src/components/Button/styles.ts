import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

export const ButtonLogin = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;

  background-color: #fe724c;
  border-radius: 10px;
  width: 100%;
  height: 48px;
`;

export const LabelButton = styled(Text)`
  font-size: 16px;
  font-weight: 700;
  color: #000;
`;
