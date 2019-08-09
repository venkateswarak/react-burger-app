import axios from 'axios';

const instance = axios.create({
baseURL: 'https://ven-burger-app.firebaseio.com'
})

export default instance;