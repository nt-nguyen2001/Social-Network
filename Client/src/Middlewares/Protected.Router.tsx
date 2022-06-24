import { useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../Context/Authentication.Context';
import { LoadingState, Role } from '../Models';

export function ProtectedRouter({
  children,
  role,
  path = '404',
}: {
  children: JSX.Element;
  role?: Role;
  path?: string;
}) {
  const [isAllowed, setIsAllowed] = useState<LoadingState>(LoadingState.loading);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    user.isLogin !== undefined && setIsAllowed(LoadingState.finished);
  }, [user.isLogin]);

  if (isAllowed === LoadingState.loading) {
    return <div>Loading</div>;
  }
  if (role === Number(user.role) && isAllowed === LoadingState.finished) {
    return children;
  }
  return <div>Navigate {path}</div>;
}
