import React from 'react';
import GeneralExercises from './GeneralExercises';
import PersonalRecs from './PersonalRecs';
import TrackSymptoms from './TrackSymptoms';
import "./Styles.css"

const Recommendations = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    gridTemplateColumns: '1fr 1fr 1fr', 
    width: '1050px' // Ensure the content takes up at least the full height of the viewport
  };

  const sectionStyle = {
    flex: 1, // Ensure all sections have equal space
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <GeneralExercises />
      </div>
      <div style={sectionStyle}>
        <PersonalRecs />
      </div>
      <div style={sectionStyle}>
        <TrackSymptoms />
      </div>
    </div>
  );
};

export default Recommendations;
