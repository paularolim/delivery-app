import React, { useCallback, useEffect, useMemo, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { AuthContext } from './context';
import { AuthContextProps, AuthProviderProps, LoginParams } from './types';
import { authLogin } from '../../services/authentication';
import { useUserStore } from '../../states/user';

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser]);
  const [loading, setLoading] = useState(true);

  const login = useCallback(async ({ email, password }: LoginParams) => {
    const response = await authLogin({ email, password });
    if (response?.token) {
      const decoded = jwtDecode<{ id: string; name: string }>(response.token);
      setUser({ id: decoded?.id || '', name: decoded?.name || '' });
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const value: AuthContextProps = useMemo(
    () => ({
      isLoggedIn: Boolean(user),
      user,
      login,
      logout,
      loading,
    }),
    [user, loading],
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
