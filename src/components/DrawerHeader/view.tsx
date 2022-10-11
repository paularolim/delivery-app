import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export function DrawerHeader() {
  const navigation = useNavigation();

  const toggle = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={{ paddingHorizontal: 24, paddingVertical: 12, position: 'absolute' }}>
      <TouchableOpacity onPress={toggle}>
        <Icon name="bars" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
}
