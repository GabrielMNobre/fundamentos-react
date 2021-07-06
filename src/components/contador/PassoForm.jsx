import React from 'react';

const Passo = (props) => {
  const { passo, setPasso } = props;
  return (
    <div>
      <label htmlFor="passoInput">Passo: </label>
      <input
        id="passoInput"
        type="number"
        value={passo}
        onChange={(e) => setPasso(+e.target.value)}
      />
    </div>
  );
};

export default Passo;
