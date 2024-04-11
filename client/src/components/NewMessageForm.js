import React from 'react'
import { Button } from './Button'

function NewMessageForm(props) {

    const handleNewMessage = async (event) => {
        event.preventDefault(); // Prevent default form submission

        const groupID = props.group._id
        const message_content = event.target.message_content.value;
      
        try {
            const response = await fetch('http://localhost:9000/new-message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ groupID, message_content }),
            });
        } catch (error) {
            console.error(error);
            alert('Unexpected error. Loading Homepage')
            window.location.href = '/';
        }                
    };

    return (
        <>      
            <div className="new-message-form">
                <form onSubmit={handleNewMessage} method='POST' action='/'>
                    <h3 className='create-heading'>Got something to add?</h3>

                    <input type='text' name='message_content' placeholder='Type your message here!' className='message-input' required />
                    <Button type='submit' buttonStyle='btn--primary'>Contribute!</Button>
                    
                </form>
            </div>
        </>
    )
}

export default NewMessageForm
