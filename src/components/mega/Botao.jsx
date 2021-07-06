import React from 'react';

const Botao = (props) => {
  const { onclick } = props;
  return (
    <div id="botao">
      <button type="button" onClick={onclick}>Gerar</button>
    </div>
  );
};

export default Botao;
