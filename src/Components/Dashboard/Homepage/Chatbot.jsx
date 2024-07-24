import React from 'react';
import './Styles.css'
import chatbot from '../../../assets/chatbot.png'

function Chatbot() {
  return (
    <div className='chatbot' style={{position: 'absolute', bottom: 30, right: 30}}>
      <img src={chatbot} alt="" />
    </div>
  );
}

export default Chatbot;
