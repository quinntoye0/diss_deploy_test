import React from 'react';
import { Button } from './Button';
import '../App.css';
import './SignInForm.css';

function SignInForm() {

  return (
    <div className='sign-in'>
        
        <div className='sign-in-form'>
          <form method="POST" action="http://localhost:9000/sign-in">
            <h1 className='sign-in-heading'>Sign In Here</h1>
            <input type='email' name='email' placeholder='Email' className='sign-in-input' required />
            <input type='password' name='password' placeholder='Password' className='sign-in-input' required />

            <input type='submit' />

            {/* need to sort the button to actually work. another day though */}
            <Button type='submit' buttonStyle='btn--outline'>Sign In!</Button>  
          </form>
        </div>
    </div>
    
  )
}

export default SignInForm








  // const history=useNavigate();

  // const [email, setEmail]=useState('');
  // const [password, setPassword]=useState('');

  // async function submit(e){
  //   e.preventDefault();

  //   try {
  //     await axios.post('/sign-in', {
  //       email, password
  //     })
  //     .then(res=>{
  //       if (res.data=='email exists') {
  //         history('/logged-in', {state:{id:email}})
  //       } else if (res.data=='email does not exist') {
  //         alert('Account not found')
  //       }
  //     })
  //     .catch(e=>{
  //       alert('incorrect details');
  //       console.log(e);
  //     })

      
  //   } catch(e){
  //     console.log(e);
  //   }
  // }
