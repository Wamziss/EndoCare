import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import TrackSymptoms from './Health/TrackSymptoms';
import GeneralExercises from './Health/GeneralExercises';
import PersonalRecs from './Health/PersonalRecs';

function Health() {
  return (
    <div>
      <Navigation/>
      <div className="mainContent">
        <Sidebar/>
        <div className="mainArea">
          <TrackSymptoms/>
          <GeneralExercises/>
          <PersonalRecs/>
        </div>
      </div>
    </div>
  );
}

export default Health;
