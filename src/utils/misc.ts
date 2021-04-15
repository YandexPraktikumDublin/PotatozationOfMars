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

export const hardRedirectTo = (location: string): void => {
  if (!isServer()) window.location.href = location
}

export const formatDate = (date?: string): string =>
  date
    ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      })
    : ''

export const generatePassword = (): string =>
  Math.random().toString(36).slice(-8)

export const setStyleVariable = (name: string, value: string): void => {
  if (!isServer()) document.documentElement.style.setProperty(name, value)
}
