import { useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../Context/Authentication.Context';
import { LoadingState } from '../Models';

export function ProtectedRouter({ children }: { children: JSX.Element }) {
  const [isAllowed, setIsAllowed] = useState<LoadingState>(LoadingState.loading);
  const { isLogin } = useContext(AuthenticationContext);

  useEffect(() => {
    if (isLogin) {
      setIsAllowed(LoadingState.finished);
    }
  }, [isLogin]);
  if (isAllowed === LoadingState.loading) {
    return <div>Loading</div>;
  }
  return children;
}
