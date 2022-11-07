import { useState } from 'react';
import { useAuth } from '../../contexts/Auth';
import { LoginViewModel, ScreenProps } from './types';

export function useLoginViewModel({ navigation }: ScreenProps): LoginViewModel {
  const [secureMode, setSecureMode] = useState(true);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleLogin = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    await login({ email, password });
    setLoading(false);
  };

  const handleSignUp = (): void => {
    navigation.navigate('Register');
  };

  const toggleSecure = (): void => {
    setSecureMode(!secureMode);
  };

  return { handleLogin, handleSignUp, toggleSecure, secureMode, loading };
}
