import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {coffees} from './mocks';
import {Page} from './components/Page';

const {width} = Dimensions.get('window');

const circleSize = width + 50;
const pageSize = width * 0.5;

export const ProductView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={styles.circle} />
      </View>
      <FlatList
        data={coffees}
        renderItem={({item}) => (
          <Page id={item.id} title={item.title} price={item.price} />
        )}
        contentContainerStyle={{
          paddingHorizontal: width / 2 - pageSize / 2,
        }}
        snapToInterval={pageSize}
        horizontal
        showsHorizontalScrollIndicator={false}
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
