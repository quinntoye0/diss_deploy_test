import React, { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import { Button } from './Button';
import '../App.css';
import'./SplashScreen.css'


function SplashScreen() {

  const location=useLocation()

  const [apiResponse, setApiResponse] = useState('');
  const [dbResponse, setDbResponse] = useState('');

  useEffect(() => {
    // Fetch API data
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(response => setApiResponse(response));
    
    // Fetch DB data
    fetch("http://localhost:9000/testDB")
      .then(res => res.text())
      .then(response => setDbResponse(response));
  }, []);


  return (
    <div className='splash-container'>
      {/* <video src='../../public/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Reinvent Your Team!</h1>
      <p>It begins here...</p>
      <p>{apiResponse}</p>
      <p>{dbResponse}</p>
      {/* <p>{location.state.id}</p> */}

      <div className='splash-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          Let's Go!
        </Button>

        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          This is another button
        </Button>
      </div>
    </div>
  )
}

export default SplashScreen
