import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { DrawerHeader } from '../components/DrawerHeader';
import { DrawerMenu } from '../components/DrawerMenu';
import { useAuth } from '../contexts/Auth';
import { Product } from '../screens/Product';

const Drawer = createDrawerNavigator();

export function AppRoutes() {
  const navigation = useNavigation();

  const { logout, isLoggedIn, user } = useAuth();

  const header = useCallback(() => <DrawerHeader />, []);
  const drawerContent = useCallback(
    () => (
      <DrawerMenu
        username={user?.name || ''}
        isLoggedIn={isLoggedIn}
        onPressLogout={logout}
        onPressLogin={() => navigation.navigate('Login' as never)}
        onPressProfile={() => navigation.navigate('Profile' as never)}
      />
    ),
    [isLoggedIn],
  );

  return (
    <Drawer.Navigator screenOptions={{ header }} drawerContent={drawerContent}>
      <Drawer.Screen name="Product" component={Product} />
    </Drawer.Navigator>
  );
}
