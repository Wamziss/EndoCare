import React from 'react';
import image from '../../../assets/jogging.png';

function GeneralExercises() {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#215759'
  };

  const listStyle = {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: '0',
    marginBottom: '20px'
  };

  const listItemStyle = {
    cursor: 'pointer',
    padding: '10px 20px',
    borderRadius: '4px',
    margin: '0 10px',
    fontSize: '18px',
    color: '#215759',
    transition: 'background-color 0.3s, color 0.3s'
  };

  const activeListItemStyle = {
    ...listItemStyle,
    backgroundColor: '#ffdd00',
    color: '#215759',
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  };

  const cardStyle = {
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '20px',
    width: '250px',
    maxWidth: '100%',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#215759',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
    transition: 'background-color 0.3s'
  };

  const cardImageStyle = {
    width: '100%',
    borderRadius: '8px'
  };

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>General Exercises</h3>
      <div className="exerciseChoices">
        <ul style={listStyle}>
          <li style={activeListItemStyle}>All</li>
          <li style={listItemStyle}>Back pain exercises</li>
          <li style={listItemStyle}>Joint pain exercises</li>
          <li style={listItemStyle}>Low effort</li>
        </ul>
      </div>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <img src={image} alt="" style={cardImageStyle} />
          <span style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px', display: 'block', color: '#215759' }}>Backpain relief - 5 minutes</span>
          <button type="button" style={buttonStyle}>Start</button>
        </div>
        <div style={cardStyle}>
          <img src={image} alt="" style={cardImageStyle} />
          <span style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px', display: 'block', color: '#215759' }}>Joint pain exercises</span>
          <button type="button" style={buttonStyle}>Start</button>
        </div>
        <div style={cardStyle}>
          <img src={image} alt="" style={cardImageStyle} />
          <span style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px', display: 'block', color: '#215759' }}>Low effort exercises</span>
          <button type="button" style={buttonStyle}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default GeneralExercises;



