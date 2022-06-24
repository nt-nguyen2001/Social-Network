import { FetchResponse } from '../Models';

export async function getUser<T>(params: string = ''): Promise<FetchResponse<T>> {
  const res = await fetch(`${process.env.REACT_APP_URL}/api/users${params}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  return await res.json();
}
