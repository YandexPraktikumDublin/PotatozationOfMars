import httpContext from 'express-http-context'
import Cookies from 'universal-cookie'

export const isServer = (): boolean =>
  !(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  )

export const getInlineCookiesFromHttpContext = () =>
  Object.entries(httpContext.get('cookies') ?? {}).reduce(
    (accumulator, [key, value]) => {
      accumulator += `${key}=${value}; `

      return accumulator
    },
    ''
  )

export const clearCookies = () => {
  const cookies = new Cookies()

  Object.entries(cookies.getAll() ?? {}).forEach(([key]) => {
    cookies.remove(key)
  })
}

export const hardRedirectTo = (location: string) => {
  if (!isServer()) window.location.href = location
}
