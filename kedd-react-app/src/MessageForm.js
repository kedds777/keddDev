// src/MessageForm.js
import React, { useState } from 'react';
import './MessageForm.css';

const MessageForm = ({ sendMessage }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(text);
    setText('');
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageForm;
