import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import TrackSymptoms from './Health/TrackSymptoms';
import GeneralExercises from './Health/GeneralExercises';
import PersonalRecs from './Health/PersonalRecs';

import './Styles.css'

function Health() {
  return (
    <div>
      <Navigation/>
      <div className="contentArea">
        <Sidebar/>
        <div className="mainContent">
          <TrackSymptoms/>
          <GeneralExercises/>
          <PersonalRecs/>
        </div>
      </div>
    </div>
  );
}

export default Health;
