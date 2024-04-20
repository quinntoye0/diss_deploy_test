import React from 'react';
import { Button } from './Button';
import '../App.css';
import './SignInForm.css';

function SignInForm() {

  const handleSignIn = async (event) => {
    event.preventDefault(); // Prevent default form submission
  
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    try {
      const response = await fetch('https://diss-deploy-test.vercel.app/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data.token) { // Successful login
          localStorage.setItem('jwtToken', data.token); // Store token securely
          localStorage.setItem('currentUser', data.userID);
          window.location.href = '/';
        } else {
          console.log('unsuccessful login')
          alert('Incorrect login details. Please try again.')
          window.location.href = '/sign-in';
        }
      } else {
        console.log('error: network issues')
        window.location.href = '/';
      }
    } catch (error) {
      console.error(error);
      window.location.href = '/';
    }
  };

  return (
    <div className='sign-in'>
        
        <div className='sign-in-form'>
          <form onSubmit={handleSignIn} method="POST" action='/'>
            <h1 className='sign-in-heading'>Sign In Here</h1>
            
            <input type='email' name='email' placeholder='Email' className='sign-in-input' required />
            <input type='password' name='password' placeholder='Password' className='sign-in-input' required />

            <Button type='submit' buttonStyle='btn--outline'>Sign In!</Button>  
          </form>
        </div>
        
    </div>
    
  )
}

export default SignInForm
