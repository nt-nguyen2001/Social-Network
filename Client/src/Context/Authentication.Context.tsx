import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RefreshToken } from '../Api/Authentication.api';
import { getUser } from '../Api/User.api';
import { FetchResponse } from '../Models';

interface LoginContext {
  isLogin: boolean;
  setIsLogin?: (state: boolean) => void;
}

export const AuthenticationContext = createContext<LoginContext>({
  isLogin: false,
  setIsLogin: (state: boolean) => {},
});

export default function AuthenticationProvider({ children }: { children: JSX.Element }) {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const res = await getUser();
        const data: FetchResponse = await res.json();
        console.log(data);
        if (data.error === 400 && data.message === 'jwt expired') {
          RefreshToken();
        } else {
          navigate('/Login');
        }
      } catch (err) {
        console.log('🚀 ~ file: Authentication.Context.tsx ~ line 33 ~ useEffect ~ err', err);
      }
    })();
  }, []);
  return (
    <AuthenticationContext.Provider value={{ isLogin }}>{children}</AuthenticationContext.Provider>
  );
}
