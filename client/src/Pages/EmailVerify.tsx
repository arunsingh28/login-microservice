import React from 'react'
import ErrorLogo from './ErrorLogo'
import { useNavigate, useLocation } from 'react-router-dom'
import animatedSvg from '../assets/Rolling.gif'

const EmailVerify = () => {

  const [email, setEmail] = React.useState('')
  const [isError, setIsError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const inputErrorState = React.useRef<HTMLInputElement | any>()
  const [errorMessage, setErrorMessage] = React.useState('')

  const location = useLocation()

  const callbackURL = location.search.slice(7)
  let cbName: any;
  
  if (callbackURL === '') {
    cbName = prompt('Please enter fallback url. example https://facebook.com')
    if (cbName == null || cbName == '') {
      alert('Please enter the fallback url it require.')
    }else{
      window.location.href = `https://login-microservice.vercel.app/?UrlCB=${cbName}`
    }
  }
  console.log('url ',cbName)



  const navigate = useNavigate()


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

  async function getVerifyEmail() {
    await fetch(`https://login-microservice12.herokuapp.com/e/challenge/v1/verify?url=${callbackURL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    }).then(res => res.json())
      .then(data => {
        if (data.authState === 0) {
          setIsLoading(false)
          setErrorMessage(data.message)
        }
        else navigate(`/verify-password?id=${email}&callbackurl=${callbackURL}`)
      })
  }

  const handleNextClick = async () => {
    if (!email.length || email.includes('.') === false || email.includes('@') === false) {
      setIsError('Enter valid email address')
      inputErrorState.current.focus()
      inputErrorState.current.style.borderColor = 'red'
    }
    else {
      setIsLoading(true)
      getVerifyEmail()
    }
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
          <a href="https://login-microservice12.herokuapp.com">Create account</a>
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
