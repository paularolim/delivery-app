import { useState } from 'react';
import { authRegister } from '../../services/authentication/signup';
import { RegisterViewModel, ScreenProps } from './types';

export function useRegisterViewModel({ navigation }: ScreenProps): RegisterViewModel {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleLogin = (): void => {
    navigation.navigate('Login');
  };

  const handleSignUp = async (): Promise<void> => {
    const response = await authRegister({ name, email, password, phone });
    if (response) {
      navigation.navigate('Login');
    }
  };

  return {
    handleLogin,
    handleSignUp,
    setName,
    setEmail,
    setPassword,
    setPhone,
  };
}
