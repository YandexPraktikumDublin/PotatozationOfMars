type TReqType = {
  cookies: {
    [key: string]: string
  }
}

type TResType = {
  cookie: (name: string, value: string, obj: object) => void
}

export default class ServerManager {
  _req: TReqType

  _res: TResType

  constructor(req: TReqType, res: TResType) {
    this._req = req
    this._res = res
  }

  get(name: string) {
    return this._req.cookies[name]
  }

  getAll() {
    return this._req.cookies
  }

  set(name: string, value: string = '', days = 30) {
    const maxAge = days * 24 * 60 * 60 * 1000

    this._res.cookie(name, value, { maxAge })
  }
}
