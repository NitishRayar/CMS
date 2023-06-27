import React from 'react';
import './achievement.css';

const AchievementCardComponent = () => {
  const cardData = [
    { id: 1, title: 'Card 1', content: 'This is the content for Card 1' },
    { id: 2, title: 'Card 2', content: 'This is the content for Card 2' },
    { id: 3, title: 'Card 3', content: 'This is the content for Card 3' },
    { id: 4, title: 'Card 4', content: 'This is the content for Card 4' }
  ];

  return (
    <div className="card-container">
      {cardData.map((card) => (
        <div key={card.id} className="card">
          <h3>{card.title}</h3>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AchievementCardComponent;
