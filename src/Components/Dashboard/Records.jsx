import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import PeriodTracker from './Records/PeriodTracker';
import Medication from './Records/Medication';
import Appointments from './Records/Appointments';

function Records() {
  return (
    <div>
      <Navigation/>
      <div className="mainContent">
        <Sidebar/>
        <div className="mainArea">
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
