import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailVerify from '../components/EmailVerify';
import PasswordVerify from '../components/PasswordVerify';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import '../styles/App.scss'
const Router = () => {
  return (
    <BrowserRouter>
      <TransitionGroup>
        <CSSTransition
          timeout={300}
          classNames="fade"
        >
          <Routes>
            <Route path='/' element={<EmailVerify />} />
            <Route path='/password-verify' element={<PasswordVerify />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </BrowserRouter>
  )
}
export default Router