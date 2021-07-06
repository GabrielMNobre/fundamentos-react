import React from 'react';

const Membro = (props) => {
  const { nome, sobrenome } = props;

  return (
    <div>
      { nome }
      {' '}
      <strong>{ sobrenome }</strong>
    </div>
  );
};

export default Membro;
