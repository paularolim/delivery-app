import { NavigatorScreenParams } from '@react-navigation/native';

export type DrawerScreens = {
  Product: undefined;
};

export type StackScreens = {
  Login: undefined;
  Register: undefined;
  AppRoutes: NavigatorScreenParams<DrawerScreens>;
};
