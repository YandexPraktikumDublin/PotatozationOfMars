import axios from 'axios'
import { BASE_API_URL } from '@config'
import { isServer, getInlineCookiesFromHttpContext } from '@utils/misc'

export const getAxiosInstance = (baseUrl = BASE_API_URL) => {
  let serverOptions = {}

  if (isServer()) {
    serverOptions = {
      headers: {
        Cookie: getInlineCookiesFromHttpContext()
      }
    }
  }

  return axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    ...serverOptions
  })
}
