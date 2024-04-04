import React, { useState } from 'react';
import './Chat.css';

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-container">
      <button className="chat-toggle-button" onClick={toggleChat}>
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </button>
      {isOpen && (
        <div className="chat-box">
          <div className="messages">
          </div>
          <h3>Send a message</h3>
          <textarea className="chat-input" placeholder="Type your message here" cols="30" rows="3"></textarea>
          <button className="send-button">Send</button>
          <button className="close-button" onClick={toggleChat}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;

