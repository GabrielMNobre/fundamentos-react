import React, { useState } from 'react';

import IndiretaFilho from './IndiretaFilho';

export default function IndiretaPai() {
  const [nome, setNome] = useState('?');
  const [idade, setIdade] = useState(0);
  const [casado, setCasado] = useState(false);
  const fornecerInformacoes = (nomeParam, idadeParam, casadoParam) => {
    setNome(nomeParam);
    setIdade(idadeParam);
    setCasado(casadoParam);
  };

  return (
    <div>
      <div>
        <span>
          {nome}
          {' '}
          tem
          {' '}
        </span>
        <span>
          {idade}
          {' '}
          anos e
          {' '}
        </span>
        <span><strong>{casado ? 'é casado' : 'não é casado'}</strong></span>
      </div>
      <IndiretaFilho onclick={fornecerInformacoes} />
    </div>
  );
}
