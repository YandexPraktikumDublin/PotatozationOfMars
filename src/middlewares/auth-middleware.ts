import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'

import db from '@database'
import { getAxiosInstance } from '@api'
import { generatePassword } from '@utils/misc'
import { uid } from 'rand-token'

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token =
      req.universalCookies.cookies.token || req.headers.authorization

    if (token) {
      const authToken = await db.authTokenRepository.findOne({
        where: { token },
        include: db.enjoyerRepository
      })

      if (authToken) {
        req.enjoyer = await authToken?.$get('enjoyer', {
          scope: 'withSensitiveData'
        })
      }
    }

    if (!req.enjoyer) {
      const user = await getAxiosInstance().get('auth/user')

      if (user.data) {
        let enjoyer = await db.enjoyerRepository.findOne({
          where: { login: user.data?.login }
        })

        if (!enjoyer) {
          const passwordHash = bcrypt.hashSync(generatePassword(), 10)

          const enjoyerName =
            user.data?.display_name ??
            `${user.data?.first_name} ${user.data?.second_name}`

          enjoyer = await db.enjoyerRepository.create({
            login: user.data?.login,
            name: enjoyerName,
            passwordHash
          })

          await db.enjoyerSettingsRepository.create({
            themeId: 1,
            isDarkModeEnabled: true,
            enjoyerId: enjoyer.id
          })
        }

        const token = uid(32)

        await db.authTokenRepository.create({ token, enjoyerId: enjoyer.id })

        res.cookie('token', token)
        req.enjoyer = enjoyer
      }
    }
  } catch (error) {
    console.error(error)
  }

  next()
}
