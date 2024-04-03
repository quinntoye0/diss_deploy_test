import React, { useState, useEffect } from 'react'
import '../App.css';
import './GroupSplash.css'
import './SplashScreen.css'
import { Button } from './Button';
import { useParams } from 'react-router-dom';



function GroupSplash() {

    const { groupID } = useParams();

    const [returnedGroup, setReturnedGroup] = useState();
    useEffect(() => {

        const fetchGroup = async () => {
            const response = await fetch('http://localhost:9000/retrieve-group', {
                method: 'POST',
                headers: { Authorization: `Bearer ${ groupID }` },
            })
            .then( (response) => response.json());
            // const data = await response.json();
            setReturnedGroup(response); // Set state with the first element from the response arra
        };    
        fetchGroup();
    }, [groupID]);


    return (
            
        <>
            {returnedGroup && (
                <>
                    <div className='group-splash-container'>

                        <h1>{returnedGroup.name}</h1>
                        <h3><b>Goal: </b>{returnedGroup.goal}</h3>

                    </div>
                        
                    <div>
                        <h3><b>Description: </b>{returnedGroup.desc}</h3>
                    </div>
                </>

            )}
        </>

    )
}

export default GroupSplash