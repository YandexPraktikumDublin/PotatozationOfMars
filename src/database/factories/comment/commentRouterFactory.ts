import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import { Comment, Reaction } from '@models'
import { INNER_API_V1_URL } from '@config'

export const commentRouterFactory = (
  commentRepository: Repository<Comment>,
  reactionRepository: Repository<Reaction>
) =>
  Router()
    .get(`${INNER_API_V1_URL}/comments`, (req, res, next) =>
      commentRepository
        .findAll({ include: reactionRepository })
        .then((comments) =>
          comments ? res.json(comments) : next({ statusCode: 404 })
        )
        .catch(next)
    )

    .get(`${INNER_API_V1_URL}/comments/:id`, (req, res, next) =>
      commentRepository
        .findByPk(req.params.id, { include: reactionRepository })
        .then((comment) =>
          comment ? res.json(comment) : next({ statusCode: 404 })
        )
        .catch(next)
    )

    .post(`${INNER_API_V1_URL}/comments`, (req, res, next) =>
      commentRepository
        .create(req.body, {
          fields: ['content', 'userId', 'topicId', 'parentId', 'hierarchyLevel']
        })
        .then((comment) => res.json(comment))
        .catch(next)
    )
