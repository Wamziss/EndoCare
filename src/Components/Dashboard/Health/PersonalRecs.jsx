import React, { useState } from 'react';
import fruits from '../../../assets/fruits.jpg';
import image from '../../../assets/jogging.png';

import "./Styles.css"

function PersonalRecs() {
  const [selectedCategory, setSelectedCategory] = useState('diet');

  const containerStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#215759'
  };

  const listStyle = {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: '0',
    marginBottom: '20px'
  };

  const listItemStyle = {
    cursor: 'pointer',
    padding: '10px 20px',
    borderRadius: '4px',
    margin: '0 10px',
    fontSize: '18px',
    color: '#215759',
    transition: 'background-color 0.3s, color 0.3s'
  };

  const activeListItemStyle = {
    ...listItemStyle,
    backgroundColor: '#ffdd00',
    color: '#215759',
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
    margin: '20px',
    padding: '20px'
  };

  const cardStyle = {
    padding: '20px',
    backgroundColor: '#fff7cc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: '10px',
    width: '25%',
    flex: '1 1 250px',
    maxWidth: '100%',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#215759',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
    transition: 'background-color 0.3s'
  };

  const imageStyle = {
    width: '100px',
    marginBottom: '10px'
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>Personal Recommendations</h3>
      <div className="recsChoices">
        <ul style={listStyle}>
          <li
            style={selectedCategory === 'diet' ? activeListItemStyle : listItemStyle}
            onClick={() => handleCategoryClick('diet')}
          >
            Diet
          </li>
          <li
            style={selectedCategory === 'exercises' ? activeListItemStyle : listItemStyle}
            onClick={() => handleCategoryClick('exercises')}
          >
            Exercises
          </li>
        </ul>
      </div>
      <div className={selectedCategory === 'diet' ? 'diet' : 'exercises'} style={cardContainerStyle}>
        <div style={cardStyle}>
          <img src={fruits} alt="" style={imageStyle} />
          <p>Small description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button type="button" style={buttonStyle}>Read</button>
        </div>
        <div style={cardStyle}>
          <img src={fruits} alt="" style={imageStyle} />
          <p>Small description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button type="button" style={buttonStyle}>Read</button>
        </div>
        <div style={cardStyle}>
          <img src={fruits} alt="" style={imageStyle} />
          <p>Small description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button type="button" style={buttonStyle}>Read</button>
        </div>
      </div>
      
      <div className={selectedCategory === 'exercises' ? 'exercises' : 'diet'} style={cardContainerStyle}>
        <div style={cardStyle}>
          <img src={image} alt="" style={imageStyle} />
          <span>Backpain relief - 5 minutes</span>
          <button type="button" style={buttonStyle}>Start</button>
        </div>
        <div style={cardStyle}>
          <img src={image} alt="" style={imageStyle} />
          <span>Backpain relief - 5 minutes</span>
          <button type="button" style={buttonStyle}>Start</button>
        </div>
        <div style={cardStyle}>
          <img src={image} alt="" style={imageStyle} />
          <span>Backpain relief - 5 minutes</span>
          <button type="button" style={buttonStyle}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default PersonalRecs;

