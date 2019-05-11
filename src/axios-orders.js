import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-store-34cea.firebaseio.com/'
})

export default instance;