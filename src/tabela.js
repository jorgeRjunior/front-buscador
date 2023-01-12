import React from 'react'
function Tabela({vetor}){
    return(
       <table className="table">
        <thead>
            <tr>
                <th>#</th>
                <th>CNPJ</th>
                <th>RAZAO SOCIAL</th>
                <th>E-MAIL</th>
                <th>CNAE</th>
                <th>SELECIONAR</th>
            </tr>
        </thead>
        <tbody>
           {
            vetor.map((obj, indice) => (
                <tr key={indice}>
                    <td>{obj.id}</td>
                    <td>{obj.cnpj.toString().replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")}</td>
                    <td>{obj.razao_social}</td>
                    <td>{obj.correio_eletronico}</td>
                    <td>{obj.cnae_fiscal}</td>
                    <td><button className="btn btn-success">SELECIONAR</button></td>
                </tr>
            ))
          } 
        </tbody>
       </table>
    )
}

export default Tabela;