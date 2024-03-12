import React from 'react'
import { Button } from './Button';
import '../App.css';
import'./SplashScreen.css'


function SplashScreen() {
  return (
    <div className='splash-container'>
      {/* <video src='../../public/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Reinvent Your Team!</h1>
      <p>It begins here...</p>

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
