import React from 'react'
import MessageItem from './MessageItem'
import './Messages.css'

function Messages(props) {

    const groupID = props.group._id
    const messages = props.group.messages

    return (
        <>
            <div className="messages">
                <div className="messages_container">
                    <div className="messages_wrapper">
                        <ul className="messages_items">
                            {messages && messages.map((message) => (
                                <MessageItem
                                    groupID={groupID}
                                    message={message}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Messages
