import React from 'react'
import ErrorLogo from './ErrorLogo'
import { useLocation } from 'react-router-dom'
import animatedSvg from '../assets/Rolling.gif'
import Cookies from 'universal-cookie'

const PasswordVerify = () => {

  const [password, setPassword] = React.useState('')
  const [isError, setIsError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const inputErrorState = React.useRef<HTMLInputElement | any>()
  const [errorMessage, setErrorMessage] = React.useState('')

  const query = useLocation()
  const cookies = new Cookies()

  const email = query.search.split('&')[0].slice(4)
  const fallbackUrl = query.search.split('&')[1].slice(12)

  // handle enter key detection
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleLoginClick()
    }
  }

  React.useEffect(() => {
    if (inputErrorState.current) {
      inputErrorState.current.focus()
    }
    document.addEventListener('keydown', handleKeyDown)
  })

  async function getVerifyPassword() {
    await fetch(`https://login-microservice12.herokuapp.com/p/challenge/v2/verify-password?url=${fallbackUrl}&id=${email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password })
    }).then(res => res.json())
      .then(data => {
        if (data.authState === 0) {
          setIsLoading(false)
          setErrorMessage(data.message)
        }
        else {
          // everything is good
          cookies.set('access_token', data.access_token)
          setErrorMessage(data.message)
          window.location.href = fallbackUrl
        }
      })
  }

  const handleLoginClick = () => {
    // logic to check password
    getVerifyPassword()
  }

  return (
    <div className='root_wrapper'>
      <div className='email_wrapper'>
        <div className='email_header'>
          <h2>Arun's Auth</h2>
          <p>Use your A Auth service Account</p>
          {
            errorMessage && <div className='error-message'>{errorMessage}</div>
          }
        </div>
        <div className='email_form'>
          <input type="password"
            placeholder='Email password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            <a href="/forgot-email">Forgot password ?</a>
          </div>
        </div>
        <div className='other_btn'>
          <a href="/">back</a>
          <button onClick={handleLoginClick} className="flex" disabled={isLoading}>
            {
              isLoading ? <img src={animatedSvg} height="20" /> : 'Login'
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default PasswordVerify


