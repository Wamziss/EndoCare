import React from 'react';
import image from '../../../assets/jogging.png';

function GeneralExercises() {
  const containerStyle = {
    padding: '0 20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    marginBottom: '20px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',

  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#215759',
  };

  const listStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    listStyleType: 'none',
    marginBottom: '20px',
    width: 'fit-content',
  };

  const listItemStyle = {
    cursor: 'pointer',
    padding: '5px 20px',
    borderRadius: '30px',
    margin: '0 15px',
    fontSize: '17px',
    color: '#215759',
    backgroundColor: '#fff7cc',
    border: '1px solid #ffdd00',
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
    flexWrap: 'wrap',
    marginBottom: '40px'
  };

  const cardStyle = {
    paddingBottom: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '20px',
    width: '30%',
    maxWidth: '100%',
    transition: 'transform 0.3s ease-in-out',
    border: '1px solid lightgray',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '7px 20px',
    backgroundColor: '#215759',
    color: '#fff',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '14px',
    marginTop: '10px',
    transition: 'background-color 0.3s'
  };

  const cardImageStyle = {
    width: '100%',
    borderRadius: '8px',
    height: '70%',
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
      <hr/>
    </div>
  );
}

export default GeneralExercises;



