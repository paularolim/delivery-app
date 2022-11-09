import { View } from 'react-native';
import React from 'react';
import { Animation } from '../Animation';

/**
 * Tela de loading
 * @exaple <Loading />
 * @returns JSX.Element
 */
export function LoadingView() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animation name="coffeeLoading" />
    </View>
  );
}
