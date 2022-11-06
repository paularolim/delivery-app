/* eslint-disable no-unused-vars */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreens } from '../../routes';

export type ScreenProps = NativeStackScreenProps<StackScreens, 'Login'>;
export interface LoginViewModel {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLogin: () => Promise<void>;
  handleSignUp: () => void;
  secureMode: boolean;
  toggleSecure: () => void;
}
