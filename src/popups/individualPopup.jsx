import React from "react";
// import "./individual-popup.css"; // Import the CSS file for styling

const IndividualPopup = ({ onClose }) => {
  return (
    <div className="individual-popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <input type="text" placeholder="Enter Person" />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default IndividualPopup;
