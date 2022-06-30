import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AuthenticationProvider from './Context/Authentication.Context';
import { WidthDeviceProvider } from './Context/WidthDevice.Context';
import Routes from './Routes';
function App() {
  return (
    <AuthenticationProvider>
      <WidthDeviceProvider>
        <Routes />
      </WidthDeviceProvider>
    </AuthenticationProvider>
  );
}

export default App;
