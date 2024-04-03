import React from 'react'
import '../App.css';
import './GroupSplash.css'
import './SplashScreen.css'
import { Button } from './Button';
import { useParams } from 'react-router-dom';


function GroupSplash() {

    const { groupID } = useParams();

    return (

        <>
            <div className='group-splash-container'>

                <h1>My Groups</h1>

                <p>{groupID}</p>

            </div>
        </>


    )
}

export default GroupSplash