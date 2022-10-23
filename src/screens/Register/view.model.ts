import { RegisterViewModel, ScreenProps } from './types';

export function useRegisterViewModel({ navigation }: ScreenProps): RegisterViewModel {
  const handleLogin = (): void => {
    navigation.navigate('Login');
  };

  return { handleLogin };
}
