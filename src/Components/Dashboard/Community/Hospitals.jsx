import React from 'react';

const Hospitals = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f2f2f2'
  };

  const hospitalCardStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f5f5dc',
    width: '100%',
    maxWidth: '600px'
  };

  const logoStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    color: '#fff',
    marginRight: '20px'
  };

  const hospDetailsStyle = {
    flex: '1'
  };

  const contactDetailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px'
  };

  return (
    <div style={containerStyle}>
      <h3>Hospital Recommendations</h3>
      <div style={hospitalCardStyle}>
        <div style={logoStyle}>KU</div>
        <div style={hospDetailsStyle}>
          <p>KU Hospital</p>
          <div style={contactDetailsStyle}>
            <span>Contacts: </span>
            <span>+123456789012</span>
            <span>+345678901234</span>
          </div>
          <span>View Directions</span>
        </div>
      </div>
      <div style={hospitalCardStyle}>
        <div style={logoStyle}>NH</div>
        <div style={hospDetailsStyle}>
          <p>Name Hospital</p>
          <div style={contactDetailsStyle}>
            <span>Contacts: </span>
            <span>+456789012345</span>
            <span>+678901234567</span>
          </div>
          <span>View Directions</span>
        </div>
      </div>
    </div>
  );
}

export default Hospitals;
