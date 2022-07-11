import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailVerify from '../Pages/EmailVerify';
import PasswordVerify from '../Pages/PasswordVerify';
import Register from '../Pages/Register';


const Router = () => {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmailVerify />} />
        <Route path="create-account" element={<Register />} />
        <Route path='*' element={<h1>Page not found</h1>} />
        <Route path="/verify-password" element={<PasswordVerify />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router