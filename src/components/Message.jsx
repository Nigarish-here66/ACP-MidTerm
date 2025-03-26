import React, { useState } from 'react';
import styles from "../styles/text.modules.css";

const Message = () => {
  const [isMessage, setIsMessage] = useState(true);
  const [messageText, setMessageText] = useState("Initial Message");

  const toggle = () => {
    setIsMessage(!isMessage);
  };

  const handleTextChange = (e) => {
    setMessageText(e.target.value);
  };

  return (
    <div className='container'>
      <h1>{isMessage ? messageText :
        <input
          type="text"
          value={messageText}
          placeholder="Enter new message"
          onChange={handleTextChange}
        />
      }</h1>
      <button onClick={toggle}>
        Change Text
      </button>
    </div>
  );
};

export default Message;