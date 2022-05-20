import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailVerify from '../Pages/EmailVerify';
import PasswordVerify from '../Pages/PasswordVerify';
import { useState } from 'react';
import ProtectedRouter from '../ProtectedRouter';
import Register from '../Pages/Register';


const Router = () => {

  const [auth, setAuth] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmailVerify />} />
        <Route path="create-account" element={<Register />} />
        <Route path='*' element={<h1>Page not found</h1>} />
        <Route
          path="/verify-password/userToken/:token"
          element={
            <ProtectedRouter Component={PasswordVerify} authState={auth} />
          } />
      </Routes>
    </BrowserRouter>
  )
}
export default Router