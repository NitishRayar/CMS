import React from "react";

const General = ({ onClose }) => {
  return (
    <div className="individual-popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <input type="text" placeholder="Place" />
        <select id="Place">
          <option value="">Select Place</option>
          <option value="content">content</option>
          <option value="content">content</option>
          <option value="content">content</option>
          <option value="content">content</option>
        </select>
        <input type="text" placeholder="Place" />
        <select id="ward">
          <option value="">Select Ward</option>
          <option value="content">content</option>
          <option value="content">content</option>
          <option value="content">content</option>
          <option value="content">content</option>
        </select>
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default General;
