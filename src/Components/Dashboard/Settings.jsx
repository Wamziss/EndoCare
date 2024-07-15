import React from 'react';
import Sidebar from './Sidebar';
import Navigation from './Navigation';

function Settings() {
  return (
    <div>
      <Navigation/>
      <div className="contentArea">
        <Sidebar/>
        <div className="mainContent">
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
