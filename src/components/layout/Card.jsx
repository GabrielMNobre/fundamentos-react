import React from 'react';

import './Card.css';

export default function Card(props) {
  const { titulo, children, color } = props;
  const cardStyle = {
    backgroundColor: color || '#F00',
    borderColor: color || '#F00',
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card-title">{ titulo }</div>
      <div className="card-content">
        { children }
      </div>
    </div>
  );
}
