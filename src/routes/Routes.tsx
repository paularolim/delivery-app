import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useAuth } from '../contexts/Auth';
import { Login } from '../screens/Login';
import { AppRoutes } from './App.routes';
import { StackScreens } from './types';

const Stack = createNativeStackNavigator<StackScreens>();

export function Routes() {
  const { isLoggedIn } = useAuth();

  return (
    <Stack.Navigator initialRouteName="Login">
      {!isLoggedIn && (
        <Stack.Group navigationKey="Auth" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Group>
      )}

      <Stack.Group navigationKey="App" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppRoutes" component={AppRoutes} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
