import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {PageProps} from './types';

const {width} = Dimensions.get('window');

const squareSize = width * 0.5;
const cupSize = width * 0.38;

export const Page = ({id, title, price}: PageProps) => {
  return (
    <View style={styles.page} key={id}>
      <View style={styles.square}>
        <Image
          source={require('../../../../assets/images/coffee-cup.png')}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text>{title}</Text>
          <Text>{price}</Text>
        </View>
      </View>
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
  },
});
