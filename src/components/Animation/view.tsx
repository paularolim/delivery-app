/* eslint-disable global-require */
/* eslint-disable no-undef */
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import Lottie from 'lottie-react-native';
import { AnimationProps } from './types';

const animations: Record<AnimationProps['name'], JSX.Element> = {
  loading: <ActivityIndicator size="large" color="#000" />,
  coffeeLoading: (
    <View style={{ width: '100%', height: 80, padding: 60 }}>
      <Lottie source={require('./lotties/coffee-loading.json')} autoPlay loop resizeMode="cover" />
    </View>
  ),
};

export function AnimationView({ name }: AnimationProps): JSX.Element {
  return animations[name];
}
