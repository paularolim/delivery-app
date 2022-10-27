import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  background-color: #d7d7d7;
  flex-direction: row;
  border-radius: 8px;
  overflow: hidden;
`;

export const Label = styled(Text)`
  font-size: 12px;
  color: #000;
  margin-bottom: 10px;
  width: 100%;
`;

export const RNInput = styled(TextInput)`
  color: #666666;
  width: 100%;
  padding: 10px 15px;
  flex: 1;
`;

export const IconContainer = styled(TouchableOpacity)`
  flex-direction: row;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
`;
