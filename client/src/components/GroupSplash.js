import React, { useState, useEffect } from 'react'
import '../App.css';
import './GroupSplash.css'
import './SplashScreen.css'
import { useParams } from 'react-router-dom';
import Messages from './Messages';
import NewMessageForm from './NewMessageForm';
import axios from 'axios';

function GroupSplash() {

    axios.defaults.withCredentials = true;

    const { groupID } = useParams();

    const [returnedGroup, setReturnedGroup] = useState();
    useEffect(() => {

        const fetchGroup = async () => {
            const response = await axios.post('https://diss-deploy-test.vercel.app/retrieve-group', {
                method: 'POST',
                headers: { Authorization: `Bearer ${ groupID }` },
            })

            setReturnedGroup(response.data);
        };    
        fetchGroup();
    }, [groupID]);


    return (
            
        <>
            {returnedGroup && (
                <>
                    <div className='group-splash-header'>

                        <div className="header-items">
                            <div className="group-goal">
                                <h3 className='goal-head'><b>Goal: </b></h3>
                                <p className="goal-content">{returnedGroup.goal}</p>
                            </div>                            

                            <h1 className='group-name'>{returnedGroup.name}</h1>

                            <h3 className='join-code'><b>Join Code: </b>{returnedGroup.join_code}</h3>
                        </div>
                        
                    </div>
                        
                    <div className='group-splash-body'>
                        <div className="group-splash-container">

                            <div className="new-message-container">
                                <NewMessageForm group={returnedGroup} />
                            </div>

                            <Messages group={returnedGroup} />

                            <div className="desc-container">
                                <h3 className='desc-heading'>Description:</h3>
                                <br />
                                <p className='desc-text'>{returnedGroup.desc}</p>
                            </div>

                        </div>
                    </div>
                </>

            )}
        </>

    )
}

export default GroupSplash