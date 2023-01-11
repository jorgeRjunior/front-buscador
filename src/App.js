import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './formulario.js';
import Tabela from './tabela.js';  

function App() {
    // UseState
    const [btnCadastrar, setBtnCadastrar] = useState(true);
    const [empresas, setEmpresas] = useState([]);

    // UseEffect - Faz a requesição com o backend
    useEffect(()=>{
        fetch("http://localhost:8080/api/empresa/busca?nome=Construtora")
        .then(retorno => retorno.json())
        .then(retorno_convertido => setEmpresas(retorno_convertido));
    },[]);

    //Retorno
    return (
    <div>
      <Formulario botao={btnCadastrar}></Formulario>
      <Tabela vetor={empresas}></Tabela>
    </div>
  );
}

export default App;
