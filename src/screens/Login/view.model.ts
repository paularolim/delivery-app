import { useState } from 'react';
import { useAuth } from '../../contexts/Auth';
import { LoginViewModel } from './types';

export function useLoginViewModel(): LoginViewModel {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleLogin = async (): Promise<void> => {
    login({ email, password });
  };

  return { handleLogin, setEmail, setPassword };
}
