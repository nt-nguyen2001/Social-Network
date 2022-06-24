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
  isLogin: boolean | undefined;
  role: Role | undefined;
  userID: string;
  userName: string;
};

export const AuthenticationContext = createContext<LoginContext<UserLogin>>({
  user: {
    isLogin: undefined,
    userID: '',
    userName: '',
    role: undefined,
  },
  setUser: (state: UserLogin) => {},
});

export default function AuthenticationProvider({ children }: { children: JSX.Element }) {
  // const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState<UserLogin>({
    isLogin: undefined,
    userID: '',
    userName: '',
    role: undefined,
  });
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const res = await getUser();
        const data: FetchResponse<{ role: Role } & User> = await res.json();
        if (data.status === 400) {
          const responseRefreshToken = await RefreshToken();
          const dataRefreshToken: FetchResponse<{ role: Role } & User> =
            await responseRefreshToken.json();
          if (dataRefreshToken.status === 200) {
            setUser({
              role: dataRefreshToken.payload[0].role,
              userID: dataRefreshToken.payload[0].userID,
              userName: dataRefreshToken.payload[0].userName,
              isLogin: true,
            });
            return;
          }
        }
        setUser({
          role: data.payload[0].role,
          userID: data.payload[0].userID,
          userName: data.payload[0].userName,
          isLogin: true,
        });
      } catch (err) {
        console.log('🚀 ~ file: Authentication.Context.tsx ~ line 33 ~ useEffect ~ err', err);
        // navigate to 404
      }
    })();
  }, []);
  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
