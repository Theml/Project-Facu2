import './Login.css';
import Footer from '../../layout/footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
// import Principal from '../../layout/main/Principal';
import CardLogin from '../../layout/CardLogin/CardLogin';



const Login = () => {
    return(
        <div className='d-flex flex-column'>
            {/* <div className='row'>
                <div className='col-12'><Header/></div>
            </div> */}

            <div className='row flex-grow-1 g-0'>
                <div className='col-12'>
                    {/* <Principal titulo="TELA DE LOGIN"/> */}
                    <CardLogin/>
                </div>
            </div>

            <div className='row'>
                <div className='col-12'><Footer/></div>
            </div>
        </div>
    )
}

export default Login