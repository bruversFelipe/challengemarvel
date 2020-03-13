import axios from 'axios';

const baseURL = 'https://gateway.marvel.com/v1/public';

export default axios.create({
  baseURL,
});
