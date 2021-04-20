import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import bcrypt from 'bcrypt'
import { uid } from 'rand-token'

import { AuthToken, Enjoyer, EnjoyerSettings } from '@models'
import { INNER_API_V1_URL, DEFAULT_ERROR_MESSAGE } from '@config'

export const enjoyerRouterFactory = (
  enjoyerRepository: Repository<Enjoyer>,
  authTokenRepository: Repository<AuthToken>,
  enjoyerSettingsRepository: Repository<EnjoyerSettings>
) =>
  Router()
    .get(`${INNER_API_V1_URL}/enjoyer`, (req, res) =>
      req.enjoyer
        ? res.send(req.enjoyer)
        : res.status(401).json({ errors: ['Not Authorized'] })
    )

    .put(`${INNER_API_V1_URL}/enjoyer`, async (req, res) => {
      try {
        if (!req.enjoyer) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const result = await enjoyerRepository.update(req.body, {
          where: { id: req.enjoyer.id },
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

    .put(`${INNER_API_V1_URL}/enjoyer/password`, async (req, res) => {
      try {
        if (!req.enjoyer) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        if (
          !bcrypt.compareSync(
            req.body.oldPassword,
            req.enjoyer.getDataValue('passwordHash')
          )
        ) {
          return res
            .status(400)
            .json({ errors: ['Old password is not correct'] })
        }

        const passwordHash = bcrypt.hashSync(req.body.newPassword, 10)

        const result = await enjoyerRepository.update(
          { passwordHash },
          {
            where: { id: req.enjoyer.id },
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

        const enjoyer = await enjoyerRepository.create(
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

        await enjoyerSettingsRepository.create({
          themeId: 1,
          isDarkModeEnabled: true,
          enjoyerId: enjoyer.id
        })

        const token = uid(32)
        await authTokenRepository.create({ token, enjoyerId: enjoyer.id })
        res.cookie('token', token)

        return res.status(201).json(enjoyer)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .post(`${INNER_API_V1_URL}/signin`, async (req, res) => {
      try {
        if (req.enjoyer) {
          return res.json(req.enjoyer)
        }

        const enjoyer = await enjoyerRepository
          .scope('withSensitiveData')
          .findOne({
            where: { login: req.body.login }
          })

        if (
          enjoyer &&
          bcrypt.compareSync(
            req.body.password,
            enjoyer.getDataValue('passwordHash') ?? ''
          )
        ) {
          const token = uid(32)
          await authTokenRepository.create({ token, enjoyerId: enjoyer.id })
          res.cookie('token', token)

          return res.json(enjoyer)
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
        if (!req.enjoyer) {
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
