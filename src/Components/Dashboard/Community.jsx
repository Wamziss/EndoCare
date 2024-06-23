import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Forum from './Community/Forum';
import Hospitals from './Community/Hospitals';

function Community() {
  return (
    <div>
      <Navigation/>
      <div className="mainContent">
        <Sidebar/>
        <div className="mainArea">
          <Forum/>
          <Hospitals/>
        </div>
      </div>
    </div>
  );
}

export default Community;
