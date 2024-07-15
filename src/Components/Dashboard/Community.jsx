import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Forum from './Community/Forum';
import Hospitals from './Community/Hospitals';

import './Styles.css'

function Community() {
  return (
    <div>
      <Navigation/>
      <div className="contentArea">
        <Sidebar/>
        <div className="mainContent">
          <Forum/>
          <Hospitals/>
        </div>
      </div>
    </div>
  );
}

export default Community;
