import React from 'react'
import '../App.css';
import './LoggedInSplash.css'
import './SplashScreen.css'
import { Button } from './Button';
import JoinGroupForm from './JoinGroupForm';


function LoggedInSplash() {

    return (
        <div className="logged-splash-outer">
            <div className='logged-splash-container'>

                <div className="logged-splash-button">
                    <Button buttonStyle='btn--outline' path='/create-group'>Create Group</Button>
                </div>

                <h1 className='logged-splash-header'>My Groups</h1>

                <JoinGroupForm />

            </div>
        </div>
        
    )
}

export default LoggedInSplash
