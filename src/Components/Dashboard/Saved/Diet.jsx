import React from 'react';
import fruits from '../../../assets/fruits.jpg';

function Diet() {
  const dietStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    width:'300px',
    boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)',
    height: '200hv'
  };

  const titleStyle = {
    fontFamily: 'El Messiri',
    fontSize: '24px',
    marginBottom: '20px',
    
  };

  const choiceStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px'
  };

  const cardStyle = {
    width: '200px',
    padding: '30px',
    height: '250px',
    gap: '10px',
    backgroundColor: '#fff7cc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '20px'
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
    <div style={dietStyle}>
      <h3 style={titleStyle}>Diet Plans</h3>
      <div style={choiceStyle}>
        <ul style={{ display: 'flex', gap: '10px', listStyleType: 'none', padding: 0 }}>
        </ul>
      </div>

      <div style={cardStyle}>
        <img src={fruits} alt="Fruits" width={100}/>
        <p style={textStyle}>Small description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <span style={buttonStyle}>Read</span>
      </div>
      <div style={cardStyle}>
        <img src={fruits} alt="Fruits" width={100}/>
        <p style={textStyle}>Small description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <span style={buttonStyle}>Read</span>
      </div>
      <div style={cardStyle}>
        <img src={fruits} alt="Fruits" width={100}/>
        <p style={textStyle}>Small description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <span style={buttonStyle}>Read</span>
      </div>
      <div style={cardStyle}>
        <img src={fruits} alt="Fruits" width={100}/>
        <p style={textStyle}>Small description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <span style={buttonStyle}>Read</span>
      </div>
    </div>
  );
}

export default Diet;
