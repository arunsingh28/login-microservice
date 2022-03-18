import React from 'react'
import ErrorLogo from './ErrorLogo'
import { useNavigate } from 'react-router-dom'



const PasswordVerify = () => {

  const [password, setPassword] = React.useState('')
  const [isError, setIsError] = React.useState('')
  const inputErrorState = React.useRef<HTMLInputElement | any>()
  const navigate = useNavigate()


  React.useEffect(() => {
    if (inputErrorState.current) {
      inputErrorState.current.focus()
    }
    document.addEventListener('keydown', handleKeyDown)
  })

  // handle enter key detection
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleLoginClick()
    }
  }

  const handleLoginClick = () => {
    // logic to check password
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
            placeholder='Email password'
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
          <a href="http://localhost:80/register"></a>
          <button onClick={handleLoginClick}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default PasswordVerify


