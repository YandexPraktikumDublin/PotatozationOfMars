import axios from 'axios'
import { BASE_API_URL } from '@config'
import httpContext from 'express-http-context'

export const getAxiosInstance = () => {
  let serverOptions = {}

  if (typeof window === 'undefined') {
    serverOptions = {
      headers: {
        Cookie: Object.entries(httpContext.get('cookies') ?? {}).reduce(
          (accumulator, [key, value]) => {
            accumulator += `${key}=${value}; `

            return accumulator
          },
          ''
        )
      }
    }
  }

  return axios.create({
    baseURL: BASE_API_URL,
    withCredentials: true,
    ...serverOptions
  })
}
