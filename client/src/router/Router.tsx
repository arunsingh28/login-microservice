import { BrowserRouter, Route, Routes, Navigate, } from 'react-router-dom';
import EmailVerify from '../components/EmailVerify';
import PasswordVerify from '../components/PasswordVerify';
import React from 'react';


const Router = () => {
  const [state, setState] = React.useState()

  if (state == "true") {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmailVerify />} />
          <Route path="/password-verify" element={<PasswordVerify />} />
          <Route path="*" element={<h1>Hello world</h1>} />
        </Routes>
      </BrowserRouter>
    )
  }
  else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmailVerify />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
export default Router