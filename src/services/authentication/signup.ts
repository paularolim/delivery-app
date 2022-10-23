import { httpClient } from '../httpClient';
import { RegisterParams, RegisterResponse } from './types';

export async function authRegister({
  name,
  email,
  password,
  phone,
}: RegisterParams): Promise<RegisterResponse | null> {
  console.log('authRegister params', { name, email, password, phone });

  try {
    const response = await httpClient.post('/signup', { name, email, password, phone });
    if (response?.status === 200 && response?.data) {
      console.log('authRegister success: register return status 200');
      return { ...response.data };
    }

    console.log('authRegister error: something went wrong');
    return null;
  } catch (error) {
    const typedError = error as Error;

    if (typedError?.message === 'Request failed with status code 400') {
      console.log('authRegister error: incorrect data');
    } else {
      console.log('authRegister error: something went wrong');
    }

    return null;
  }
}
