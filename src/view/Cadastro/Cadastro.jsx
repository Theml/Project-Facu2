import './Cadastro.css'
import CardCadastro from '../../layout/CardCadastro/CardCadastro';
import Footer from '../../layout/footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';




const Cadastro = () => {
    return(
        <div className='d-flex flex-column'>
            {/* <div className='row'>
                <div className='col-12'><Header/></div>
            </div> */}

            <div className='row flex-grow-1 g-0'>
                <div className='col-12'>
                    <CardCadastro/>
                </div>
            </div>

            <div className='row'>
                <div className='col-12'><Footer/></div>
            </div>
        </div>
    )
}

export default Cadastro