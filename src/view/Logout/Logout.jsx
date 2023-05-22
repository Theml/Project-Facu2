import { useHistory } from "react-router-dom/cjs/react-router-dom"
import { useAuth } from "../../components/AuthContext/AuthContext"

 const Logout = () => {
 
    const {logout} = useAuth()
    const history = useHistory()

    logout()
    history.push("/")
 }

 export default Logout