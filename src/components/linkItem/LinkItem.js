import './LinkItem.css';

import { FiX, FiClipboard } from 'react-icons/fi';

function LinkItem ( { closeModal, content } ){
    // copiar Link
    async function copyLink(){
        await navigator.clipboard.writeText(content.link)
        alert("URL copiada com sucesso!")
    }

    return(
        <div className='modal-container'>
            <div className='modal-header' >
               <h2>Link Encurtado</h2> 
               <button onClick={closeModal} >
                <FiX size={28} color='#000' />
               </button>
            </div>

            <span>
                {content.long_url }  {/*https://sujeitoprogramador.com */}
            </span>

            <button className='modal-link' onClick={copyLink}>
                {content.link} {/* https://bit.ly/12900 */}
                <FiClipboard size={20} color='#fff' />
            </button>
             
        </div>
    );
}

export default LinkItem;