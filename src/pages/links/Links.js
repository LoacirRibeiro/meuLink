import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../links/Links.css'
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'

import { getLinksSave, deleteLink } from '../../services/storeLinks'
import LinkItem from '../../components/linkItem/LinkItem';



function Links() {

  const [myLinks, setMyLinks] = useState([]);

  const[ data, setData ] = useState({});
  const[ showModal, setShowModal ] = useState(false);

  const[ emptyList, setEmptyList ] =useState(false)


  useEffect(() => {
    async function getLinks(){
      const result = await getLinksSave('@encurtaLink')

      if (result.length === 0){
        // nossa lista está vazia...
        setEmptyList(true);
      }
      setMyLinks(result)

    }
    
    getLinks();

  },[])

  function handleOpenLink(link){
    setData(link)
    setShowModal(true);
  }

   async function handleDelete(id){
    const result = await deleteLink(myLinks, id)

      if(result.length ===0){
        setEmptyList(true)
      }
      setMyLinks(result)
   }


    return (
      <div className='links-container'>
       <div className='links-header' > 
        <Link to='/'>
        <FiArrowLeft className='wLeft' />
        </Link>
        <h1>Meus Links</h1>
       </div>

       { emptyList && (
        <div className='link-item'>
          <h2 className='empty-text'>Sua lista esta vazia...</h2>
        </div>


       )}

        {myLinks.map(link => (
           <div key={link.id} className='links-item'>
           <button className='link' onClick={() => handleOpenLink(link)}>
             <FiLink className='filink' />
             {link.long_url}   {/* https://sujeitoprogramador.com */}
           </button>
           <button className='link-delete' onClick={() => handleDelete(link.id)} >
             <FiTrash className='fitrash'/>
           </button>
          
          </div>
        ))}

        { showModal && (
          <LinkItem
            closeModal={ () => setShowModal(false)}
            content={data}
            />
        )}

      </div>
    );
  }
  
  export default Links;