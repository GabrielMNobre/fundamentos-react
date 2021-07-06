import React from 'react';

import alunos from '../../data/alunos';

export default function Lista() {
  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {
          alunos.map((aluno) => (
            <li key={aluno.id}>
              {aluno.id}
              )
              {aluno.nome}
              {' '}
              =
              {aluno.nota}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
