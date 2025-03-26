import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utils/Validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data
    const nameValue = isSignInForm ? document.querySelector("input[placeholder='Full Name']").value.trim() : "";
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const message = checkValidate(nameValue, emailValue, passwordValue);
    setErrorMessage(message);

    // Sign In/Sign Up Process
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='logo'/>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign Up" : "Sign In"}</h1>
        {isSignInForm && (<input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}
        <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
        <input ref={password} type='password' placeholder='password' className='p-4 my-4 w-full bg-gray-700'/>
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-600 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign Up" : "Sign In"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "Already Registered? Sign In" : "New to Netflix? Sign Up Now"}</p>
      </form>
    </div>
  )
}

export default Login
