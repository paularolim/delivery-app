import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  padding: 50px 24px 0 24px;
  flex: 1;
`;

export const Label = styled(Text)`
  color: #000;
`;
