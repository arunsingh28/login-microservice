import { BrowserRouter, Route, Routes, Navigate, } from 'react-router-dom';
import EmailVerify from '../Pages/EmailVerify';
import PasswordVerify from '../Pages/PasswordVerify';
import React, { useState } from 'react';
import ProtectedRouter from '../ProtectedRouter';


const Router = () => {
<<<<<<< HEAD
=======
  const [state, setState] = React.useState()
>>>>>>> 1ef3f1c3549415383c39bb5e9ceea32368b4d865

  const [auth, setAuth] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmailVerify />} />
        <Route element={<ProtectedRouter />}>
          <Route path="/password-verify" element={<PasswordVerify />} />
<<<<<<< HEAD
        </Route>
        <Route path='*' element={<h1>Page not found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
=======
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
>>>>>>> 1ef3f1c3549415383c39bb5e9ceea32368b4d865
}
export default Router