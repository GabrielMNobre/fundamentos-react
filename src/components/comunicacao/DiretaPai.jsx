import React from 'react';

import DiretaFilho from './DiretaFilho';

export default function DiretaPai() {
  return (
    <div>
      <DiretaFilho
        nome="Gustavo"
        idade={15}
        casado={false}
      />
    </div>
  );
}
