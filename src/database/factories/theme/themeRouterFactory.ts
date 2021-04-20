import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import { RoleEnum, Theme } from '@models'
import { DEFAULT_ERROR_MESSAGE, INNER_API_V1_URL } from '@config'

export const themeRouterFactory = (themeRepository: Repository<Theme>) =>
  Router()
    .get(`${INNER_API_V1_URL}/themes`, async (req, res) => {
      try {
        if (!req.enjoyer) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const themes = await themeRepository.findAll()

        return res.json(themes)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .get(`${INNER_API_V1_URL}/themes/:id`, async (req, res) => {
      try {
        if (!req.enjoyer) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const theme = await themeRepository.findByPk(req.params.id)

        if (!theme) {
          return res.status(404).json({ errors: ['Not Found'] })
        }

        return res.json(theme)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .post(`${INNER_API_V1_URL}/themes`, async (req, res) => {
      try {
        if (
          !req.enjoyer ||
          req.enjoyer.getDataValue('role') !== RoleEnum.admin
        ) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const theme = await themeRepository.create(req.body, {
          fields: ['name', 'preset', 'isEnabled'],
          validate: true
        })

        return res.status(201).json(theme)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .put(`${INNER_API_V1_URL}/themes/:id`, async (req, res) => {
      try {
        if (
          !req.enjoyer ||
          req.enjoyer.getDataValue('role') !== RoleEnum.admin
        ) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const theme = await themeRepository.update(req.body, {
          where: { id: req.params.id },
          fields: ['name', 'preset', 'isEnabled'],
          validate: true,
          returning: true
        })

        return res.json(theme)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })
