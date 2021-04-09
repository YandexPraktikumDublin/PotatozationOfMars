import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import bcrypt from 'bcrypt'
import { uid } from 'rand-token'

import { AuthToken, User, UserSettings } from '@models'
import { INNER_API_V1_URL, DEFAULT_ERROR_MESSAGE } from '@config'

export const userRouterFactory = (
  userRepository: Repository<User>,
  authTokenRepository: Repository<AuthToken>,
  userSettingsRepository: Repository<UserSettings>
) =>
  Router()
    .get(`${INNER_API_V1_URL}/user`, (req, res) =>
      req.user
        ? res.send(req.user)
        : res.status(401).json({ errors: ['Not Authorized'] })
    )

    .put(`${INNER_API_V1_URL}/user`, async (req, res) => {
      try {
        if (!req.user) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const result = await userRepository.update(req.body, {
          where: { id: req.user.id },
          fields: ['login', 'name'],
          validate: true,
          returning: true
        })

        return res.json(result[1][0])
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .put(`${INNER_API_V1_URL}/user/password`, async (req, res) => {
      try {
        if (!req.user) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        if (
          !bcrypt.compareSync(
            req.body.oldPassword,
            req.user.getDataValue('passwordHash')
          )
        ) {
          return res
            .status(400)
            .json({ errors: ['Old password is not correct'] })
        }

        const passwordHash = bcrypt.hashSync(req.body.newPassword, 10)

        const result = await userRepository.update(
          { passwordHash },
          {
            where: { id: req.user.id },
            fields: ['passwordHash'],
            validate: true,
            returning: true
          }
        )

        return res.json(result[1][0])
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .post(`${INNER_API_V1_URL}/signup`, async (req, res) => {
      try {
        const passwordHash = bcrypt.hashSync(req.body.password, 10)

        const user = await userRepository.create(
          {
            login: req.body.login,
            name: req.body.name,
            passwordHash
          },
          {
            fields: ['login', 'name', 'passwordHash'],
            validate: true
          }
        )

        await userSettingsRepository.create({
          themeId: 1,
          isDarkModeEnabled: true,
          userId: user.id
        })

        const token = uid(32)
        await authTokenRepository.create({ token, userId: user.id })
        res.cookie('token', token)

        return res.status(201).json(user)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .post(`${INNER_API_V1_URL}/signin`, async (req, res) => {
      try {
        if (req.user) {
          return res.json(req.user)
        }

        const user = await userRepository.scope('withSensitiveData').findOne({
          where: { login: req.body.login }
        })

        if (
          user &&
          bcrypt.compareSync(
            req.body.password,
            user.getDataValue('passwordHash') ?? ''
          )
        ) {
          const token = uid(32)
          await authTokenRepository.create({ token, userId: user.id })
          res.cookie('token', token)

          return res.json(user)
        }

        res.status(400).json({ errors: ['Invalid parameters'] })
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .post(`${INNER_API_V1_URL}/logout`, async (req, res) => {
      try {
        if (!req.user) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        await authTokenRepository.destroy({
          where: { token: req.universalCookies.cookies.token }
        })

        res.clearCookie('token')

        return res.status(204).json()
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })
