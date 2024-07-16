import React from 'react';
import Diet from './Diet';
import Exercises from './Exercises';
import Resources from './Resources';

function Saved() {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr', // Three equal columns
    gap: '20px', // Adjust the gap between columns as needed
    padding: '20px',
    width: '1100px'
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <Diet />
      </div>
      <div style={sectionStyle}>
        <Exercises />
      </div>
      <div style={sectionStyle}>
        <Resources />
      </div>
    </div>
  );
}

export default Saved;