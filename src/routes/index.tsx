import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Login} from '../screens/Login';
import {Product} from '../screens/Product';

export type RootStackParamList = {
  Login: undefined;
  Product: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!isLoggedIn && (
          <Stack.Group
            navigationKey="Auth"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Group>
        )}

        <Stack.Group navigationKey="App" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Product" component={Product} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
