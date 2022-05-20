import React from 'react'
import { Link } from 'react-router-dom'
import ErrorLogo from '../components/ErrorLogo'
import { useNavigate } from 'react-router-dom'
import animatedSvg from '../assets/Rolling.gif'
import { useVerifyEmailQuery } from '../services/api'

const EmailVerify = () => {

  const [email, setEmail] = React.useState('')
  const [isError, setIsError] = React.useState('')
  const [isLoadingAnimation, setIsLoadingAnimation] = React.useState(false)
  const inputErrorState = React.useRef<HTMLInputElement | any>()


  const { data, error, isLoading, isSuccess, isFetching } = useVerifyEmailQuery()

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
      setIsLoadingAnimation(true)
    }
  }

  return (
    <div className='root_wrapper'>
      {
        isLoading && <h1>...Loading</h1>
      }
      {
        isSuccess && <h1>Success</h1>
      }
      {
        isFetching && <h1>...Fetching</h1>
      }
      {
        error && <h1>someting went wrong</h1>
      }
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
          <Link to="/create-account">Create account</Link>
          <button onClick={handleNextClick} className="flex" disabled={isLoadingAnimation}>
            {
              isLoadingAnimation ? <img src={animatedSvg} height="20" /> : 'Next'
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmailVerify
