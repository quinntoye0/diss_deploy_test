import React, { useState, useEffect } from 'react'
import '../App.css';
import './GroupSplash.css'
import './SplashScreen.css'
import { Button } from './Button';
import { useParams } from 'react-router-dom';
import Messages from './Messages';



function GroupSplash() {

    const { groupID } = useParams();

    const [returnedGroup, setReturnedGroup] = useState();
    useEffect(() => {

        const fetchGroup = async () => {
            const userID = localStorage.getItem('currentUser');
            const response = await fetch('http://localhost:9000/retrieve-group', {
                method: 'POST',
                headers: { Authorization: `Bearer ${ groupID }` },
            })
            .then( (response) => response.json());

            setReturnedGroup(response);
        };    
        fetchGroup();
    }, [groupID]);


    return (
            
        <>
            {returnedGroup && (
                <>
                    <div className='group-splash-header'>

                        <h1>{returnedGroup.name}</h1>
                        <br />

                        <div className="header-items">
                            <h3 className='goal'><b>Goal: </b>{returnedGroup.goal}</h3>
                            <h3 className='join-code'><b>Join Code: </b>{returnedGroup.join_code}</h3>
                        </div>
                        
                    </div>
                        
                    <div className='group-splash-container'>

                        <div className="desc-container">
                            <h3 className='desc-heading'>Description:</h3>
                            <p className='desc-text'>{returnedGroup.desc}</p>
                        </div>

                        <Messages group={returnedGroup}/>

                        {/* create a message card component that can be looped in here for each message like the cards */}
                        
                        {/* send group as a prop to message */}

                    </div>
                </>

            )}
        </>

    )
}

export default GroupSplash