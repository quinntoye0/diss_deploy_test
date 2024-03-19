import React from 'react';
import { Button } from './Button';
import '../App.css'
import './CreateAccountForm.css'

function CreateAccountForm() {

  return (
    <div className='create-account'>
        
        <div className='create-account-form'>
          <form method='POST' action='http://localhost:9000/create-account'>
            <h1 className='create-account-heading'>Create Account!</h1>

            <input type='email' name='email' placeholder='Email' className='create-account-input' required />
            <input type='password' name='password' placeholder='Password' className='create-account-input' required />
            {/* <input type='password' name='password_conf' placeholder='Confirm Password' className='create-account-input' required /> */}
            
            <p>By creating an account you accept the <a href='/'>Terms and Conditions</a></p>

            <input type='submit' />

            {/* need to sort the button to actually work. another day though */}
            <Button type='submit' buttonStyle='btn--outline'>Create Account!</Button>
            
          </form>
        </div>

    </div>
  )
}

export default CreateAccountForm
