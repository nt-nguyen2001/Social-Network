import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AuthenticationProvider from './Context/Authentication.Context';
import Routes from './Routes';
function App() {
  return (
    <AuthenticationProvider>
      <Routes />
    </AuthenticationProvider>
  );
}

export default App;
