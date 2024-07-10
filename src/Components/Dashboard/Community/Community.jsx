import React from 'react';
import Forum from './Forum';
import Hospitals from './Hospitals';
import './assets/css/styles.css';

const Community = () => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    padding: '20px',
    height: '100vh',
    backgroundColor: '#c9e4ca',
    width: '800px'
  };

  const sectionStyle = {
    backgroundColor: '#f5f5dc',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto'
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <Forum />
      </div>
      <div style={sectionStyle}>
        <Hospitals />
      </div>
    </div>
  );
};

export default Community;
