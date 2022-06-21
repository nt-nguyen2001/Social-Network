export function mailRegister(account: string) {
  fetch(`${process.env.REACT_APP_URL}/api/email/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      account,
    }),
  });
}
