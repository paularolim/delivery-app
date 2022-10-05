import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {coffees} from './mocks';
import {Page} from './components/Page';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {CircleBackground} from './components/CircleBackground';

const {width} = Dimensions.get('window');

const pageSize = width * 0.5;

export const ProductView = () => {
  const currentIndex = useSharedValue(0);
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
    currentIndex.value = event.contentOffset.x / pageSize;
  });

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <CircleBackground currentIndex={currentIndex} />
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
        pagingEnabled
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
});
