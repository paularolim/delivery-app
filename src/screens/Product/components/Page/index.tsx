import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {PageProps} from './types';

const {width} = Dimensions.get('window');

const squareSize = width * 0.5;
const cupSize = width * 0.38;

export const Page = ({index, id, title, price, translateX}: PageProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      [(index - 1) * squareSize, index * squareSize, (index + 1) * squareSize],
      [0.7, 1, 0.7],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale: withSpring(scale)}],
    };
  });

  const infoStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [(index - 1) * squareSize, index * squareSize, (index + 1) * squareSize],
      [0, 1, 0],
    );

    return {
      opacity: withSpring(opacity),
    };
  });

  return (
    <View style={styles.page} key={id}>
      <Animated.View style={[styles.square, animatedStyle]}>
        <Image
          source={require('../../../../assets/images/coffee-cup.png')}
          style={styles.image}
        />
        <Animated.View style={[styles.info, infoStyle]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: squareSize,
    alignItems: 'center',
    marginTop: 100,
  },
  square: {
    width: squareSize,
    height: squareSize + 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: cupSize,
    flex: 1,
    resizeMode: 'contain',
  },
  info: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    color: '#000',
  },
  price: {
    fontSize: 20,
    color: '#000',
  },
});
