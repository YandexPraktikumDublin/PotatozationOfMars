import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import { Topic, Comment, User } from '@models'
import { INNER_API_V1_URL } from '@config'

export const topicRouterFactory = (
  topicRepository: Repository<Topic>,
  userRepository: Repository<User>,
  commentRepository: Repository<Comment>
) =>
  Router()
    .get(`${INNER_API_V1_URL}/topics`, (req, res, next) =>
      topicRepository
        .findAll({ include: [userRepository, commentRepository] })
        .then((topics) =>
          topics ? res.json(topics) : next({ statusCode: 404 })
        )
        .catch(next)
    )

    .get(`${INNER_API_V1_URL}/topics/:id`, (req, res, next) =>
      topicRepository
        .findByPk(req.params.id, {
          include: [userRepository, commentRepository]
        })
        .then((topic) => (topic ? res.json(topic) : next({ statusCode: 404 })))
        .catch(next)
    )

    .post(`${INNER_API_V1_URL}/topics`, (req, res, next) =>
      topicRepository
        .create(
          { ...req.body, userId: 1 }, // TODO: брать userId не из запроса, а из контекста для текущего пользователя
          {
            fields: ['subject', 'content', 'userId']
          }
        )
        .then((topic) => res.json(topic))
        .catch(next)
    )
