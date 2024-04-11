import React, { useState, useEffect } from 'react'
import '../App.css';
import './GroupSplash.css'
import './SplashScreen.css'
import { useParams } from 'react-router-dom';
import Messages from './Messages';
import NewMessageForm from './NewMessageForm';



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

                        <div className="new-message-container">
                            <NewMessageForm group={returnedGroup}/>
                        </div>

                        <div className="desc-container">
                            <h3 className='desc-heading'>Description:</h3>
                            <p className='desc-text'>{returnedGroup.desc}</p>
                        </div>

                        <Messages group={returnedGroup}/>

                    </div>
                </>

            )}
        </>

    )
}

export default GroupSplash