import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useCallback } from 'react';
import { DrawerHeader } from '../components/DrawerHeader';
import { Product } from '../screens/Product';

const Drawer = createDrawerNavigator();

export function AppRoutes() {
  const header = useCallback(() => <DrawerHeader />, []);

  return (
    <Drawer.Navigator screenOptions={{ header }}>
      <Drawer.Screen name="Product" component={Product} />
    </Drawer.Navigator>
  );
}
