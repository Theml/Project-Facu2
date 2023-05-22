import './Header.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../components/AuthContext/AuthContext';

const Header =  () =>{

    const {user} = useAuth()

    return (
        <div className='Header_container rounded'>

            <NavLink to="/" exact activeClassName="active" >
                Home
            </NavLink>
            
            { user === null ?
            <NavLink to="/login" exact activeClassName="active">
                Login
            </NavLink>
            :
            <NavLink to="/logout" exact activeClassName="active">
                Logout 
            </NavLink> 
            }

            <NavLink to="/cadastro" exact activeClassName="active" >
                Cadastro
            </NavLink>

           

        </div>
    )
}

export default Header