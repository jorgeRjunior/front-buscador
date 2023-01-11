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
                    <td>{obj.cnpj}</td>
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