import { BrowserRouter, Route, Routes, Navigate, } from 'react-router-dom';
import EmailVerify from '../Pages/EmailVerify';
import PasswordVerify from '../Pages/PasswordVerify';
import React, { useState } from 'react';
import ProtectedRouter from '../ProtectedRouter';


const Router = () => {

  const [auth, setAuth] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmailVerify  state={setAuth} authState={auth}/>} />
        <Route path='*' element={<h1>Page not found</h1>} />
        <Route
          path="/private"
          element={
            <ProtectedRouter Component={PasswordVerify} authState={auth} />
          } />
      </Routes>
    </BrowserRouter>
  )
}
export default Router