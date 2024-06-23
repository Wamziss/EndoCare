import React from 'react';

import image from '../../../assets/insight1.jpg'

function Resources() {
  return (
    <div>
      <h3>Resources</h3>
      <div className="resourceChoices">
        <ul>
          <li>All</li>
          <li>Recommended</li>
          <li>Books</li>
          <li>Blogs</li>
          <li>Articles</li>
        </ul>
      </div>
      <div className="resourceCards">
        <div className="resourceCard">
          <img src={image} alt="" width={100}/>
          <p>Small description about this resourc..</p>
          <span>View →</span>
        </div>
        <div className="resourceCard">
          <img src={image} alt="" width={100}/>
          <p>Small description about this resourc..</p>
          <span>View →</span>
        </div>
        <div className="resourceCard">
          <img src={image} alt="" width={100}/>
          <p>Small description about this resourc..</p>
          <span>View →</span>
        </div>
        <div className="resourceCard">
          <img src={image} alt="" width={100}/>
          <p>Small description about this resourc..</p>
          <span>View →</span>
        </div>
      </div>
    </div>
  );
}

export default Resources;
