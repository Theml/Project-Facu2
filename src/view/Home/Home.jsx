import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../layout/footer/Footer';
import Principal from '../../layout/main/Principal';
import { useAuth } from '../../components/AuthContext/AuthContext';


const Home = () => {

    const {user} = useAuth()

    return(
        <div className='container-fluid d-flex flex-column' style={{"height": "90vh"}}>
            {/* <div className='row'>
                <div className='col-12'><Header/></div>
            </div> */}

            <div className='row flex-grow-1 d-flex g-0'>
                <div className='col-12'>
                    {!user?
                    <Principal titulo="TELA HOME"/>
                    :
                    <Principal titulo={"Bem vindo \n" + user.nome}/>}
                </div>
            </div>

            <div className='row'>
                <div className='col-12'><Footer/></div>
            </div>
        </div>
    )
}

export default Home
