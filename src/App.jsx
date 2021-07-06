import React from 'react';

import './App.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import MegaSena from './components/mega/Mega';

export default function App() {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>

      <div className="cards">
        <Card titulo="#13 - Desafio MegaSena" color="#246ECE">
          <MegaSena />
        </Card>
        <Card titulo="#12 - Contador" color="#CEB424">
          <Contador numeroInicial={10} />
        </Card>
        <Card titulo="#11 - Componente Controlado" color="#E45F56">
          <Input />
        </Card>
        <Card titulo="#10 - Comunicação Indireta" color="#45B48f">
          <IndiretaPai />
        </Card>
        <Card titulo="#09 - Comunicação Direta" color="#482991">
          <DiretaPai />
        </Card>
        <Card titulo="#08 - Renderização Condicional" color="#982395">
          <ParOuImpar numero={20} />
          <UsuarioInfo usuario={{ nome: 'Paulinho' }} />
        </Card>
        <Card titulo="#07 - Desafio Tabela de Produtos" color="#05F365">
          <TabelaProdutos />
        </Card>
        <Card titulo="#06 - Repetição Lista" color="#FF4C65">
          <ListaAlunos />
        </Card>
        <Card titulo="#05 - Componente com filhos" color="#00C8F8">
          <Familia sobrenome="Ferreira">
            <FamiliaMembro nome="Gabriel" />
            <FamiliaMembro nome="Gustavo" />
            <FamiliaMembro nome="Roberto" />
          </Familia>
        </Card>
        <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
          <Aleatorio
            min={1}
            max={100}
          />
        </Card>
        <Card titulo="#03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>
        <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
          <ComParametro
            titulo="Título definido via parâmetro"
            subtitulo="Subtitulo definido via parâmetro"
          />
        </Card>
        <Card titulo="#01 - Primeiro componente" color="#588C73">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}
