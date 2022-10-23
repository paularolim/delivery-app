import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useCallback } from 'react';
import { DrawerHeader } from '../components/DrawerHeader';
import { DrawerMenu } from '../components/DrawerMenu';
import { Product } from '../screens/Product';

const Drawer = createDrawerNavigator();

export function AppRoutes() {
  const header = useCallback(() => <DrawerHeader />, []);
  const drawerContent = useCallback(() => <DrawerMenu />, []);

  return (
    <Drawer.Navigator screenOptions={{ header }} drawerContent={drawerContent}>
      <Drawer.Screen name="Product" component={Product} />
    </Drawer.Navigator>
  );
}
