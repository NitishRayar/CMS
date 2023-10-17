import React, { useEffect, useState } from "react";
import "./style.css";
const General = (props) => {
  const [formValue, setFormValue] = useState({
    placeCode: "",
    wardCode: ""
  });
  const [wards, setWards] = useState();
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const fetchAllPlace = async () => {
      const reqData = await fetch("http://localhost:8082/places");
      const resData = await reqData.json();
      setPlaces(resData);
      console.log(resData);
    };
    fetchAllPlace();
  }, []);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const renderPlaces = places.map(place => {
    return (
      <option key={place.placeCode} value={place.placeCode}>
        {place.placeNameK}
      </option>
    );
  });

  const onPlaceSelect = e => {
    handleInput(e);
    const { value } = e.target;
    const wardsData = places.filter(place => {
      return place.placeCode === value;
    });
    setWards(wardsData[0].wards);
  };

  const renderWards =
    wards &&
    wards.map(ward => {
      return (
        <option key={ward.wardCode} value={ward.wardCode}>
          {ward.wardNameK}
        </option>
      );
    });

    const onSearch=()=>{
      console.log('place: ',formValue.placeCode);
      console.log('ward: ',formValue.wardCode);
      props.onSearch(formValue.placeCode,formValue.wardCode)
    }

  return (
    <div className="general-popup-container">
      <div className="general-popup-content">
        <div className="general-form">
          <div className="general-form-inputContainer">
            <span>Place:</span>
            <select id="Place" name="placeCode" value={formValue.placeCode} onChange={onPlaceSelect}>
              <option value="default">Select Place</option>
              {renderPlaces}
            </select>
          </div>
          <div className="general-form-inputContainer">
            <span>Ward:</span>
            <select id="ward" name="wardCode" value={formValue.wardCode} onChange={handleInput}>
              <option value="">Select Ward</option>
              {renderWards}
            </select>
          </div>
        </div>
        <div className="general-button-container">
          <button className="general-close" onClick={props.onClose}>
            Cancel
          </button>
          <button className="general-search" onClick={onSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default General;
