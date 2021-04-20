import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import { Reaction, Enjoyer } from '@models'
import { DEFAULT_ERROR_MESSAGE, INNER_API_V1_URL } from '@config'

export const reactionRouterFactory = (
  reactionRepository: Repository<Reaction>,
  enjoyerRepository: Repository<Enjoyer>
) =>
  Router()
    .get(`${INNER_API_V1_URL}/reactions`, async (req, res) => {
      try {
        if (!req.enjoyer) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const reactions = await reactionRepository.findAll({
          include: enjoyerRepository
        })

        return res.json(reactions)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .get(`${INNER_API_V1_URL}/reactions/:id`, async (req, res) => {
      try {
        if (!req.enjoyer) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const reaction = await reactionRepository.findByPk(req.params.id, {
          include: enjoyerRepository
        })

        if (!reaction) {
          res.status(404).json({ errors: ['Not Found'] })
        }

        return res.json(reaction)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .post(`${INNER_API_V1_URL}/reactions`, async (req, res) => {
      try {
        if (!req.enjoyer) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const reaction = await reactionRepository.create(
          { ...req.body, enjoyerId: req.enjoyer.id },
          {
            fields: ['content', 'enjoyerId', 'hierarchyLevel', 'commentId'],
            validate: true
          }
        )

        await reaction.reload({ include: [enjoyerRepository] })

        return res.status(201).json(reaction)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .delete(`${INNER_API_V1_URL}/reactions/:id`, async (req, res) => {
      try {
        if (!req.enjoyer) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        await reactionRepository.destroy({
          where: { id: req.params.id, enjoyerId: req.enjoyer.id }
        })

        return res.status(204).json()
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })
