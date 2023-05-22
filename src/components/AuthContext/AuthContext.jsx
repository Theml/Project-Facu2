import { createContext, useContext, useState } from 'react'
import { loginService } from '../../service/service'

const AuthContext = createContext()

const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const login = (login, senha)=> {
        let uRet = loginService(login, senha)

        if(uRet){
            setUser(uRet)
        }
        
        // if(login === "admin" && senha ==="123"){
        //     setUser({
        //             "nome": "Joãozin",
        //             "login": "admin",
        //             "email": "jo@ozi"
        //             })
        // }
    }

    const logout = ()=>{
        setUser(null)
    }

    const value = {
        login,
        user,
        logout
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>

}

export {AuthProvider, useAuth}