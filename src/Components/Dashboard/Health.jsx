import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import TrackSymptoms from './Health/TrackSymptoms';
import GeneralExercises from './Health/GeneralExercises';
import PersonalRecs from './Health/PersonalRecs';

import './Styles.css'
import { BorderAll } from '@mui/icons-material';

function Health() {
  const styles = {
    healthContent: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflowY: 'scroll',
    }
  }
  return (
    <div>
      <Navigation/>
      <div className="contentArea">
        <Sidebar/>
        <div className="healthContent" style={styles.healthContent}>
          <TrackSymptoms/>
          <GeneralExercises/>
          <PersonalRecs/>
        </div>
      </div>
    </div>
  );
}

export default Health;
