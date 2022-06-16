import { useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../Context/Authentication.Context';

type protect = 'role' | 'login';

export function ProtectedRouter({ children }: { children: JSX.Element }) {
  const [isAllowed, setIsAllowed] = useState<string | boolean>('waiting');
  const { isLogin } = useContext(AuthenticationContext);

  useEffect(() => {
    if (isLogin) {
      setIsAllowed(isLogin);
    }
  }, [isLogin]);
  if (isAllowed === 'waiting') {
    return <div>Loading</div>;
  }
  return children;
}
