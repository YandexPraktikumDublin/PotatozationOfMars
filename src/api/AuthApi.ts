import axios from 'axios'
import { BASE_API_URL } from '@config'

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true
})

export const signup = (data: Record<string, any>) =>
  axiosInstance.post('auth/signup', data)

export const signin = (data: Record<string, any>) =>
  axiosInstance.post('auth/signin', data)

export const logout = () => axiosInstance.post('auth/logout')
