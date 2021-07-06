import React, { Component } from 'react';

import './Contador.css';

import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

class Contador extends Component {
  constructor(props) {
    super(props);

    // fixa o valor do this para o componente atual, sem - .bind(this) da erro
    // outra opção é utilizar uma arrow function para declarar o increment()
    // pois a arrow function utiliza o this do local onde é chamada, logo o this seria o componente
    this.increment = this.increment.bind(this);
    this.setPasso = this.setPasso.bind(this);
  }

  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 1,
  }

  increment() {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  }

  decrement = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  }

  setPasso(novoPasso) {
    this.setState({
      passo: novoPasso,
    });
  }

  render() {
    return (
      <div className="contador">
        <Display numero={this.state.numero} />
        <PassoForm
          passo={this.state.passo}
          setPasso={this.setPasso}
        />
        <Botoes
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  }
}

export default Contador;
