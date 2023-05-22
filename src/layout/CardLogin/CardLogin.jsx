import { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { useAuth } from '../../components/AuthContext/AuthContext'
import './CardLogin.css'

const CardLogin = () => {

    const [log, setLog] = useState({"login":"", "senha":""})

    {/* podruzir um contest protegendo a pagina login para caso o usuario n tiver login e demonstrar a pagina cadastro no lugar de login */}

    const {login} = useAuth()

    const history = useHistory()

    const verify = () => {
        login(log.login, log.senha)
        history.push("/") 
    };
        // console.log(verify);

    return (
        <div className="card cl_Container" style={{width: "18rem"}}>
            <h1 className="card-img-top">Login</h1>
            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <div className="card-text d-flex flex-column">
                    <label>Login</label>
                    <input type="text" value={log.login} onChange={(e)=>setLog({...log, "login":e.target.value})}/>
                    <label>Senha</label>
                    <input type="password" value={log.senha} onChange={(e)=>setLog({...log, "senha":e.target.value})}/>
                </div>
                <a className="btn btn-primary" onClick={verify}>Ok</a>
            </div>
        </div>
    )

}

export default CardLogin