import './Principal.css';

const Principal =  ({titulo}) =>{

    const main = titulo || "Principlal".toUpperCase()

    return (
        <div className='Main_container' style={{"height":"90%"}}>
            <h1>{main}</h1>
        </div>
    )
}

export default Principal