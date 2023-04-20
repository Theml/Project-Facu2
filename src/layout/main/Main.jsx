import './Main.css';

const Main =  ({titulo}) =>{

    const main = titulo || "Principlal".toUpperCase()

    return (
        <div className='Main_container h-100'>
            {main}
        </div>
    )
}

export default Main