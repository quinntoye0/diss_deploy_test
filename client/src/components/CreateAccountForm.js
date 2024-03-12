import React from 'react'
import { Button } from './Button';
import '../App.css'
import './CreateAccountForm.css'

function CreateAccountForm() {
  return (
    <div className='create-account'>
        
        <div className='create-account-form'>
          <form>
            <h1 className='create-account-heading'>Create Account!</h1>

            <input type='email' name='email' placeholder='Email' className='create-account-input' />
            <input type='password' name='password' placeholder='Password' className='create-account-input' />
            <input type='password' name='password-conf' placeholder='Confirm Password' className='create-account-input' />
            
            <p>By creating an account you accept the <a href='/'>Terms and Conditions</a></p>

            <Button buttonStyle='btn--outline'>Create Account!</Button>
            
          </form>
        </div>

    </div>
  )
}

export default CreateAccountForm