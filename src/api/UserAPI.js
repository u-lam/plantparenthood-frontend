import axios from 'axios';

const endpoint = 'http://localhost:4100/api/v1';

const register = (user) => {
  return axios.post(`${endpoint}/register`, user)
    .then(res => res);
}

const login = (user) => {
  return axios.post(`${endpoint}/login`, user)
    .then(res => res);
}

export default {
  register,
  login
}