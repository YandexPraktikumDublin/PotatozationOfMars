import { axiosInstance } from '@api'

export const changeUserPassword = (data: Record<string, any>) =>
  axiosInstance.put('user/password', data)

export const changeUserData = (data: Record<string, any>) =>
  axiosInstance.put('user/profile', data)

export const updateUserAvatar = (data: FormData) =>
  axiosInstance.put('user/profile/avatar', data)
