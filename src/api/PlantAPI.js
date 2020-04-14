import axios from 'axios';

const endpoint = "http://localhost:4005/api/v1/plants";

const index = () => {
  let req = axios.get(endpoint)
  return req;
}

// const indexUser = () => {
//   let req = axios.get("http://localhost:4005/api/v1/myplants")
//   return req;
// }

const show = (plant) => {
  let req = axios.get(`${endpoint}/${plant.id}`, plant)
  return req;
}

const create = (plant) => {
  let req = axios.post(endpoint, plant)
  return req;
}

const update = (plant) => {
  let req = axios.put(`${endpoint}/${plant.id}`, plant)
  return req;
}

const deletePlant = (plant) => {
  let req = axios.delete(`${endpoint}/${plant.id}`, plant)
  return req;
}

export default {
  index,
  // indexUser,
  show,
  create,
  update,
  deletePlant
}