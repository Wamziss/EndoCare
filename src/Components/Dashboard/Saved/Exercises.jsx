import React from 'react';
import image from '../../../assets/jogging.png';

function Exercises() {
  const exerciseStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    fontFamily: 'DM Sans',
    boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)',
    width:'300px',
    height: '150hv'
  };

  const titleStyle = {
    fontFamily: 'El Messiri',
    fontSize: '24px',
    marginBottom: '20px'
  };

  const choiceStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px'
  };

  const cardStyle = {
    width: '200px',
    padding: '10px',
    backgroundColor: '#fff7cc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '20px'
  };

  const textStyle = {
    fontFamily: 'DM Sans',
    fontSize: '14px'
  };

  const buttonStyle = {
    display: 'inline-block',
    marginTop: '10px',
    padding: '8px 16px',
    backgroundColor: '#215759',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: 'Roboto',
    fontSize: '14px'
  };

  return (
    <div style={exerciseStyle}>
      <h3 style={titleStyle}>Exercises</h3>
      <div style={choiceStyle}>
        <ul style={{ display: 'flex', gap: '10px', listStyleType: 'none', padding: 0 }}>
          <li>All</li>
          
          
          
        </ul>
      </div>
      <div>
      <li>Back pain exercises</li>
        <div style={cardStyle}>
          <img src={image} alt="Exercise" width={100} />
          <span style={textStyle}>Backpain relief - 5 minutes</span>
          <button style={buttonStyle} type="button">Start</button>
        </div>
        <li>Joint pain exercises</li>
        <div style={cardStyle}>
          <img src={image} alt="Exercise" width={100} />
          <span style={textStyle}>Backpain relief - 5 minutes</span>
          <button style={buttonStyle} type="button">Start</button>
        </div>
        <li>Low effort</li>
        <div style={cardStyle}>
          <img src={image} alt="Exercise" width={100} />
          <span style={textStyle}>Backpain relief - 5 minutes</span>
          <button style={buttonStyle} type="button">Start</button>
        </div>
      </div>
    </div>
  );
}

export default Exercises;
