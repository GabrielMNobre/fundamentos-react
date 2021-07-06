import React, { useState } from 'react';

import './Input.css';

export default function Input() {
  const [valor, setValor] = useState('');
  const handleChange = (e) => {
    setValor(e.target.value);
  };

  return (
    <div className="input">
      <h2>{ valor }</h2>
      <input
        type="text"
        placeholder="Digite aqui"
        initialValue={valor}
        onChange={handleChange}
      />
    </div>
  );
}
