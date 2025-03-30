import Axios from 'axios'

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  validateStatus: (status) => status < 500,
  withCredentials: true
})
