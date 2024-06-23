import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Diet from './Saved/Diet';
import Exercises from './Saved/Exercises';
import Resources from './Saved/Resources';

function Saved() {
  return (
    <div>
      <Navigation/>
      <div className="mainContent">
        <Sidebar/>
        <div className="mainArea">
          <Diet/>
          <Exercises/>
          <Resources/>
        </div>
      </div>
    </div>
  );
}

export default Saved;
