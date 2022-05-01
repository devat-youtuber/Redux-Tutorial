import axios from "axios";


export const getUsers = async () => {
  const res = await axios.get(`/users?_sort=createdAt&_order=desc`);
  return res.data;
}

export const createUser = async (data) => {
  const res = await axios.post(`/users`, data);
  return res.data;
}

export const updateUser = async (data) => {
  const res = await axios.put(`/users/${data.id}`, data);
  return res.data;
}

export const deleteUser = async (id) => {
  const res = await axios.delete(`/users/${id}`);
  return res.data;
}