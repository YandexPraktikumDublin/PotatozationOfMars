import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import { Reaction, User } from '@models'
import { DEFAULT_ERROR_MESSAGE, INNER_API_V1_URL } from '@config'

export const reactionRouterFactory = (
  reactionRepository: Repository<Reaction>,
  userRepository: Repository<User>
) =>
  Router()
    .get(`${INNER_API_V1_URL}/reactions`, async (req, res) => {
      try {
        if (!req.user) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const reactions = await reactionRepository.findAll({
          include: userRepository.scope('withoutSensitiveData')
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
        if (!req.user) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const reaction = await reactionRepository.findByPk(req.params.id, {
          include: userRepository.scope('withoutSensitiveData')
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
        if (!req.user) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const reaction = await reactionRepository.create(
          { ...req.body, userId: req.user.id },
          {
            fields: ['content', 'userId', 'commentId'],
            validate: true
          }
        )

        return res.status(201).json(reaction)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })
