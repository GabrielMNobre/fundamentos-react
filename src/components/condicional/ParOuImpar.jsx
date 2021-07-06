import React from 'react';

export default function ParOuImpar(props) {
  const { numero } = props;
  return (
    <div>
      {
        numero % 2 === 0
          ? (
            <span>
              {numero}
              {' '}
              é:
              {' '}
              <strong>Par</strong>
            </span>
          )
          : (
            <span>
              {numero}
              {' '}
              é:
              {' '}
              <strong>Ímpar</strong>
            </span>
          )
      }
    </div>
  );
}
