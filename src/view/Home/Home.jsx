import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../layout/footer/Footer';
import Principal from '../../layout/main/Principal';


const Home = () => {
    return(
        <div className='container-fluid d-flex flex-column' style={{"height": "90vh"}}>
            {/* <div className='row'>
                <div className='col-12'><Header/></div>
            </div> */}

            <div className='row flex-grow-1 d-flex g-0'>
                <div className='col-12'>
                    <Principal titulo="TELA HOME"/>
                </div>
            </div>

            <div className='row'>
                <div className='col-12'><Footer/></div>
            </div>
        </div>
    )
}

export default Home