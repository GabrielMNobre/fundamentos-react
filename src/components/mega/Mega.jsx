import React, { useState } from 'react';

import GeraArray from './gerarNumeros';
import Input from './Input';
import Botao from './Botao';
import Resultado from './Resultado';

import './Mega.css';

const MegaSena = () => {
  const [qtdNumero, setQtdNumero] = useState(1);
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  const setNumero = (numero) => {
    setQtdNumero(numero);
  };

  const geraSorte = () => {
    setNumerosSorteados(GeraArray(qtdNumero) || []);
  };

  return (
    <div id="megasena">
      <Input
        setNumero={setNumero}
      />
      <Botao
        onclick={geraSorte}
      />
      <Resultado
        numeros={numerosSorteados}
      />
    </div>
  );
};

export default MegaSena;
