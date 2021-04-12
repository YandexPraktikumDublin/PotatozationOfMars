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
        include: db.userRepository
      })

      if (authToken) {
        req.user = await authToken?.$get('user', { scope: 'withSensitiveData' })
      }
    }

    if (!req.user) {
      const outerUser = await getAxiosInstance().get('auth/user')

      if (outerUser.data) {
        let user = await db.userRepository.findOne({
          where: { login: outerUser.data?.login }
        })

        if (!user) {
          const passwordHash = bcrypt.hashSync(generatePassword(), 10)

          const userName =
            outerUser.data?.display_name ??
            `${outerUser.data?.first_name} ${outerUser.data?.second_name}`

          user = await db.userRepository.create({
            login: outerUser.data?.login,
            name: userName,
            passwordHash
          })

          await db.userSettingsRepository.create({
            themeId: 1,
            isDarkModeEnabled: true,
            userId: user.id
          })
        }

        const token = uid(32)

        await db.authTokenRepository.create({ token, userId: user.id })

        res.cookie('token', token)
        req.user = user
      }
    }
  } catch (error) {
    console.error(error)
  }

  next()
}
