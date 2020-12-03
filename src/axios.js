import axios from 'axios';
const instance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});
 instance.get('/users');
export default instance;