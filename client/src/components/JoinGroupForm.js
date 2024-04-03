import React from 'react'
import { Button } from './Button'
import './JoinGroupForm.css'

function JoinGroupForm() {

    const handleJoinGroup = async (event) => {
        event.preventDefault(); // Prevent default form submission
      
        const join_code = event.target.join_code.value;
      
        try {
            const userID = localStorage.getItem('currentUser');
            const response = await fetch('http://localhost:9000/add-user-to-group', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ join_code, userID }),
            })
            //     headers: { Authorization: `Bearer ${ data }` },
            // });
            if (response.ok) {
                window.location.href = '/';
            }
        } catch (error) {
            console.error(error);
            window.location.href = '/';
        }
    };


    return (
        <div className='join-group-form'>
            <form onSubmit={handleJoinGroup} method="POST" action='/'>

                <label className='join-label' for="join_code">Join a new group:</label>
                <input type='text' name='join_code' placeholder='Join Code' className='join-input' required />

                <input type='submit' />

                {/* need to sort the button to actually work. another day though */}
                <Button type='submit' buttonStyle='btn--outline'>Join Group!</Button>  
            </form>
        </div>
    )
}

export default JoinGroupForm
