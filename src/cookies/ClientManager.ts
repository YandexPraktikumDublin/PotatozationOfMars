type TCookiesType = {
  [key: string]: string
}

export default class ClientManager {
  get(name: string) {
    const cookies = this.getAll()

    return cookies[name]
  }

  getAll() {
    const pairs = document.cookie.split(';')
    const cookies: TCookiesType = {}

    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split('=')
      cookies[(pair[0] + '').trim()] = decodeURIComponent(pair[1])
    }

    return cookies
  }

  set(name: string, value: string = '', days = 30) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)

    document.cookie = [
      `${name}=${value}`,
      `expires=${date.toUTCString()}`,
      'path=/'
    ].join('; ')
  }
}
