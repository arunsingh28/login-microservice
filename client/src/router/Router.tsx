import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import EmailVerify from '../components/EmailVerify';
import PasswordVerify from '../components/PasswordVerify';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmailVerify />} />
        <Route path='/password-verify' element={<PasswordVerify />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router