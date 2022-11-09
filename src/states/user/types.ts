import { User } from '../../contexts/Auth';

/* eslint-disable no-unused-vars */
export interface UserState {
  token: string | null;
  setToken: (token: string | null) => void;
  user: User | null;
  setUser: (user: User | null) => void;
}
