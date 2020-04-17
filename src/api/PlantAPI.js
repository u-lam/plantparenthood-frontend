import axios from 'axios';

const endpoint = "http://localhost:4005/api/v1/plants";

const index = () => {
  return axios.get(endpoint)
    .then(res => res)
    .catch(err => console.log(err))
}

// const indexUser = (id) => {
//   return axios.get("http://localhost:4005/api/v1/myplants")
//     .then(res => res)
//     .catch(err => console.log(err))
// }

const show = (plant) => {
  return axios.get(`${endpoint}/${plant.id}`, plant)
    .then(res => res)
    .catch(err => console.log(err))
}

const create = (plant) => {
  return axios.post(endpoint, plant)
    .then(res => res)
    .catch(err => console.log(err))
}

const update = (plant) => {
  return axios.put(`${endpoint}/${plant.id}`, plant)
    .then(res => res)
    .catch(err => console.log(err))
}

const deletePlant = (id) => {
  return axios.delete(`${endpoint}/${id}`)
    .then(res => res)
    .catch(err => console.log(err))
}

// const adopt = (plant) => {
//   return axios.put(`${endpoint}/${plant.id}`, plant)
//   .then(res => res)
//   .catch(err => console.log(err))
// }

const donate = (id) => {
  return axios.put(`${endpoint}/donate/${id}`)
  .then(res => res)
  .catch(err => console.log(err))
}

export default {
  index,
  // indexUser,
  show,
  create,
  update,
  deletePlant,
  // adopt,
  donate
}