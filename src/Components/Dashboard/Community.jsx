import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Forum from './Community/Forum';
import Hospitals from './Community/Hospitals';
import Chatbot from './Homepage/Chatbot';

import './Styles.css'

function Community() {
  return (
    <div>
      <Navigation/>
      <div className="contentArea">
        <Sidebar/>
        <div className="mainContent" style={{width: '100%', height: '90vh'}}>
          <Forum/>
          <Hospitals/>
        </div>
      </div>
      <div className="chatbot">
        <Chatbot />
      </div>
    </div>
  );
}

export default Community;
