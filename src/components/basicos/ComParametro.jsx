import React from 'react';

export default function ComponenteComParametro(props) {
  const { titulo, subtitulo } = props;
  return (
    <div>
      <h2>{ titulo }</h2>
      <p>{ subtitulo }</p>
    </div>
  );
}
