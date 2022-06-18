export function getUser() {
  return fetch(`${process.env.REACT_APP_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}
