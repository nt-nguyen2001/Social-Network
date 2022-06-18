import { User } from '../Models';

export function loginAPI(payload: { account: string; password: string }) {
  return fetch(`${process.env.REACT_APP_URL}/api/auth/login`, {
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
