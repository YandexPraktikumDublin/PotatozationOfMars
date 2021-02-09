import axsios from 'axios'

const baseUrl = 'https://ya-praktikum.tech/api/v2'

async function signup(data: object) {
  try {
    await axsios.post(`${baseUrl}/auth/signup`, { ...data })
  } catch (error) {
    console.error(error)
  }
}

async function signin(data: object) {
  try {
    await axsios.post(`${baseUrl}/auth/signin`, { ...data })
  } catch (error) {
    console.error(error)
  }
}

async function logout() {
  try {
    await axsios.post(`${baseUrl}/auth/logout`, {})
  } catch (error) {
    console.error(error)
  }
}

async function getUserData() {
  try {
    const result = await axsios.get(`${baseUrl}/auth/user`, {})
    return result
  } catch (error) {
    console.error(error)
  }
}

async function changePassword(data: object) {
  try {
    await axsios.put(`${baseUrl}/user/password`, { ...data })
  } catch (error) {
    console.error(error)
  }
}

async function changeProfile(data: object) {
  try {
    await axsios.put(`${baseUrl}/user/password`, { ...data })
  } catch (error) {
    console.error(error)
  }
}

async function updateAvatar(form: FormData) {
  try {
    await axsios.put(`${baseUrl}/user/profile/avatar`, {
      data: form,
      isForm: true
    })
  } catch (error) {
    console.error(error)
  }
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
