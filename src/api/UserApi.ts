import axios from 'axios'
import { BASE_API_URL } from '@config'

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true
})

export const getUserData = () => axiosInstance.get('auth/user')

export const changeUserPassword = (data: Record<string, any>) =>
  axiosInstance.put('user/password', data)

export const changeUserData = (data: Record<string, any>) =>
  axiosInstance.put('user/profile', data)

export const updateUserAvatar = (data: FormData) =>
  axiosInstance.put('user/profile/avatar', data)
