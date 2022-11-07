import { useState } from 'react';
import { useAuth } from '../../contexts/Auth';
import { LoginViewModel, ScreenProps } from './types';

export function useLoginViewModel({ navigation }: ScreenProps): LoginViewModel {
  const [secureMode, setSecureMode] = useState(true);

  const { login } = useAuth();

  const handleLogin = async (email: string, password: string): Promise<void> => {
    login({ email, password });
  };

  const handleSignUp = (): void => {
    navigation.navigate('Register');
  };

  const toggleSecure = (): void => {
    setSecureMode(!secureMode);
  };

  return { handleLogin, handleSignUp, toggleSecure, secureMode };
}
