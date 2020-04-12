import axios from 'axios';

const endpoint = "http://localhost:4100/api/v1/plants";

const index = () => {
  let req = axios.get(endpoint)
  return req;
}

const show = (plant) => {
  let req = axios.get(`${endpoint}/${plant_id}`, plant)
  return req;
}

const create = (plant) => {
  let req = axios.post(endpoint, plant)
  return req;
}

const update = (plant) => {
  let req = axios.put(`${endpoint}/${plant_id}`, plant)
  return req;
}

const delete = (plant) => {
  let req = axios.delete(`${endpoint}/${plant_id}`, plant)
  return req;
}

export default {
  index,
  show,
  create,
  update,
  delete
}