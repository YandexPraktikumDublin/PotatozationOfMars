import axios from 'axios'
import { baseUrl } from '@consts'

const baseApiUrl = `${baseUrl}/api/v2`

const instance = axios.create({
  withCredentials: true
})

async function signup(data: object) {
  try {
    await instance.post(`${baseApiUrl}/auth/signup`, { ...data })
  } catch (error) {
    console.error(error)
  }
}

async function signin(data: object) {
  try {
    await instance.post(`${baseApiUrl}/auth/signin`, { ...data })
  } catch (error) {
    console.error(error)
  }
}

function logout() {
  return instance.post(`${baseApiUrl}/auth/logout`, {})
}

function getUserData() {
  return instance.get(`${baseApiUrl}/auth/user`, {})
}

function changePassword(data: object) {
  return instance.put(`${baseApiUrl}/user/password`, { ...data })
}

function changeProfile(data: object) {
  return instance.put(`${baseApiUrl}/user/profile`, { ...data })
}

function updateAvatar(form: FormData) {
  return instance.put(`${baseApiUrl}/user/profile/avatar`, form)
}

export {
  signup,
  signin,
  logout,
  getUserData,
  changePassword,
  changeProfile,
  updateAvatar
}
