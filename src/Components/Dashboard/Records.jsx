import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import PeriodTracker from './Records/PeriodTracker';
import Medication from './Records/Medication';
import Appointments from './Records/Appointments';

import './Styles.css'

function Records() {
  return (
    <div>
      <Navigation/>
      <div className="contentArea">
        <Sidebar/>
        <div className="mainContent">
          <div className="leftContent">
            <PeriodTracker/>
            <Medication/>
          </div>
          <div className="rightContent">
            <Appointments/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Records;
