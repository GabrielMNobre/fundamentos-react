import React from 'react';

const styleButton = {
  border: '1px solid #45b48f',
};

export default function IndiretaFilho(props) {
  const { onclick } = props;
  const gerarIdade = () => Math.ceil((Math.random() * (30)) + 25);
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={
          function () {
            onclick('Pablo', gerarIdade(), true);
          }
        }
        type="button"
        style={styleButton}
      >
        Fornecer Informações
      </button>
    </div>
  );
}
