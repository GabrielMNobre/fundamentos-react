import React from 'react';

const Display = (props) => {
  const { numero } = props;
  return (
    <div>
      <h2>{numero}</h2>
    </div>
  );
};

export default Display;
