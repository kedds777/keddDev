// src/NewPage.js
import React, { useState } from 'react';

import MessageList from './MessageList';
import MessageForm from './MessageForm';

const Room = () => {

    const [messages, setMessages] = useState([
        { user: 'Alice', text: 'Hi there!' },
        { user: 'Bob', text: 'Hello!' },
      ]);
    
      const sendMessage = (text) => {
        const newMessage = { user: 'You', text };
        setMessages([...messages, newMessage]);
      };
  return (
    <div>
         <MessageList messages={messages} />
      <MessageForm sendMessage={sendMessage} />
    </div>
  );
};

export default Room;
