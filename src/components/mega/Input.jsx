import React from 'react';

const Input = (props) => {
  const { setNumero } = props;
  return (
    <div id="input">
      <label htmlFor="qtdNumero">Quantidade de números: </label>
      <input
        id="qtdNumero"
        type="number"
        min="1"
        max="22"
        onChange={(e) => setNumero(+e.target.value)}
      />
    </div>
  );
};

export default Input;
