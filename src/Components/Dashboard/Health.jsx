import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import TrackSymptoms from './Health/TrackSymptoms';
import GeneralExercises from './Health/GeneralExercises';
import PersonalRecs from './Health/PersonalRecs';
import Chatbot from './Homepage/Chatbot';

import './Styles.css'

function Health() {
  const styles = {
    healthContent: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflowY: 'scroll',
    },
    bottomHealthContent: {
      padding: '20px 30px',
    }
  }
  return (
    <div>
      <Navigation/>
      <div className="contentArea">
        <Sidebar/>
        <div className="healthContent" style={styles.healthContent}>
          <TrackSymptoms/>
          <div className='bottomHealthContent' style={styles.bottomHealthContent}>
            <GeneralExercises/>
            <PersonalRecs/>
          </div>
        </div>
      </div>
      <div className="chatbot">
        <Chatbot />
      </div>
    </div>
  );
}

export default Health;
