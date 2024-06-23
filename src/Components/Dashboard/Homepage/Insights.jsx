import React from 'react';
import insight1 from '../../../assets/insight1.jpg'

function Insights() {
  return (
    <div>
      <div className="insights">
        <h3>Insights</h3>
        <div className="insightChoices">
          <ul>
            <li>All</li>
            <li>Recommended</li>
            <li>Symptoms</li>
            <li>Food</li>
            <li>First Aid</li>
          </ul>
        </div>
        <div className="insightCards">
          <div className="insightCard">
            <img src={insight1} alt="" width={100}/>
            <p>Lorem ipsum dolor 9 amet consectetur.</p>
          </div>
          <div className="insightCard">
            <img src={insight1} alt="" width={100}/>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="insightCard">
            <img src={insight1} alt="" width={100} />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="insightCard">
            <img src={insight1} alt="" width={100}/>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="insightCard">
            <img src={insight1} alt="" width={100} />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;
