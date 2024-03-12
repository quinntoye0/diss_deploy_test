import React from 'react'
import { Button } from './Button';
import '../App.css'
import './SignInForm.css'

function SignInForm() {
  return (
    <div className='sign-in'>
        
        <div className='sign-in-form'>
          <form>
            <h1 className='sign-in-heading'>Sign In Here</h1>
            <input type='email' name='email' placeholder='Email' className='sign-in-input' />
            <input type='password' name='password' placeholder='Password' className='sign-in-input' />
            <Button buttonStyle='btn--outline'>Sign In!</Button>
          </form>
        </div>
    </div>
    
  )
}

export default SignInForm