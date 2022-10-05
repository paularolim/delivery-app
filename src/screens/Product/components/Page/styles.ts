import {Dimensions, Image, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window');

export const squareSize = width * 0.5;
export const cupSize = width * 0.38;

export const Container = styled(View)`
  flex: 1;
  width: ${squareSize}px;
  align-items: center;
  margin-top: 100px;
`;

export const Wrapper = styled(Animated.View)`
  width: ${squareSize}px;
  height: ${squareSize + 100}px;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled(Image)`
  width: ${cupSize}px;
  flex: 1;
  resize-mode: contain;
`;

export const Info = styled(Animated.View)`
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

export const Price = styled(Text)`
  font-size: 20px;
  color: #000;
`;
