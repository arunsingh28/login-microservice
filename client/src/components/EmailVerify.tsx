import React from 'react'
import ErrorLogo from './ErrorLogo'
import { useNavigate } from 'react-router-dom'



const EmailVerify = () => {

  const [email, setEmail] = React.useState('')
  const [isError, setIsError] = React.useState('')
  const inputErrorState = React.useRef<HTMLInputElement | any>()
  const navigate = useNavigate()

  // handle enter key detection
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      if (email.length) {
        setIsError('Enter email address')
        inputErrorState.current.focus()
        inputErrorState.current.style.borderColor = 'red'
      }
    }
  }

  React.useEffect(() => {
    if (inputErrorState.current) {
      inputErrorState.current.focus()
    }
    document.addEventListener('keydown', handleKeyDown)
  })

  const handleNextClick = () => {
    if (email.length === 0) {
      setIsError('Enter email address')
      inputErrorState.current.focus()
      inputErrorState.current.style.borderColor = 'red'
    } else {
      // if everything is ok, then navigate to next page

      return navigate('/password-verify')
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
          <input type="text"
            placeholder='Email address'
            onChange={(e) => setEmail(e.target.value)}
            className='email_input'
            ref={inputErrorState}
          />
          {
            isError.length > 0 && (
              <div id='error_message'>
                <div><ErrorLogo /></div>
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
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default EmailVerify


