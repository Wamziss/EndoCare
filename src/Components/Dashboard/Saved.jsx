import React from "react";
import Diet from "./Saved/Diet";
import Exercises from "./Saved/Exercises";
import Resources from "./Saved/Resources";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import Chatbot from './Homepage/Chatbot';

function Saved() {
  const mainContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflowY: 'scroll'
  };

  return (
    <div>
      <Navigation />
      <div className="contentArea">
        <Sidebar />
        <div className="mainContent" style={mainContentStyle}>
          <Diet />
          <Exercises />
          <Resources />
        </div>
      </div>
      <div className="chatbot">
        <Chatbot />
      </div>
    </div>
  );
}

export default Saved;
