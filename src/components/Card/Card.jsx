import React from "react";
import "./styles.css";

const Card = props => {
  return (
    <div className="cms-card-container">
      {props.data.map(card => (
        <div
          key={card.id}
          className="cms-card"
          style={{ backgroundColor: props.background, color: props.color }}
        >
          <h3 className="cms-card-title">{card.title}</h3>
          <p className="cms-card-content">{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
