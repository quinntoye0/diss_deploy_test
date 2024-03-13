import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Button } from './Button';
import '../App.css';
import './SignInForm.css';

function SignInForm() {

  const history=useNavigate();

  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

  async function submit(e){
    e.preventDefault();

    try {
      await axios.post('/sign-in', {
        email, password
      })
      .then(res=>{
        if (res.data=='email exists') {
          history('/logged-in', {state:{id:email}})
        } else if (res.data=='email does not exist') {
          alert('Account not found')
        }
      })
      .catch(e=>{
        alert('incorrect details');
        console.log(e);
      })

      
    } catch(e){
      console.log(e);
    }
  }

  return (
    <div className='sign-in'>
        
        <div className='sign-in-form'>
          <form action="POST">
            <h1 className='sign-in-heading'>Sign In Here</h1>
            <input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' placeholder='Email' className='sign-in-input' />
            <input type='password' onChange={(e)=>{setPassword(e.target.value)}} name='password' placeholder='Password' className='sign-in-input' />
            
            <input type='submit' onClick={submit} /> 

            {/* need to sort the button to actually work. another day though */}
            <Button buttonStyle='btn--outline'>Sign In!</Button>  
          </form>
        </div>
    </div>
    
  )
}

export default SignInForm