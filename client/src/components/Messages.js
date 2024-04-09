import React, { useState, useEffect } from 'react'
import MessageItem from './MessageItem'
import './Messages.css'

function Messages(props) {

    const messages = props.returnedGroup.messages

    return (
        <div className="messages">
            <div className="messages_container">
                <div className="messages_wrapper">
                    <ul className="messages_items">
                        {messages && messages.map((message) => (
                            <MessageItem
                                message={message.content}
                                votes={message.votes}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Messages
