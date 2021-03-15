type reqType = {
  cookies: {
    [key: string]: any
  }
}

type resType = {
  cookie: (name: string, value: string, obj: object) => any
}

export default class ServerManager {
  _req: reqType

  _res: resType

  constructor(req: reqType, res: resType) {
    this._req = req
    this._res = res
  }

  get(name: string) {
    return this._req.cookies[name]
  }

  getAll() {
    return this._req.cookies
  }

  set(name: string, value: any, days = 30) {
    const maxAge = days * 24 * 60 * 60 * 1000

    this._res.cookie(name, value, { maxAge })
  }
}
