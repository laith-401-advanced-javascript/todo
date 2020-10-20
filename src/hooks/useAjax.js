/* eslint-disable no-unused-vars */
import axios from 'axios';


export default () => {
    
    const axiosApi = (url, method, body) => {
        return axios({
            url: url,
            method: method,
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            data: body
        })
    }
    return [axiosApi];
}



// const useAjax = (callback) => {
//     const url = 'http://localhost:3030/api/v1/todos';

//     const getItem = async () => {
//         await axios.get(url).then(item => {
//             callback(item.data.results);
//         }).catch(console.error)
//     }

//     const postItem = async body => {
//         const options = {
//             mode: 'cors',
//             cache: 'no-cache',
//             headers: { 'Content-Type': 'application/json' }
//         };
//         await axios.post(url, JSON.stringify(body), options).catch(console.error)
//     };

//     const putItem = async (item) => {
//         await axios.put(`${url}/${item._id}`, { complete: item.complete })
//             .catch(console.error)
//     }

//     const deleteItem = async (id) => {
//         await axios.delete(`${url}/${id}`)
//         .catch(console.error)
//     }


//     return [getItem, postItem, putItem, deleteItem]
// }

// export default useAjax;