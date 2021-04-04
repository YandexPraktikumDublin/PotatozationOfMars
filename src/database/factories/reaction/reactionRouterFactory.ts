import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import { Reaction, User } from '@models'
import { INNER_API_V1_URL } from '@config'

export const reactionRouterFactory = (
  reactionRepository: Repository<Reaction>,
  userRepository: Repository<User>
) =>
  Router()
    .get(`${INNER_API_V1_URL}/reactions`, (req, res, next) =>
      reactionRepository
        .findAll({ include: userRepository })
        .then((reactions) =>
          reactions ? res.json(reactions) : next({ statusCode: 404 })
        )
        .catch(next)
    )

    .get(`${INNER_API_V1_URL}/reactions/:id`, (req, res, next) =>
      reactionRepository
        .findByPk(req.params.id, { include: userRepository })
        .then((reaction) =>
          reaction ? res.json(reaction) : next({ statusCode: 404 })
        )
        .catch(next)
    )

    .post(`${INNER_API_V1_URL}/reactions`, (req, res, next) =>
      reactionRepository
        .create(req.body, {
          // TODO: брать userId не из запроса, а из контекста для текущего пользователя
          fields: ['content', 'userId', 'commentId']
        })
        .then((reaction) => res.json(reaction))
        .catch(next)
    )
