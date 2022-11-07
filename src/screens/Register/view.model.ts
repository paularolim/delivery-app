import { useState } from 'react';
import { authRegister } from '../../services/authentication/signup';
import { RegisterViewModel, ScreenProps } from './types';

export function useRegisterViewModel({ navigation }: ScreenProps): RegisterViewModel {
  const [secureMode, setSecureMode] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLogin = (): void => {
    navigation.navigate('Login');
  };

  // eslint-disable-next-line max-len
  const handleSignUp = async (name: string, email: string, password: string, phone: string): Promise<void> => {
    setLoading(true);
    const response = await authRegister({ name, email, password, phone });
    if (response) {
      navigation.navigate('Login');
    }
    setLoading(false);
  };

  const toggleSecure = (): void => {
    setSecureMode(!secureMode);
  };

  return {
    handleLogin,
    handleSignUp,
    toggleSecure,
    secureMode,
    loading,
  };
}
