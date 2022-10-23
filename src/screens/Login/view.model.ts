import { useState } from 'react';
import { useAuth } from '../../contexts/Auth';
import { LoginViewModel, ScreenProps } from './types';

export function useLoginViewModel({ navigation }: ScreenProps): LoginViewModel {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleLogin = async (): Promise<void> => {
    login({ email, password });
  };

  const handleSignUp = (): void => {
    navigation.navigate('Register');
  };

  return { handleLogin, handleSignUp, setEmail, setPassword };
}
