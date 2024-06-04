import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";

import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />}/>
      <Route path='*' element={<PageNotFound />}/>
    </Routes>
  );
}

export default App;
