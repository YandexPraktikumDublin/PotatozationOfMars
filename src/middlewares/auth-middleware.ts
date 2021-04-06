import { Request, Response, NextFunction } from 'express'

import { User } from '@models'
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
      include: User
    })

    if (authToken) {
      req.user = authToken.user
    }
  }

  next()
}
