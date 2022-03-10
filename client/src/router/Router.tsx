import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmailVerify from '../components/EmailVerify'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmailVerify />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router