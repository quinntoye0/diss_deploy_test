import React from 'react'

function MessageItem(props) {
  return (
    <>
      <li className='message_item'>
        <div className="message_item_info">
            <h5 className="message_item_heading">yuh</h5>
            <p className="message_item_text">{props.message}</p>
            <p className="message_item_vote">{props.votes}</p>
        </div>
      </li>
    </>
  )
}

export default MessageItem
