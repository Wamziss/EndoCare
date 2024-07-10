import React from 'react';
import image from '../../../assets/jogging.png';

function GeneralExercises() {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '20px',
    width: '400px'
  };

  const headingStyle = {
    fontFamily: 'El Messiri',
    fontSize: '24px',
    marginBottom: '20px'
  };

  const listStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    listStyleType: 'none',
    padding: '0'
  };

  const listItemStyle = {
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '4px',
    margin: '5px',
    fontFamily: 'DM Sans',
    fontSize: '16px'
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
    
  };

  const cardStyle = {
    padding: '20px',
    backgroundColor: '#f5f5dc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '20px',
    width: '250px',
    fontFamily: 'DM Sans'
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: 'Roboto',
    fontSize: '16px'
  };

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>General Exercises</h3>
      <div className="exerciseChoices">
        <ul style={listStyle}>
          <li style={listItemStyle}>All</li>      
        </ul>
      </div>
      <div style={cardContainerStyle}>
      <li style={listItemStyle}>Back pain exercises</li>
        <div style={cardStyle}>
          <img src={image} alt="" />
          <span>Backpain relief - 5 minutes</span>
          <button type="button" style={buttonStyle}>Start</button>
        </div>
        <li style={listItemStyle}>Joint pain exercises</li>
        <div style={cardStyle}>
          <img src={image} alt="" />
          <span>Backpain relief - 5 minutes</span>
          <button type="button" style={buttonStyle}>Start</button>
        </div>
        <li style={listItemStyle}>Low effort</li>
        <div style={cardStyle}>
          <img src={image} alt="" />
          <span>Backpain relief - 5 minutes</span>
          <button type="button" style={buttonStyle}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default GeneralExercises;
