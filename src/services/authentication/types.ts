export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface RegisterParams {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface RegisterResponse {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
}
