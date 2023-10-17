import React, { useEffect, useState } from "react";
import "./style.css";
const Individual = (props) => {
  const [formValue, setFormValue] = useState({
    personId: "",
  });
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const fetchAllPerson = async () => {
      const reqData = await fetch("http://localhost:8082/people");
      const resData = await reqData.json();
      setPeople(resData);
      console.log(resData);
    };
    fetchAllPerson();
  }, []);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const renderPeople = people.map((person) => {
    return (
      <option key={person.personId} value={person.personId}>
        {person.personNameK}
      </option>
    );
  });

  const onSearch = () => {
    console.log("person: ", formValue.personId);
    props.onSearch(formValue.personId);
  };

  return (
    <div className="general-popup-container">
      <div className="general-popup-content">
        <div className="general-form">
          <div className="general-form-inputContainer">
            <span>Person:</span>
            <select
              id="person"
              name="personId"
              value={formValue.personId}
              onChange={handleInput}
            >
              <option value="default">Select Person</option>
              {renderPeople}
            </select>
          </div>
        </div>
        <div className="general-button-container">
          <button className="general-close" onClick={props.onClose}>
            Cancel
          </button>
          <button className="general-search" onClick={onSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Individual;
