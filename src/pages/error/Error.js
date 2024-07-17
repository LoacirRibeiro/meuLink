import { Link } from 'react-router-dom';
import '../error/Error.css'


function Error(){
    return(
        <div className="container-error">
            <img src='404.png.png' alt='pagina Error' />
            <Link to='/' >
                Voltar
            </Link>
                
            
        </div>
    )

}

export default Error;