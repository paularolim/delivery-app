/* eslint-disable no-unused-vars */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreens } from '../../routes';

export type ScreenProps = NativeStackScreenProps<StackScreens, 'Register'>;

export interface RegisterViewModel {
  handleLogin: () => void;
  handleSignUp: () => Promise<void>;
  setName: (text: string) => void;
  setEmail: (text: string) => void;
  setPassword: (text: string) => void;
  setPhone: (text: string) => void;
}
