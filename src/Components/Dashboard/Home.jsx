import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Insights from './Homepage/Insights';
import Notifications from './Homepage/Notifications';
import Resources from './Homepage/Resources';
import Stories from './Homepage/Stories';
import Chatbot from './Homepage/Chatbot';

import './Styles.css'

function Home() {
  return (
    <div className='MainContainer'>
      {/* Navigation start */}
      <Navigation />
      {/* Navigation end */}
      <div className="contentArea">
        {/* Sidebar start */}
        <Sidebar />
        {/* Sidebar end */}
        {/* Beginning of Main Content */}
        <div className="mainContent">
          <div className="leftContent">
            <Insights />
            <Resources />
            <Stories />
          </div>
          <div className="rightContent">
            {/* Notifications area */}
            <Notifications />
          </div>
        </div>
        {/* Main Content end */}
      </div>
      <div className="chatbot">
        <Chatbot />
      </div>
    </div>
  );
}

export default Home;
