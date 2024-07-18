import React from 'react';

function TrackSymptoms() {
  const containerStyle = {
    padding: '40px 20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontFamily: 'DM Sans',
    width: '100%',
    textAlign: 'center',
    height: '250vh',
    alignSelf: 'center',
  }
  const trackQuiz = {
    padding: ' 30px',
    margin: '20px auto',
    backgroundColor: '#fff7cc',
    width: '80%',
    borderRadius: '20px',
    boxShadow: '0 0 3px lightgray',
    border: '1px solid #215759'
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#215759'
  };

  
  const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '20px'
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '5px 20px',
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
      <div className="trackQuiz" style={trackQuiz}>
        <p style={paragraphStyle}>Take this quiz to help assess your situation and recommend the appropriate action to take.</p>
        <button type="button" style={buttonStyle}>START</button>
      </div>
    </div>
  );
}

export default TrackSymptoms;
