import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import { EnjoyerSettings } from '@models'
import { DEFAULT_ERROR_MESSAGE, INNER_API_V1_URL } from '@config'

export const enjoyerSettingsRouterFactory = (
  enjoyerSettingsRepository: Repository<EnjoyerSettings>
) =>
  Router()
    .get(`${INNER_API_V1_URL}/enjoyer-settings`, async (req, res) => {
      try {
        if (!req.enjoyer) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const enjoyerSettings = await enjoyerSettingsRepository.findOne({
          where: { enjoyerId: req.enjoyer.id }
        })

        return res.json(enjoyerSettings)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .post(`${INNER_API_V1_URL}/enjoyer-settings`, async (req, res) => {
      try {
        if (!req.enjoyer) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const enjoyerSettings = await enjoyerSettingsRepository.create(
          { ...req.body, enjoyerId: req.enjoyer.id },
          {
            fields: ['themeId', 'isDarkModeEnabled', 'enjoyerId'],
            validate: true
          }
        )

        return res.status(201).json(enjoyerSettings)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .put(`${INNER_API_V1_URL}/enjoyer-settings`, async (req, res) => {
      try {
        if (!req.enjoyer) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const result = await enjoyerSettingsRepository.update(req.body, {
          where: { enjoyerId: req.enjoyer.id },
          fields: ['themeId', 'isDarkModeEnabled'],
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
