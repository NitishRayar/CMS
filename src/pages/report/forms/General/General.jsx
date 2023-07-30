import React from "react";
import "./style.css";
const General = ({ onClose }) => {
  return (
    <div className="general-popup-container">
      <div className="general-popup-content">
        <div className="general-form">
          <div className="general-form-inputContainer">
            <input type="text" placeholder="Place" />
            <select id="Place">
              <option value="">Select Place</option>
              <option value="content">content</option>
              <option value="content">content</option>
              <option value="content">content</option>
              <option value="content">content</option>
            </select>
          </div>
          <div className="general-form-inputContainer">
            <input type="text" placeholder="Place" />
            <select id="ward">
              <option value="">Select Ward</option>
              <option value="content">content</option>
              <option value="content">content</option>
              <option value="content">content</option>
              <option value="content">content</option>
            </select>
          </div>
        </div>
        <div className="general-button-container">
          <button className="general-close" onClick={onClose}>
            Cancel
          </button>
          <button className="general-search">Search</button>
        </div>
      </div>
    </div>
  );
};

export default General;
