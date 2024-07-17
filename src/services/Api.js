// minha chave bitly 7f2cd39e2181c84cee9e0ab2f6f3cce2a2701fe1 
// senha bitly Pedro@057
// para encurtar URL, QRcode. entre outros
import axios from 'axios';

export const key = '7f2cd39e2181c84cee9e0ab2f6f3cce2a2701fe1';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;



