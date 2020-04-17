import axios from 'axios';

const endpoint = 'http://localhost:4005/api/v1';

const register = (user) => {
  return axios.post(`${endpoint}/register`, user)
    .then(res => res)
    .catch(err => console.log(err))
}

const login = (user) => {
  return axios.post(`${endpoint}/login`, user)
    .then(res => res)
    .catch(err => console.log(err))
}

const show = (id) => {
  return axios.get(`${endpoint}/users/${id}`)
  .then(res => res)
  .catch(err => console.log(err))

}

const update = (user) => {
  return axios.put(`${endpoint}/users/${user._id}`, user)
    .then(res => res)
    .catch(err => console.log(err))
}

const deleteUser = (id) => {
  return axios.delete(`${endpoint}/users/${id}`)
    .then(res => res)
    .catch(err => console.log(err))
}

// no need to create an API call to logout because with JWT, the header will be removed and thus unauthenticate user

export default {
  register,
  login, 
  show,
  update,
  deleteUser
}