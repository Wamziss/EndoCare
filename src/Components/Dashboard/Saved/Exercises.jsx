import React from 'react';

import image from '../../../assets/jogging.png'

function Exercises() {
  return (
    <div>
      <h3>Exercises</h3>
      <div className="exerciseChoices">
        <ul>
          <li>All</li>
          <li>Back pain exercises</li>
          <li>Joint pain exercises</li>
          <li>Low effort</li>
        </ul>
      </div>
      <div className="exerciseCards">
        <div className="exerciseCard">
          <img src={image} alt="" srcset="" />
          <span>Backpain relief - 5 minutes</span>
          <button type="button">Start</button>
        </div>
        <div className="exerciseCard">
          <img src={image} alt="" srcset="" />
          <span>Backpain relief - 5 minutes</span>
          <button type="button">Start</button>
        </div>
        <div className="exerciseCard">
          <img src={image} alt="" srcset="" />
          <span>Backpain relief - 5 minutes</span>
          <button type="button">Start</button>
        </div>
      </div>
    </div>
  );
}

export default Exercises;
