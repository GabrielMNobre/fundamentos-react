import React from 'react';

const Aleatorio = (props) => {
  const { max, min } = props;
  const numeroGerado = Math.ceil(Math.random() * (max - min) + min);
  return (
    <div>
      <h2>Valor aleatório</h2>
      <p>
        <strong>Valor mínimo: </strong>
        { min }
      </p>
      <p>
        <strong>Valor máximo: </strong>
        { max }
      </p>
      <p>
        <strong>Valor gerado: </strong>
        {' '}
        { numeroGerado }
      </p>
    </div>
  );
};

export default Aleatorio;
