import React from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpg";
import logo from "../../assets/images/logo4.jpeg";

function Navigation() {
  const styles = {
    navigation: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#f8f8f8",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    leftNav: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      fontWeight: "bold",
      marginRight: "20px",
    },
    logoStyle: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#007bff",
      color: "black",
      marginRight: "20px",
      //fontFamily: 'Roboto',
      fontSize: "16px",
    },
    menuBar: {
      cursor: "pointer",
    },
    middleNav: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
    },
    searchbar: {
      position: "relative",
      width: "300px",
    },
    searchInput: {
      width: "100%",
      padding: "8px 12px",
      borderRadius: "30px",
      border: "1px solid #ccc",
    },
    searchIcon: {
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
    },
    rightNav: {
      display: "flex",
      alignItems: "center",
    },
    profileImage: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      marginRight: "10px",
    },
    username: {
      fontSize: "16px",
    },
  };

  return (
    <div>
      <div className="navigation">
        <div className="leftNav">
          <img src={logo} className="h-16" />
          <div className="menuBar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
        </div>
        <div style={styles.middleNav}>
          <div style={styles.searchbar}>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search.."
              style={styles.searchInput}
            />
            <div style={styles.searchIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
          </div>
        </div>
        <div style={styles.rightNav}>
          <img src={profile} alt="" style={styles.profileImage} />
          <p style={styles.username}>Jane Smith</p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
