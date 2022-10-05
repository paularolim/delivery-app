import {Dimensions, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window');
const circleSize = width + 50;

export const Circle = styled(Animated.View)`
  width: ${circleSize}px;
  height: ${circleSize}px;
  border-radius: ${circleSize / 2}px;
  top: ${-(circleSize / 2)}px;
  left: -25px;
  overflow: hidden;
`;

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
