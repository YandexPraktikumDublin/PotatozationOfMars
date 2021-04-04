import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import { Reaction } from '@models'
import { INNER_API_V1_URL } from '@config'

export const reactionRouterFactory = (
  reactionRepository: Repository<Reaction>
) =>
  Router()
    .get(`${INNER_API_V1_URL}/reactions`, (req, res, next) =>
      reactionRepository
        .findAll()
        .then((reactions) =>
          reactions ? res.json(reactions) : next({ statusCode: 404 })
        )
        .catch(next)
    )

    .get(`${INNER_API_V1_URL}/reactions/:id`, (req, res, next) =>
      reactionRepository
        .findByPk(req.params.id)
        .then((reaction) =>
          reaction ? res.json(reaction) : next({ statusCode: 404 })
        )
        .catch(next)
    )

    .post(`${INNER_API_V1_URL}/reactions`, (req, res, next) =>
      reactionRepository
        .create(req.body, {
          fields: ['content', 'userId', 'commentId']
        })
        .then((reaction) => res.json(reaction))
        .catch(next)
    )
