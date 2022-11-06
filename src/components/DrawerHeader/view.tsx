import { Platform, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export function DrawerHeader() {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  const toggle = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <SafeAreaView edges={['top']}>
      <View
        style={{
          paddingHorizontal: 24,
          paddingVertical: Platform.OS === 'ios' ? insets.top : 12,
          position: 'absolute',
        }}
      >
        <TouchableOpacity onPress={toggle}>
          <Icon name="bars" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
