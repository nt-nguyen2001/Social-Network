import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../Api/User.api';

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
    getUser()
      .then((type) => {
        if (type?.status === 200) {
          return type?.json();
        } else return 400;
      })
      .then((data) => {
        if (data === 400) {
          navigate('/Login');
        } else {
          setIsLogin(true);
        }
      })
      .catch((err) => {
        console.log('🚀 ~ file: Authentication.Context.tsx ~ line 33 ~ useEffect ~ err', err);
      });
  }, []);
  return (
    <AuthenticationContext.Provider value={{ isLogin }}>{children}</AuthenticationContext.Provider>
  );
}
