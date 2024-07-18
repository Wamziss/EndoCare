import React from 'react';
import image from '../../../assets/jogging.png';

function Exercises() {
  const exerciseStyle = {
    padding: '10px 30px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    width:'95%',
    boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)',
    height: '200hv',
    margin: '20px auto',
  };

  const titleStyle = {
    fontFamily: 'El Messiri',
    fontSize: '24px',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#215759'
  };

  const choiceStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    marginBottom: '20px'
  };

  const choice = {
    marginRight: '15px',
    border: '1px solid #ffdd00',
    backgroundColor: '#fff7cc',
    padding: '5px 20px',
    borderRadius: '20px'
  };

  const active = {
    ...choice,
    backgroundColor: '#215759',
    border: 'none',
    color: 'white',
    fontWeight: 'bold',
  }

  const cardStyles = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  const cardStyle = {
    width: '23%',
    padding: '30px',
    height: '250px',
    backgroundColor: '#fff7cc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const textStyle = {
    fontFamily: 'DM sans',
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
          <li style={active}>All</li>
          <li style={choice}>Back pain exercises</li>
          <li style={choice}>Joint pain exercises</li>
          <li style={choice}>Low effort</li>
        </ul>
      </div>
      <div>
      <div style={cardStyles}>
        <div style={cardStyle}>
          <img src={image} alt="Exercise" width={100} />
          <span style={textStyle}>Backpain relief - 5 minutes</span>
          <button style={buttonStyle} type="button">Start</button>
        </div>
        <div style={cardStyle}>
          <img src={image} alt="Exercise" width={100} />
          <span style={textStyle}>Backpain relief - 5 minutes</span>
          <button style={buttonStyle} type="button">Start</button>
        </div>
        <div style={cardStyle}>
          <img src={image} alt="Exercise" width={100} />
          <span style={textStyle}>Backpain relief - 5 minutes</span>
          <button style={buttonStyle} type="button">Start</button>
        </div>
        <div style={cardStyle}>
          <img src={image} alt="Exercise" width={100} />
          <span style={textStyle}>Backpain relief - 5 minutes</span>
          <button style={buttonStyle} type="button">Start</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Exercises;
