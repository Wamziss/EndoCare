import React from 'react';
import fruits from '../../../assets/fruits.jpg'
import image from '../../../assets/jogging.png'

function PersonalRecs() {
  return (
    <div>
      <h3>Personal Recommendations</h3>
      <div className="recsChoices">
        <ul>
          <li>Diet</li>
          <li>Exercises</li>
        </ul>
      </div>
      <div className="diet">
        <div className="dietCard">
          <img src={fruits} alt="" width={100}/>
          <p>small description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <span>Read</span>
        </div>
        <div className="dietCard">
          <img src={fruits} alt="" width={100}/>
          <p>small description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <span>Read</span>
        </div>
        <div className="dietCard">
          <img src={fruits} alt="" width={100}/>
          <p>small description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <span>Read</span>
        </div>
        <div className="dietCard">
          <img src={fruits} alt="" width={100}/>
          <p>small description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <span>Read</span>
        </div>
      </div>
      <div className="exercises">
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

export default PersonalRecs;
