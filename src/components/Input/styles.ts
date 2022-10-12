import { View, TextInput, Text } from 'react-native';
import styled from 'styled-components';

export const InputGroup = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const Label = styled(Text)`
  font-size: 12px;

  color: #000;
  margin-bottom: 10px;
`;

export const Input = styled(TextInput)`
  background-color: #d7d7d7;

  border-radius: 8px;
  color: #666666;
  width: 100%;

  padding: 10px 15px;
`;

export const LinkInput = styled(Text)`
  color: #fe724c;
  margin-bottom: 10px;
`;
