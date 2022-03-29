import React from 'react'
import ErrorLogo from './ErrorLogo'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import getHost from '../utils/getHost'
import apiCall from '../utils/axios'

const EmailVerify = () => {

  const [email, setEmail] = React.useState('')
  const [isError, setIsError] = React.useState('')
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
  })

  // handle enter key detection
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleNextClick()
    }
  }

  const handleNextClick = () => {
    if (!email.length || email.includes('.') === false || email.includes('@') === false) {
      setIsError('Enter valid email address')
      inputErrorState.current.focus()
      inputErrorState.current.style.borderColor = 'red'
    }
    else {
      apiCall(`/e/challenge/v1/verify/?e=${email}&url=${getHost()}`,email).then(()=>{
        cookies.set('red_',true)
        return navigate('/password-verify')
      }).catch((e)=>{
        console.log(e)
      })
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
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default EmailVerify


function data(arg0: string, data: any, arg2: { email: string }) {
  throw new Error('Function not implemented.')
}

