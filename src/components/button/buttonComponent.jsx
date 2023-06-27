import React from "react";

const ButtonComponent = ({ label }) => {
  const buttonStyles = {
    backgroundColor: "#ff9900",
    color: "#fff",
    borderRadius: "5px",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    margin: "20px",
  };

  return <button style={buttonStyles}>{label}</button>;
};

export default ButtonComponent;
