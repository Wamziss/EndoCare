import { border, borderRadius, display, fontSize, fontWeight, height, margin, textAlign, width } from '@mui/system';
import React from 'react';

const Hospitals = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#fff',
    borderLeft: '1px solid #f5f5f5',
    width: '45%',
  };

  const hospitalHeader = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#215759',
    margin: '10px auto 20px auto'
  };

  const hospitalCardStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 3px lightgray',
    backgroundColor: '#fff7cc',
    width: '100%',
    maxWidth: '600px',
    border: '1px solid #f5f5f5',
    fontSize: '16px',
    height: '35%'
  };

  const logoStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#215759',
    color: '#fff',
    marginRight: '20px'
  };

  const hospDetailsStyle = {
    flex: '1',
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  };

  const contactDetailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
    height: '40%',
    justifyContent: 'space-evenly',
    textAlign: 'left',
  };

  const directionBtn = { 
    padding: '5px 15px', 
    textAlign: 'center', 
    color: '#215759', 
    marginTop: '15px',
    borderRadius: '30px',
    backgroundColor: '#ffdd00',
    width: '60%',
    margin: 'auto',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyle}>
      <h3 style={hospitalHeader}>Hospital Recommendations</h3>
      <div style={hospitalCardStyle}>
        <div style={logoStyle}>KU</div>
        <div style={hospDetailsStyle}>
          <p style={{fontWeight: 'bold', fontSize: '20px', color: '#215759'}}>KU Hospital</p>
          <div style={contactDetailsStyle}>
            <span><b>Contacts:</b> </span>
            <div>
              <span>+123456789012</span>
              <span> / </span>
              <span>+345678901234</span>
            </div>
          </div>
          <span style={directionBtn}>View Directions</span>
        </div>
      </div>
      <div style={hospitalCardStyle}>
        <div style={logoStyle}>NH</div>
        <div style={hospDetailsStyle}>
          <p style={{fontWeight: 'bold', fontSize: '20px', color: '#215759'}}>Name Hospital</p>
          <div style={contactDetailsStyle}>
            <span><b>Contacts: </b></span>
            <div>
              <span>+456789012345</span>
              <span> / </span>
              <span>+678901234567</span>
            </div>
          </div>
          <span style={directionBtn}>View Directions</span>
        </div>
      </div>
    </div>
  );
}

export default Hospitals;
