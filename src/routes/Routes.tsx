import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Loading } from '../components/Loading';
import { useAuth } from '../contexts/Auth';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { AppRoutes } from './App.routes';
import { StackScreens } from './types';

const Stack = createNativeStackNavigator<StackScreens>();

export function Routes() {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <Stack.Navigator initialRouteName={!isLoggedIn ? 'Login' : 'AppRoutes'}>
      {!isLoggedIn && (
        <Stack.Group navigationKey="Auth" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Group>
      )}

      <Stack.Group navigationKey="App" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppRoutes" component={AppRoutes} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
