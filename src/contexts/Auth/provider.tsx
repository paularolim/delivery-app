import React, { useCallback, useMemo, useState } from 'react';
import { AuthContext } from './context';
import { AuthContextProps, AuthProviderProps, LoginParams, User } from './types';
import { authLogin } from '../../services/authentication';

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback(async ({ email, password }: LoginParams) => {
    const response = await authLogin({ email, password });
    if (response?.token) {
      setUser({ name: 'Name from logged user' });
    }
  }, []);

  const logout = useCallback(() => {
    setUser(() => null);
  }, []);

  const value: AuthContextProps = useMemo(
    () => ({
      isLoggedIn: Boolean(user),
      user,
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
