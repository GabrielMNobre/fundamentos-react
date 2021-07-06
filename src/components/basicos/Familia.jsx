import React, { cloneElement } from 'react';

// ...props passa todos os parâmetros do pai para o filho
// passar componentes do pai para o componente filho, baseado no children do app
// cloneElement resgata o elemento passado como children e permite enviar as propriedades do pai
const Familia = (props) => {
  const { children } = props;
  return (
    <div>
      {
        children.map((child, i) => cloneElement(child, { ...props, key: i }))
      }
    </div>
  );
};

export default Familia;
