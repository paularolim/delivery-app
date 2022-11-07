/* eslint-disable no-unused-vars */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreens } from '../../routes';

export type ScreenProps = NativeStackScreenProps<StackScreens, 'Register'>;

export interface RegisterViewModel {
  handleLogin: () => void;
  handleSignUp: (name: string, email: string, password: string, phone: string) => Promise<void>;
  secureMode: boolean;
  toggleSecure: () => void;
}
