/* eslint-disable no-unused-vars */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreens } from '../../routes';

export type ScreenProps = NativeStackScreenProps<StackScreens, 'Login'>;
export interface LoginViewModel {
  handleLogin: (email: string, password: string) => Promise<void>;
  handleSignUp: () => void;
  secureMode: boolean;
  toggleSecure: () => void;
  loading: boolean;
  error: boolean;
}
