import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import { UserSettings } from '@models'
import { DEFAULT_ERROR_MESSAGE, INNER_API_V1_URL } from '@config'

export const userSettingsFactory = (
  userSettingsRepository: Repository<UserSettings>
) =>
  Router()
    .get(`${INNER_API_V1_URL}/user-settings`, async (req, res) => {
      try {
        if (!req.user) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const userSettings = await userSettingsRepository.findOne({
          where: { userId: req.user.id }
        })

        return res.json(userSettings)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .post(`${INNER_API_V1_URL}/user-settings`, async (req, res) => {
      try {
        if (!req.user) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const userSettings = await userSettingsRepository.create(
          { ...req.body, userId: req.user.id },
          {
            fields: ['themeId', 'userId'],
            validate: true
          }
        )

        return res.status(201).json(userSettings)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .put(`${INNER_API_V1_URL}/user-settings`, async (req, res) => {
      try {
        if (!req.user) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const theme = await userSettingsRepository.update(req.body, {
          where: { userId: req.user.id },
          fields: ['themeId'],
          validate: true
        })

        return res.json(theme)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })
