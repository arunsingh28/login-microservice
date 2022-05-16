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
        <Route path="/" element={<EmailVerify />} />
        <Route element={<ProtectedRouter />}>
          <Route path="/password-verify" element={<PasswordVerify />} />
        </Route>
        <Route path='*' element={<h1>Page not found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default Router