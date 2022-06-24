import { useRoutes } from 'react-router-dom';
import { ProtectedRouter } from '../Middlewares/Protected.Router';
import { Role } from '../Models';
import Login from '../Pages/Authentication/Login';
import Register from '../Pages/Authentication/Register';
import BoxMessages from '../Pages/Messages/Box';

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/Login',
      element: (
        <ProtectedRouter role={Role.no} path={'Home'}>
          <Login />
        </ProtectedRouter>
      ),
    },
    {
      path: '/Register',
      element: (
        <ProtectedRouter role={Role.no} path={'Home'}>
          <Register />
        </ProtectedRouter>
      ),
    },
    {
      path: '/Messages',
      element: (
        <ProtectedRouter role={Role.users}>
          <BoxMessages />
        </ProtectedRouter>
      ),
    },
  ]);
  return routes;
};
export default Routes;
