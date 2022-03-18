import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import EmailVerify from '../components/EmailVerify';
import PasswordVerify from '../components/PasswordVerify';
import { AnimatePresence, motion } from 'framer-motion'

const Router = () => {
  const location = useLocation()
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={{
        initial: { opacity: 0 },
        in: { opacity: 1 },
        out: { opacity: 0 }
      }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 50
      }}
    >
      <BrowserRouter>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route element={<EmailVerify />} />
            <Route path='/password-verify' element={<PasswordVerify />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </motion.div>
  )
}
export default Router