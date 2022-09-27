import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {coffees} from './mocks';
import {Page} from './components/Page';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const {width} = Dimensions.get('window');

const circleSize = width + 50;
const pageSize = width * 0.5;
const colors = ['#736F26', '#01619E', '#F65403', '#FF8901', '#FFBD28'];

export const ProductView = () => {
  const currentIndex = useSharedValue(0);
  const translateX = useSharedValue(0);

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

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
    currentIndex.value = event.contentOffset.x / pageSize;
  });

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Animated.View style={[styles.circle, animatedStyle]} />
      </View>
      <Animated.FlatList
        data={coffees}
        renderItem={({item, index}) => (
          <Page
            index={index}
            id={item.id}
            title={item.title}
            price={item.price}
            translateX={translateX}
          />
        )}
        contentContainerStyle={{
          paddingHorizontal: width / 2 - pageSize / 2,
        }}
        snapToInterval={pageSize}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={64}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundContainer: {
    flex: 1,
    position: 'absolute',
  },
  circle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    top: -circleSize / 2,
    left: -25,
  },
});
