import create from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../../contexts/Auth';
import { UserState } from './types';

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      token: null,
      user: null,
      setToken: (token: string | null) => set({ token }),
      setUser: (user: User | null) => set({ user }),
    }),
    {
      name: 'user-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);
