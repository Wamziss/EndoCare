import React from 'react';
import './Styles.css'

import profile from '../../../assets/profile.jpg'
function Stories() {
  return (
    <div>
      <div className="stories">
        <h3>Stories from Peers</h3>
        <div className="storyCards">
          <div className="storyCard">
            <img src={profile} alt="" width={100} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis ad eius reiciendis ex. Doloribus, consequuntur sapiente..</p>
            <span>Read</span>
          </div>
          <div className="storyCard">
            <img src={profile} alt="" width={100} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis ad eius reiciendis ex. Doloribus, consequuntur sapiente..</p>
            <span>Read</span>
          </div>
          <div className="storyCard">
            <img src={profile} alt="" width={100} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis ad eius reiciendis ex. Doloribus, consequuntur sapiente..</p>
            <span>Read</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
