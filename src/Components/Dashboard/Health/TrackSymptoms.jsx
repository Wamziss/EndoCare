import React from 'react';

function TrackSymptoms() {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '20px',
    fontFamily: 'DM Sans',
    width: '300px',
    height: '250vh'
  };

  const headingStyle = {
    fontFamily: 'El Messiri',
    fontSize: '24px',
    marginBottom: '20px'
  };

  const paragraphStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    marginBottom: '20px'
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#215759',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: 'Roboto',
    fontSize: '14px'
  };

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>Track Symptoms</h3>
      <div className="trackQuiz">
        <p style={paragraphStyle}>Take this quiz to help assess your situation and recommend the appropriate action to take.</p>
        <button type="button" style={buttonStyle}>START</button>
      </div>
    </div>
  );
}

export default TrackSymptoms;
