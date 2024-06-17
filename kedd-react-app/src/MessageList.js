// src/MessageList.js
import React from 'react';
import './MessageList.css';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className="message">
          <span className="message-user">{message.user}: </span>
          <span className="message-text">{message.text}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
