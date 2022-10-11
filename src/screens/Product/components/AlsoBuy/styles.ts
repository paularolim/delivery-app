import { Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
`;

export const Title = styled(Text)`
  padding: 12px 0px;
  font-size: 22px;
  font-weight: bold;
  line-height: 30px;
  color: #000;
`;

export const ItemContainer = styled(Animated.View)`
  background-color: #22c1c3;
  padding: 12px 24px;
  border-radius: 24px;
  height: auto;
`;

export const ItemLabel = styled(Animated.Text)`
  font-size: 18px;
`;
