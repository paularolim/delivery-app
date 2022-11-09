/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';

export interface LoginParams {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
}

export interface AuthContextProps {
  isLoggedIn: boolean;
  user: User | null;
  login: ({ email, password }: LoginParams) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

export interface AuthProviderProps {
  children: ReactNode;
}
