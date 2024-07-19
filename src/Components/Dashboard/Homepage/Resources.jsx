import React from 'react';
import './Styles.css'


import image from '../../../assets/jogging.png';

function Resources() {
  return (
    <div>
      <div className="resources">
        <h3 className='subHeader'>Resources</h3>
        <div className="resourceChoices">
          <ul>
            <li style={{backgroundColor: '#215759', border: 'none', color: 'white'}}><b>All</b></li>
            <li>Recommended</li>
            <li>Books</li>
            <li>Blogs</li>
            <li>Articles</li>
          </ul>
        </div>
        <div className="resourceCards">
          <div className="resourceCard">
            <img src={image} alt="" />
            <p>Small description about this resourc..</p>
            <span>View</span>
          </div>
          <div className="resourceCard">
            <img src={image} alt="" />
            <p>Small description about this resourc..</p>
            <span>View</span>
          </div>
          <div className="resourceCard">
            <img src={image} alt="" />
            <p>Small description about this resourc..</p>
            <span>View</span>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
}

export default Resources;
