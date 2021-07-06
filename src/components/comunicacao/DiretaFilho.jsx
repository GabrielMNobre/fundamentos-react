import React from 'react';

export default function DiretaFilho(props) {
  const { nome, idade, casado } = props;
  return (
    <div>
      <span>
        { nome }
        {' '}
        tem
        {' '}
      </span>
      <span>
        { idade }
        {' '}
        anos e
        {' '}
      </span>
      <span>
        <strong>
          { casado ? 'é casado' : 'não é casado' }
          !
        </strong>
      </span>
    </div>
  );
}
