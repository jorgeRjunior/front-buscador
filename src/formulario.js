function Formulario({botao}){
    return(
        <form>
            <input type='text' placeholder='Empresa' className="form-control"></input>
            <input type='text' placeholder='Cnpj' className="form-control"></input>

            {
                botao
                ?
                <input type='button' value='Cadastrar' className="btn btn-primary"></input>
                :
                <div>
                    <input type='button' value='Alterar' className="btn btn-warning"></input>
                    <input type='button' value='Remover' className="btn btn-danger"></input>
                    <input type='button' value='Cancelar' className="btn btn-secondary"></input>
                </div>
                
            }
        </form>
    )
}

export default Formulario;