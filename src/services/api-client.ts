import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'cda555ce31494eabbc094f21f1fe2c21',
  },
});
