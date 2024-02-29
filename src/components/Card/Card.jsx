import React from "react";
import Button from "react-bootstrap/Button";
import "./styles.css";

const Card = props => {
  return (
    <>
      <div className="cms-card-container">
        {props.data.slice(0, 5).map(card => (
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
      {props.data.length > 5 && (
        <a className="cms-card-container-more-details" href="/service">
          More {props.type}
        </a>
      )}
    </>
  );
};

export default Card;
