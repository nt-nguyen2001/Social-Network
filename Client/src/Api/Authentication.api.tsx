import { FetchResponse, User } from '../Models';

export async function loginAPI<T>(payload: {
  account: string;
  password: string;
}): Promise<FetchResponse<T>> {
  const res = await fetch(`${process.env.REACT_APP_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      payload,
    }),
  });
  return await res.json();
}
export function registerAPI(payload: User) {
  return fetch(`${process.env.REACT_APP_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      payload,
    }),
  });
}

export function RefreshToken() {
  return fetch(`${process.env.REACT_APP_URL}/api/auth/refreshToken`, {
    credentials: 'include',
  });
}
