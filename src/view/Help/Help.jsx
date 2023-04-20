import './Help.css';
import Main from './layout/main/Main';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';


const Help = () => {
    return(
        <div className='container-fluid d-flex flex-column min-vh-100'>
            <div className='row'>
                <div className='col-12'><Header/></div>
            </div>

            <div className='row flex-grow-1 d-flex g-0'>
                <div className='col-12 col-md-8'><Main titulo={"TELA DE AJUDA"}/></div>
            </div>

            <div className='row'>
                <div className='col-12'><Footer/></div>
            </div>
        </div>
    )
}

export default Help