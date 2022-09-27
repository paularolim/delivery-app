import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {coffees} from './mocks';
import {Page} from './components/Page';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

const {width} = Dimensions.get('window');

const circleSize = width + 50;
const pageSize = width * 0.5;

export const ProductView = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={styles.circle} />
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
  },
  backgroundContainer: {
    flex: 1,
    position: 'absolute',
  },
  circle: {
    backgroundColor: '#f00',
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    top: -circleSize / 2,
    left: -25,
  },
});
