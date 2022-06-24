import { useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../Context/Authentication.Context';
import { LoadingState, Role } from '../Models';

export function ProtectedRouter({
  children,
  role,
}: {
  children: JSX.Element;
  role?: Role | undefined | null;
}) {
  const [isAllowed, setIsAllowed] = useState<LoadingState>(LoadingState.loading);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    user.isLogin ?? setIsAllowed(LoadingState.finished);
  }, [user.isLogin]);
  if (isAllowed === LoadingState.loading) {
    return <div>Loading</div>;
  }
  if (role === user.role) {
    console.log('?:D?', role, user.role);
    return children;
  }
  return <div>Navigate</div>;
}
