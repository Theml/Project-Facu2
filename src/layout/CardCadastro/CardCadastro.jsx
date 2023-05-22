import { useState } from 'react'
import './CardCadastro.css'

//criar um cadastro padrão com sexo ,nome ,email, senha e idade
export default function CardCadastro() {
  
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [sexo, setSexo] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
      <div onSubmit={handleSubmit} className="card cl_Container" style={{width:"18rem"}}>
        <h1 className="card-img-top">Cadastre</h1>

        <div className="card-body">
          <div className="card-text d-flex flex-column">
            <label htmlFor="nome">Nome:</label>
            <input
              className="form-control-sm"
              id="nome"
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            
            <label htmlFor="email">Email:</label>
            <input
              className="form-control-sm"
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          
            <label htmlFor="senha">Senha:</label>
            <input
              className="form-control-sm"
              id="senha"
              type="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />

            <label htmlFor="idade">Idade:</label>
            <input
              className="form-control-sm"
              id="idade"
              type="number"
              value={idade}
              onChange={(event) => { const value = parseInt(event.target.value); 
                if(!isNaN(value) && value >= 1 ) { setIdade(event.target.value)}}}
            />
            
            <label htmlFor="sexo">Sexo:</label>
            <select className="form-control-sm" id="sexo" value={sexo} onChange={(event) => setSexo(event.target.value)}>
              <option value=""></option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select> 
            
            <a className="btn btn-primary">Enviar</a>
          </div>
        </div>
      </div>
    );
}