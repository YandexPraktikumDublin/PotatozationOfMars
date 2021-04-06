import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import bcrypt from 'bcrypt'
import { uid } from 'rand-token'

import { AuthToken, roleEnum, User } from '@models'
import { INNER_API_V1_URL, DEFAULT_ERROR_MESSAGE } from '@config'

export const userRouterFactory = (
  userRepository: Repository<User>,
  authTokenRepository: Repository<AuthToken>
) =>
  Router()
    .get(`${INNER_API_V1_URL}/current-user`, (req, res) =>
      req.user
        ? res.send(req.user)
        : res.status(401).json({ errors: ['Not Authorized'] })
    )

    .patch(`${INNER_API_V1_URL}/current-user`, async (req, res) => {
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

    .patch(`${INNER_API_V1_URL}/current-user/password`, async (req, res) => {
      try {
        if (!req.user) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const passwordHash = bcrypt.hashSync(req.body.password, 10)

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

    .post(`${INNER_API_V1_URL}/signin`, async (req, res) => {
      try {
        const passwordHash = bcrypt.hashSync(req.body.password, 10)

        const user = await userRepository.create(
          {
            login: req.body.login,
            passwordHash,
            name: req.body.name,
            role: roleEnum.regular
          },
          {
            fields: ['login', 'name', 'passwordHash'],
            validate: true
          }
        )

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

    .post(`${INNER_API_V1_URL}/login`, async (req, res) => {
      try {
        if (req.user) {
          return res.json(req.user)
        }

        const user = await userRepository.findOne({
          where: { login: req.body.login }
        })

        if (
          user &&
          bcrypt.compareSync(
            req.body.password,
            user.getDataValue('passwordHash')
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

    .get(`${INNER_API_V1_URL}/signout`, async (req, res) => {
      try {
        if (!req.user) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        await authTokenRepository.destroy({
          where: { token: req.universalCookies.cookies.token }
        })

        return res.status(204).json()
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })
