import React, { useState } from "react";
import fruits from "../../../assets/fruits.jpg";
import image from "../../../assets/jogging.png";

import "./Styles.css";
import { green } from "@mui/material/colors";

function PersonalRecs() {
  const [selectedCategory, setSelectedCategory] = useState("diet");

  const containerStyle = {
    padding: "20px 30px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0px 0px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    width: "100%",
    margin: "20px auto",
    display: 'flex',
    flexDirection: 'column',
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#215759",
  };

  const listStyle = {
    display: "flex",
    listStyleType: "none",
    padding: "0",
    // width: 'fit-content',
    margin: '20px 20px 20px 0',

  };

  const listItemStyle = {
    cursor: "pointer",
    padding: "5px 15px",
    borderRadius: "20px",
    margin: "0 10px",
    fontSize: "18px",
    color: "#215759",
    transition: "background-color 0.3s, color 0.3s",
    border: '1px solid #ffdd00',
    backgroundColor: '#fff7cc',
    width: '30%',
    textAlign: 'center',
    fontWeight: 'bold'
  };

  const activeListItemStyle = {
    ...listItemStyle,
    backgroundColor: "#ffdd00",
    color: "#215759",
  };

  const cardContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
    // margin: "20px",
    // padding: "20px",
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: "20px",
    backgroundColor: "#fff7cc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "10px",
    width: "25%",
    height: '400px',
    flex: "1 1 250px",
    maxWidth: "100%",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "7px 20px",
    backgroundColor: "#215759",
    color: "#fff",
    borderRadius: "15px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "20px",
    transition: "background-color 0.3s",
    width: '40%'
  };

  const imageStyle = {
    width: "100%",
    height: '70%',
    marginBottom: "10px",
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
            style={
              selectedCategory === "diet" ? activeListItemStyle : listItemStyle
            }
            onClick={() => handleCategoryClick("diet")}
          >
            Diet
          </li>
          <li
            style={
              selectedCategory === "exercises"
                ? activeListItemStyle
                : listItemStyle
            }
            onClick={() => handleCategoryClick("exercises")}
          >
            Exercises
          </li>
        </ul>
      </div>
      {selectedCategory === "diet" && (
        <div className="diet" style={cardContainerStyle}>
          <div style={cardStyle}>
            <img src={fruits} alt="fruits" style={imageStyle} />
            <p>
              Small description Lorem ipsum dolor sit amet consectetur
              adipisicing.
            </p>
            <button type="button" style={buttonStyle}>
              Read
            </button>
          </div>
          <div style={cardStyle}>
            <img src={fruits} alt="fruits" style={imageStyle} />
            <p>
              Small description Lorem ipsum dolor sit amet consectetur
              adipisicing.
            </p>
            <button type="button" style={buttonStyle}>
              Read
            </button>
          </div>
          <div style={cardStyle}>
            <img src={fruits} alt="fruits" style={imageStyle} />
            <p>
              Small description Lorem ipsum dolor sit amet consectetur
              adipisicing.
            </p>
            <button type="button" style={buttonStyle}>
              Read
            </button>
          </div>
        </div>
      )}
      {selectedCategory === "exercises" && (
        <div className="exercises" style={cardContainerStyle}>
          <div style={cardStyle}>
            <img src={image} alt="jogging" style={imageStyle} />
            <span>Backpain relief - 5 minutes</span>
            <button type="button" style={buttonStyle}>
              Start
            </button>
          </div>
          <div style={cardStyle}>
            <img src={image} alt="jogging" style={imageStyle} />
            <span>Backpain relief - 5 minutes</span>
            <button type="button" style={buttonStyle}>
              Start
            </button>
          </div>
          <div style={cardStyle}>
            <img src={image} alt="jogging" style={imageStyle} />
            <span>Backpain relief - 5 minutes</span>
            <button type="button" style={buttonStyle}>
              Start
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalRecs;

