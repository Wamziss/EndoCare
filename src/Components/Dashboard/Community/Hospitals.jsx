import React from 'react';

function Hospitals() {
  return (
    <div>
      <h3>Hospital Recommendations</h3>
      <div className="hospitalCard">
        <div className="logo">KU</div>
        <div className="hospDetails">
          <p>KU Hospital</p>
          <div className="contactDetails">
            <span>Contacts: </span>
            <span>+123456789012</span>
            <span>+345678901234</span>
          </div>
          <span>View Directions</span>
        </div>
      </div>
      <div className="hospitalCard">
        <div className="logo">NH</div>
        <div className="hospDetails">
          <p>Name Hospital</p>
          <div className="contactDetails">
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
