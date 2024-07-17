import { FiLink } from "react-icons/fi";
import '../home/Home.css'

import Menu from "../../components/menu/Menu";
import { useState } from "react";
import LinkItem from "../../components/linkItem/LinkItem";

import api from '../../services/Api';
import { saveLink } from '../../services/storeLinks'

function Home(){
    const [ link, setLink ] = useState('');
    const [ data, setData ] = useState({});
    const [ showModal, setShowModal ] = useState(false);

    async function handleShortLink(){
        try{
            const response = await api.post('/shorten', {
                long_url: link
            })
            
            setData(response.data);
            setShowModal(true);

            saveLink('@encurtaLink', response.data)

            setLink('')
            
        }catch{
            alert('Ops, parece que algo deu errado!');
            setLink('');
        }
    }


    return(
        <div className="container-home">
            
            <div className="logo">
                <img src='gearloading_87549.png' alt='Sujeito link logo' />
                <h1>Sujeito Link</h1>
                <span>Cole seu link para encurtar</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color="#FFF" />
                    <input 
                        placeholder="Cole seu Link aqui..."
                        value={link}
                        onChange={ (e) => setLink(e.target.value) }
                    />
                </div>    
                    
                <button onClick={handleShortLink}>
                     Gerar Link
                </button>                    
           </div>
           
            <Menu />

            {showModal && (
                <LinkItem 
                  closeModal={ () => setShowModal(false)}
                  content={data}  
                />
            )}

        </div>
    );
}

export default Home;