/* eslint-disable operator-linebreak */
import { httpClient } from '../httpClient';
import { LoginParams, LoginResponse } from './types';

export async function authLogin({ email, password }: LoginParams): Promise<LoginResponse | null> {
  console.log('authLogin params', { email, password });

  try {
    const response = await httpClient.post('/login', { email, password });
    if (response?.status === 200 && response?.data?.accessToken) {
      console.log('authLogin success: login return status 200');
      return { token: response.data.accessToken || '' };
    }

    console.log('authLogin error: something went wrong');
    return null;
  } catch (error) {
    const typedError = error as Error;

    if (
      typedError?.message === 'Request failed with status code 400' ||
      typedError?.message === 'Request failed with status code 401'
    ) {
      console.log('authLogin error: incorrect email or password');
    } else {
      console.log('authLogin error: something went wrong');
    }

    return null;
  }
}
