import React, { useCallback, useMemo, useState } from 'react';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { AuthContext } from './context';
import { AuthContextProps, AuthProviderProps, LoginParams, User } from './types';
import { authLogin } from '../../services/authentication';

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback(async ({ email, password }: LoginParams) => {
    const response = await authLogin({ email, password });
    if (response?.token) {
      const decoded = jwt_decode<{ id: string; name: string }>(response.token);
      setUser({ id: decoded?.id || '', name: decoded?.name || '' });
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
