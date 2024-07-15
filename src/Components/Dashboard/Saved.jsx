import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Diet from './Saved/Diet';
import Exercises from './Saved/Exercises';
import Resources from './Saved/Resources';

import './Styles.css'

function Saved() {
  return (
    <div>
      <Navigation/>
      <div className="contentArea">
        <Sidebar/>
        <div className="mainContent">
          <Diet/>
          <Exercises/>
          <Resources/>
        </div>
      </div>
    </div>
  );
}

export default Saved;
