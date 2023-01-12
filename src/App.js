import React from 'react'
import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './formulario';
import Tabela from './tabela';  

function App() {
    // UseState
    const [btnCadastrar, setBtnCadastrar] = useState(true);
    const [empresas, setEmpresas] = useState([]);

    // UseEffect - Faz a requesição com o backend
    useEffect(() => {
      async function fetchData() {
        const response = await fetch("http://localhost:8080/api/empresa/busca?nome=Construtora");
        const data = await response.json();
        setEmpresas(data);
      }
      fetchData();
    }, []);

    //Retorno
    return (
    <div>
      <Formulario botao={btnCadastrar}></Formulario>
      <Tabela vetor={empresas}></Tabela>
    </div>
  );
}

export default App;
