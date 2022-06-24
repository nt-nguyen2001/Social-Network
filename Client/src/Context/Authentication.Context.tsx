import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RefreshToken } from '../Api/Authentication.api';
import { getUser } from '../Api/User.api';
import { FetchResponse, Role, User } from '../Models';

interface LoginContext<T> {
  user: T;
  setUser?: (state: T) => void;
}
type UserLogin = {
  isLogin?: boolean;
  role: Role;
  userID?: string;
  userName?: string;
};

export const AuthenticationContext = createContext<LoginContext<UserLogin>>({
  user: {
    isLogin: undefined,
    userID: '',
    userName: '',
    role: Role.no,
  },
  setUser: (state: UserLogin) => {},
});

export default function AuthenticationProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<UserLogin>({
    isLogin: undefined,
    userID: '',
    userName: '',
    role: Role.no,
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await getUser<{ role: Role } & User>();
        if (res.status === 200) {
          setUser({
            role: res?.payload?.[0].role || Role.no,
            userID: res?.payload?.[0].userID,
            userName: res?.payload?.[0].userName,
            isLogin: true,
          });
          return;
        }
        if (res.status === 400) {
          const responseRefreshToken = await RefreshToken();
          const dataRefreshToken: FetchResponse<{ role: Role } & User> =
            await responseRefreshToken.json();
          if (dataRefreshToken.status === 200) {
            setUser({
              role: dataRefreshToken?.payload?.[0].role || Role.no,
              userID: dataRefreshToken?.payload?.[0].userID,
              userName: dataRefreshToken?.payload?.[0].userName,
              isLogin: true,
            });
            return;
          }
        }
        throw 'No Login!';
      } catch (err) {
        console.log('🚀 ~ file: Authentication.Context.tsx ~ line 33 ~ useEffect ~ err', err);
        // navigate to 404
        setUser({
          ...user,
          isLogin: false,
        });
      }
    })();
  }, []);
  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
