/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';

export interface LoginParams {
  email: string;
  password: string;
}

export interface User {
  name: string;
}

export interface AuthContextProps {
  isLoggedIn: boolean;
  user: User | null;
  login: ({ email, password }: LoginParams) => Promise<void>;
  logout: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
