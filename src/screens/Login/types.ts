/* eslint-disable no-unused-vars */
export interface LoginViewModel {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLogin: () => Promise<void>;
}
