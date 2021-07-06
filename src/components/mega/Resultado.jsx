import React from 'react';

const Resultado = (props) => {
  const { numeros } = props;
  return (
    <div>
      <ul>
        {
          numeros.map((numero) => (
            <li key={numero}>
              { numero < 10 ? `0${numero}` : numero }
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Resultado;
