import axios from 'axios'
import { BASE_API_URL } from '@config'
import { isServer, getInlineCookiesFromHttpContext } from '@utils/misc'

export const getAxiosInstance = () => {
  let serverOptions = {}

  if (isServer()) {
    serverOptions = {
      headers: {
        Cookie: getInlineCookiesFromHttpContext()
      }
    }
  }

  return axios.create({
    baseURL: BASE_API_URL,
    withCredentials: true,
    ...serverOptions
  })
}
