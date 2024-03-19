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







  // const history=useNavigate(); 

  // const [email, setEmail]=useState('')
  // const [password, setPassword]=useState('')
  // const [password_conf, setPasswordConf]=useState('')

  // async function submit(e){
  //   e.preventDefault();

  //   try {
  //     await axios.post('/create-account', {
  //       email, password, password_conf
  //     })
  //     .then(res=>{
  //       if (res.data=='email exists') {
  //         alert('Duplicate email found - account may already exist')
  //         // history('/', {state:{id:email}})
  //       } else if (res.data=='email does not exist') {
  //         history('/', {state:{id:email}})
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
