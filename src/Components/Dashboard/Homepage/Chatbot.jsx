import React from 'react';
import './Styles.css'
import chatbot from '../../../assets/chatbot.png'

function Chatbot() {
  return (
    <div className='chatbot'>
      <img src={chatbot} alt="" />
    </div>
  );
}

export default Chatbot;
