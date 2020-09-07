import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// (async () => {
//     const res = await axios.get(url);
//     console.log(res.data)
// })()

axios.get(url)
    .then((res) => {
        console.log(res.data)
    })