import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
