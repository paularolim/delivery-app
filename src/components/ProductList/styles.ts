import {Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  border: 1.5px solid #ccc;
  border-radius: 12px;
  padding: 12px 24px;
  flex-direction: row;
  align-items: center;
`;

export const Picture = styled(Image)`
  resize-mode: contain;
  width: 100px;
  height: 120px;
`;

export const Info = styled(View)`
  padding: 0px 24px;
`;

export const Title = styled(Text)`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

export const Price = styled(Text)`
  font-size: 18px;
  color: #000;
`;
