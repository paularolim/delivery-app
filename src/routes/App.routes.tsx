import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Product } from '../screens/Product';

const Drawer = createDrawerNavigator();

export function AppRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Product" component={Product} />
    </Drawer.Navigator>
  );
}
