import { axiosInstance } from '@api'

export const signup = (data: Record<string, any>) =>
  axiosInstance.post('auth/signup', data)

export const signin = (data: Record<string, any>) =>
  axiosInstance.post('auth/signin', data)

export const logout = () => axiosInstance.post('auth/logout')
