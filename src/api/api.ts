import axios from 'axios';

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "b52a002d-f0a3-465d-96d7-30d5b1e7fca5"
  }

})

export const getUsers = (currentPage: number, pageSize: number ) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
}

export const authUsers = () => {
  return instance.get(`auth/me`)
}

export const deleteUsers = (id: number) => {
  return instance.delete(`follow/${id}`)
}

export const postUsers = (id: number) => {
  return instance.post(`follow/${id}`)
}




