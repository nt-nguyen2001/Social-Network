import { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    user.isLogin !== undefined && setIsAllowed(LoadingState.finished);
  }, [user.isLogin]);

  if (isAllowed === LoadingState.loading) {
    return <div>Loading</div>;
  }
  if (role === Number(user.role) && isAllowed === LoadingState.finished) {
    return children;
  }
  return Navigate({ to: path });
}
