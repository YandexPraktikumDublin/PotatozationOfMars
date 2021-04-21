import axios from 'axios'
import { requestLogger, responseLogger, errorLogger } from 'axios-logger'
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

  const instance = axios.create({
    baseURL: browserBaseURL,
    withCredentials: true,
    ...serverOptions
  })

  instance.interceptors.request.use(requestLogger, errorLogger)
  instance.interceptors.response.use(responseLogger, errorLogger)

  return instance
}
