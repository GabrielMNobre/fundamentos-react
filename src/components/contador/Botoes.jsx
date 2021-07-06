import React from 'react';

const Botoes = (props) => {
  const { increment, decrement } = props;
  return (
    <div>
      <button type="button" onClick={increment}>+</button>
      <button type="button" onClick={decrement}>-</button>
    </div>
  );
};

export default Botoes;
