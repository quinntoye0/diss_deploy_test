import React, { useState } from 'react'
import { Button } from './Button'

function MessageItem(props) {

  console.log(props)
  console.log(props.message)

  // unpacks props containing db IDs to locate group & messages
  const groupID = props.groupID
  const messageID = props.message._id

  // sets state of current message
  const [message, setMessage] = useState(props.message);

  console.log(message)

  // function to upvote current messsage
  const updateMessageInDatabase = async(groupID, messageID) => {
    fetch('http://localhost:9000/group-message-vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ groupID, messageID }),
    })
  }

  // handle function when user clicks vote button
  const handleVote = async() => {
    // creates temp updated message object with incremented vote val
    const updatedMessage = {
      content: message.content, // spread operator to copy existing message properties
      votes: message.votes + 1, // update the votes property with incremented value
    };

    // updates message state with updated objects
    setMessage(updatedMessage);
    // calls function to update message in database (if needed)
    updateMessageInDatabase(groupID, messageID);
  };


  return (
    <>

      {message && (
        <>
          <li className='message-item'>
            <div className="message-item-info">
                <p className="message-item-text">{message.content}</p>
                <div className="div-vote">
                  <p className="message-item-vote">Votes:    {message.votes}</p>
                  <div className="div-vote-btn" onClick={handleVote}>
                    <Button buttonStyle='btn--alternate-outline'>Vote!</Button>
                  </div>
                </div>
            </div>
          </li>
        </>
      )}

    </>
  )
}

export default MessageItem
