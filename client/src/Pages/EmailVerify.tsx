import React from 'react'
import ErrorLogo from './ErrorLogo'
import { useNavigate } from 'react-router-dom'
<<<<<<< HEAD:client/src/Pages/EmailVerify.tsx
import { useAuth } from '../ProtectedRouter'
=======
import Cookies from 'universal-cookie'
import getHost from '../utils/getHost'
import apiCall from '../utils/axios'
import animatedSvg from '../assets/Rolling.gif'
>>>>>>> 1ef3f1c3549415383c39bb5e9ceea32368b4d865:client/src/components/EmailVerify.tsx

const EmailVerify = () => {

  const [email, setEmail] = React.useState('')
  const [isError, setIsError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [data, setData] = React.useState()
  const inputErrorState = React.useRef<HTMLInputElement | any>()
  const navigate = useNavigate()


  // localhost:80/e/challenge/v1/verify/?e=arunsingh28aug.as@gmail.co&url=localhost:80


  // init cookies 
  const cookies = new Cookies()


  React.useEffect(() => {
    if (inputErrorState.current) {
      inputErrorState.current.focus()
    }
    document.addEventListener('keydown', handleKeyDown)
  }, [])

  // handle enter key detection
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleNextClick()
    }
  }

  const handleNextClick = async () => {
    if (!email.length || email.includes('.') === false || email.includes('@') === false) {
      setIsError('Enter valid email address')
      inputErrorState.current.focus()
      inputErrorState.current.style.borderColor = 'red'
    }
    else {
<<<<<<< HEAD:client/src/Pages/EmailVerify.tsx
      const authState = useAuth()
      authState(isLogged)
      localStorage.setItem('red_', "true")
      return navigate('/password-verify')
=======
      setIsError('')
      // setIsLoading(true)
      // const c = await apiCall(``, 'POST', email)
      const urll = `/e/challenge/v1/verify/?e=${email}&url=${getHost()}`
      // const c = await apiCall(`/e/challenge/v1/verify/?e=${email}&url=${getHost()}`, 'POST', email)
      // console.log('CALL', c)

      fetch(`http://localhost:80${urll}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      }).then(async res => {
        console.log(setData(await res.json()))
      }).catch(err => console.log(err))
      console.log(data)
>>>>>>> 1ef3f1c3549415383c39bb5e9ceea32368b4d865:client/src/components/EmailVerify.tsx
    }
  }

  return (
    <div className='root_wrapper'>
      <div className='email_wrapper'>
        <div className='email_header'>
          <h2>Arun's Auth</h2>
          <p>Use your A Auth service Account</p>
        </div>
        <div className='email_form'>
          <input type="email"
            placeholder='Email address'
            onChange={(e) => setEmail(e.target.value)}
            className='email_input'
            ref={inputErrorState}
          />
          {
            isError.length > 0 && (
              <div id='error_message'>
                <ErrorLogo />
                <span>{isError}</span>
              </div>
            )
          }
          <div>
            <a href="/forgot-email">Forgot email ?</a>
          </div>
        </div>
        <div className='other_btn'>
          <a href="http://localhost:80/register">Create account</a>
          <button onClick={handleNextClick} className="flex" disabled={isLoading}>
            {
              isLoading ? <img src={animatedSvg} height="20" /> : 'Next'
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmailVerify
