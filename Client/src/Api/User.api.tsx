export async function getUser() {
  try {
    return await fetch(`${process.env.REACT_APP_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
  } catch (err) {
    console.log('🚀 ~ file: User.api.tsx ~ line 12 ~ getUser ~ err', err);
  }
}
