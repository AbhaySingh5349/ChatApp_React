import React from 'react';
import Login from './components/Auth/Login';
import MainContainer from './components/MainContainer';
import Signup from './components/Auth/Signup';

import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-backdrop-primary-500 flex items-center justify-center">
      <MainContainer />
      {/* <Login /> */}
      {/* <Signup /> */}
    </div>
  );
}

export default App;
