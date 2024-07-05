import React from 'react';
import "./Styles.css"

function Medication() {
  return (
    <div>
      <h3>My Medication</h3>
      <div className="addMedBtn">
          <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
            </svg>
            ADD
          </button>
      </div>
      <div className="medicationList">
        <ul>
          <li>
            <div className="medName">Medication name <span className='timeSpan'>1 * 3</span> </div>
            <div className="timelimits">
              <span>8:00 AM</span>
              <span>12:00 PM</span>
              <span>8:00 PM</span>
            </div>
          </li>
          <li>
            <div className="medName">Medication name <span className='timeSpan'>1 * 2</span> </div>
            <div className="timelimits">
              <span>8:00 AM</span>
              <span>8:00 PM</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Medication;
