import React from 'react'

const EmailVerify = () => {

  const [email, setEmail] = React.useState('')
  const [isError, setIsError] = React.useState(false)

  const handleNextClick = () => {
    if (email.length === 0) {
      setIsError(true)
      alert('true')
    } else {
      alert('false')
      setIsError(false)
    }
  }

  return (
    <div className='root_wrapper'>
      <div className='email_wrapper'>
        <div className='email_header'>
          <h2>Arun' Auth</h2>
          <p>Use your A Auth service Account</p>
        </div>
        <div className='email_form'>
          <input type="text" placeholder='Email address' />
          <div>
            <a href="/">Forgot email ?</a>
          </div>
        </div>
        <div className='other_btn'>
          <div className='c_account'>
            <a href="/">Create account</a>
          </div>
          <div className='next_btn'>
            <button onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailVerify