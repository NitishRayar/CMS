import React, { useState } from "react";
import { Places } from "../../../../data/Place.json";
// import { Ward } from "../../../../data/Ward.json";
import "./style.css";
const General = ({ onClose }) => {
  const [wards, setWards] = useState();
  const renderPlaces = Places.map(place => {
    return (
      <option key={place.placeId} value={place.placeName}>
        {place.placeNameK}
      </option>
    );
  });

  const handleSelect = e => {
    const { value } = e.target;
    const wardsData = Places.filter(place => {
      return place.placeName === value;
    });
    setWards(wardsData[0].wards);
  };

  const renderWards =
    wards &&
    wards.map(ward => {
      return (
        <option key={ward.wardId} value={ward.wardName}>
          {ward.wardNameK}
        </option>
      );
    });

  return (
    <div className="general-popup-container">
      <div className="general-popup-content">
        <div className="general-form">
          <div className="general-form-inputContainer">
            <span>Place:</span>
            <select id="Place" onChange={handleSelect}>
              <option value="default">Select Place</option>
              {renderPlaces}
            </select>
          </div>
          <div className="general-form-inputContainer">
            <span>Ward:</span>
            <select id="ward">
              <option value="">Select Ward</option>
              {renderWards}
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
