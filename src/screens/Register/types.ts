/* eslint-disable no-unused-vars */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreens } from '../../routes';

export type ScreenProps = NativeStackScreenProps<StackScreens, 'Register'>;

export interface RegisterViewModel {
  handleLogin: () => void;
}
