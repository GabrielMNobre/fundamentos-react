import React from 'react';

import './style/TabelaProdutos.css';
import produtos from '../../data/produtos';

const TabelaProdutos = () => (
  <table id="tblProdutos">
    <thead>
      <tr>
        <th>ID</th>
        <th>NOME PRODUTO</th>
        <th>PREÇO</th>
      </tr>
    </thead>
    <tbody>
      {
          produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{ produto.id }</td>
              <td>{ produto.nome }</td>
              <td>
                R$
                { produto.valor.toFixed(2) }
              </td>
            </tr>
          ))
        }
    </tbody>
  </table>
);

export default TabelaProdutos;
