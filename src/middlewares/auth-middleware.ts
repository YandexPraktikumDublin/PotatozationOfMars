import { Request, Response, NextFunction } from 'express'

import db from '@database'

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.universalCookies.cookies.token || req.headers.authorization

  if (token) {
    const authToken = await db.authTokenRepository.findOne({
      where: { token },
      include: db.userRepository
    })

    if (authToken) {
      req.user = await authToken?.$get('user')
    }
  }

  next()
}
