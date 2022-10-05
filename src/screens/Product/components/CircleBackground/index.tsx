import React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {colors, gradients} from '../../../../common/colors';
import {system} from '../../../../common/platform';
import {Circle, styles} from './styles';
import {CircleBackgroundProps} from './types';

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

export function CircleBackground({currentIndex}: CircleBackgroundProps) {
  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      currentIndex.value,
      colors.map((_, index) => index),
      colors,
    );
    return {
      backgroundColor,
    };
  });

  const animatedGradient = useAnimatedProps<LinearGradientProps>(() => {
    const bottomColor = interpolateColor(
      currentIndex.value,
      gradients.map((_, index) => index),
      gradients.map(gradient => gradient[0]),
    );
    const topColor = interpolateColor(
      currentIndex.value,
      gradients.map((_, index) => index),
      gradients.map(gradient => gradient[1]),
    );
    return {
      colors: [topColor, bottomColor],
    };
  });

  return (
    <Circle style={[animatedStyle]}>
      {system === 'ios' && (
        <AnimatedGradient
          colors={['#fff', '#fff']}
          animatedProps={animatedGradient}
          locations={[0, 0.5]}
          start={{x: 0.1, y: 1}}
          end={{x: 0.1, y: 0.3}}
          style={styles.linearGradient}
        />
      )}
    </Circle>
  );
}
