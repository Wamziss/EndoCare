import React from 'react';

import fruits from '../../../assets/fruits.jpg'

function Diet() {
  return (
    <div>
      <h3>Diet Plans</h3>
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
    </div>
  );
}

export default Diet;
