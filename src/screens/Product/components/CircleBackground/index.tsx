import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {CircleBackgroundProps} from './types';

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

const colors = ['#736F26', '#01619E', '#F65403', '#FF8901', '#FFBD28'];
const gradients = [
  ['#736F26', '#01619E'],
  ['#01619E', '#F65403'],
  ['#F65403', '#FF8901'],
  ['#FF8901', '#FFBD28'],
  ['#FFBD28', '#736F26'],
];

const {width} = Dimensions.get('window');
const circleSize = width + 50;

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
    <Animated.View style={[styles.circle, animatedStyle]}>
      <AnimatedGradient
        colors={['#fff', '#fff']}
        animatedProps={animatedGradient}
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    top: -circleSize / 2,
    left: -25,
    overflow: 'hidden',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
