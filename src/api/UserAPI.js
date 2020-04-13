import axios from 'axios';

const endpoint = 'http://localhost:4005/api/v1';

const register = (user) => {
  return axios.post(`${endpoint}/register`, user)
    .then(res => res);
}

const login = (user) => {
  return axios.post(`${endpoint}/login`, user)
    .then(res => res);
}

const update = (user) => {
  return axios.post(`${endpoint}/${user._id}`, user)
    .then(res => res);
}

const deleteUser = (user) => {
  return axios.delete(`${endpoint}/${user._id}`, user)
    .then(res => res);
}

// no need to create an API call to logout because with JWT, the header will be removed and thus unauthenticate user

export default {
  register,
  login, 
  update,
  deleteUser
}