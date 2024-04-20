import React from 'react';
import { Button } from './Button';
import '../App.css'
import './CreateForm.css'
import axios from 'axios';

function CreateAccountForm() {

  const handleCreateAccount = async (event) => {
    event.preventDefault(); // Prevent default form submission
  
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    try {
      const response = await axios.post('https://diss-deploy-test.vercel.app/create-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        window.location.href = '/sign-in';
      } else {
        console.log('error: network issues')
        alert('Account Creation Error: Try again')
        window.location.href = '/create-account';
      }
    } catch (error) {
      console.error(error);
      window.location.href = '/';
    }
  };

  return (
    <div className='create-splash'>
        
        <div className='create-form'>
          <form onSubmit={handleCreateAccount} method='POST' action='/sign-in'>
            <h1 className='create-heading'>Create Account!</h1>

            <input type='email' name='email' placeholder='Email' className='create-input' required />
            <input type='password' name='password' placeholder='Password' className='create-input' required />

            <p>By creating an account you accept the <a href='/'>Terms and Conditions</a></p>

            <Button type='submit' buttonStyle='btn--outline'>Create Account!</Button>
          </form>
        </div>

    </div>
  )
}

export default CreateAccountForm
