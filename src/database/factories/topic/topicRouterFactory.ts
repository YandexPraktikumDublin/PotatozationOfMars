import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import { Topic, User } from '@models'
import { DEFAULT_ERROR_MESSAGE, INNER_API_V1_URL } from '@config'

export const topicRouterFactory = (
  topicRepository: Repository<Topic>,
  userRepository: Repository<User>
) =>
  Router()
    .get(`${INNER_API_V1_URL}/topics`, async (req, res) => {
      try {
        if (!req.user) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const topics = await topicRepository.findAll({
          include: [userRepository]
        })

        return res.json(topics)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .get(`${INNER_API_V1_URL}/topics/:id`, async (req, res) => {
      try {
        if (!req.user) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const topic = await topicRepository.findByPk(req.params.id, {
          include: [userRepository]
        })

        if (!topic) {
          return res.status(404).json({ errors: ['Not Found'] })
        }

        return res.json(topic)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .post(`${INNER_API_V1_URL}/topics`, async (req, res) => {
      try {
        if (!req.user) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const topic = await topicRepository.create(
          { ...req.body, userId: req.user.id },
          {
            fields: ['subject', 'content', 'userId'],
            validate: true
          }
        )

        return res.status(201).json(topic)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })
