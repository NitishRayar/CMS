import React, { useState } from "react";
import "./styles.css";

const Form = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [gender, setGender] = useState("");

  const isNameValid = name.trim() !== "" && name.length > 2;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isCountryValid = country.trim() !== "";

  return (
    <div className="cms-form">
      <h2>Get all details about "{props.type}"</h2>
      <label>
        {props.type} Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>

      {isNameValid && (
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={!isNameValid}
          />
        </label>
      )}

      {isEmailValid && (
        <label>
          Country:
          <select
            value={country}
            onChange={e => setCountry(e.target.value)}
            disabled={!isEmailValid}
          >
            <option value="">Select Country</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
          </select>
        </label>
      )}

      {isCountryValid && (
        <label>
          Subscribe to Newsletter:
          <input
            type="checkbox"
            checked={subscribe}
            onChange={() => setSubscribe(!subscribe)}
            disabled={!isCountryValid}
          />
        </label>
      )}

      {subscribe && (
        <div>
          <label>
            Gender:
            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={() => setGender("male")}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={() => setGender("female")}
                />
                Female
              </label>
            </div>
          </label>
        </div>
      )}
    </div>
  );
};

export default Form;
