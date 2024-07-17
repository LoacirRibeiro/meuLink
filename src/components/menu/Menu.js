import '../menu/Menu.css'
import { BsYoutube, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function menu(){
    return(
        <div className='menu'>
            <a className='social' href='https://youtube.com/c/sujeitoprogramdor'>
                <BsYoutube color='#fff' size={24} />
            </a>
            <a className='social' href='https://instagram.com/sujeitoprogramdor'>
                <BsInstagram color='#fff' size={24} />
            </a>
            <Link className='menu-item' to='/links' >
                Meus Links
            </Link>

        </div>
    );

};

export default menu;

