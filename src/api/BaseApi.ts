import axios from 'axios'
import { BASE_API_URL } from '@config'
import { isServer, getInlineCookiesFromHttpContext } from '@utils/misc'

export const getAxiosInstance = (
  browserBaseURL = BASE_API_URL,
  serverBaseURL = BASE_API_URL
) => {
  let serverOptions = {}

  if (isServer()) {
    serverOptions = {
      baseURL: serverBaseURL,
      headers: {
        Cookie: getInlineCookiesFromHttpContext()
      }
    }
  }

  return axios.create({
    baseURL: browserBaseURL,
    withCredentials: true,
    ...serverOptions
  })
}
